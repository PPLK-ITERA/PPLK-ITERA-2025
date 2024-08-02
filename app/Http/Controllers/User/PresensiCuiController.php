<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\PresensiCui;
use App\Models\LogCui;
use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PresensiCuiController extends Controller
{
   public function storeHadir(Request $request)
   {
      $validated = $request->validate([
         'user_id' => 'required|integer',
      ]);

      $user = User::find($validated['user_id']);
      if (!$user) {
         return Inertia::render("Dashboard/cui/absensi/DetailMaba", [
            "response" => [
               "status" => 404,
               "message" => "User tidak ditemukan",
               "data" => [
                  'user_id' => $validated['user_id']
               ]
            ]
         ]);
      }

      // cek apakah user merupakan maba
      if ($user->role->role != 'Maba') {
         return Inertia::render("Dashboard/cui/absensi/DetailMaba", [
            "response" => [
               "status" => 400,
               "message" => "User bukan merupakan maba",
               "data" => [
                  'user_id' => $validated['user_id']
               ]
            ]
         ]);
      }

      $log = LogCui::where('user_id', $user->id)->first();

      if ($log) {
         return Inertia::render("Dashboard/cui/absensi/DetailMaba", [
            "data" => [
               'status' => $log->status,
               'nama' => $user->name,
               'nim' => $user->nim,
               'prodi' => $user->prodi->nama_prodi,
               'pita' => $user->penyakit->pita ?? null,
               'riwayat' => $user->penyakit->ket_penyakit ?? "-",
               'qr_code' => $user->qrcode->code,
            ]
         ]);
      }

      DB::beginTransaction();
      try {
         LogCui::create([
            'user_id' => $user->id,
            'status' => 'hadir',
         ]);
         DB::commit();
         return Inertia::render("Dashboard/cui/absensi/DetailMaba", [
            "data" => [
               'status' => 'hadir',
               'nama' => $user->name,
               'nim' => $user->nim,
               'prodi' => $user->prodi->nama_prodi,
               'pita' => $user->penyakit->pita ?? null,
               'riwayat' => $user->penyakit->ket_penyakit ?? "-",
               'qr_code' => $user->qrcode->code,
            ]
         ]);
      } catch (\Exception $e) {
         DB::rollback();
         return Inertia::render("Dashboard/cui/absensi/DetailMaba", [
            "response" => [
               "status" => 500,
               "message" => "Gagal melakukan presensi",
               "data" => [
                  'user_id' => $validated['user_id']
               ]
            ]
         ]);
      }
   }

   public function QRScan(Request $request)
   {
      $validated = $request->validate([
         'qr_code' => 'required|string',
      ]);

      $qrcode = Qrcode::where('code', $validated['qr_code'])->first();
      if (!$qrcode) {
         return Inertia::render("Dashboard/cui/absensi/result/Page", [
            "response" => [
               "status" => 404,
               "message" => "QR Code tidak ditemukan",
               "data" => [
                  'qr_code' => $validated['qr_code']
               ]
            ]
         ]);
      }
      $user = User::findorfail($qrcode->user_id);
      if (!$user) {
         return Inertia::render("Dashboard/cui/absensi/result/Page", [
            "response" => [
               "status" => 404,
               "message" => "User tidak ditemukan",
               "data" => [
                  $validated['qr_code']
               ]
            ]
         ]);
      }
      $log = LogCui::where('user_id', $user->id);

      // jika user belum melakukan presensi, tampilkan halaman presensi
      if (!$log->exists()) {
         return Inertia::render('Dashboard/cui/absensi/DetailMaba', [
            'data' => [
               'status' => 'belum hadir',
               'id' => $user->id,
               'nama' => $user->name,
               'imgUrl' => $user->photo_profile_url,
               'nim' => $user->nim,
               'prodi' => $user->prodi->nama_prodi,
               'pita' => $user->penyakit->pita ?? null,
               'riwayat' => $user->penyakit->ket_penyakit ?? "-",
               'qr_code' => $validated['qr_code'],
            ]
         ]);
      }

      // jika user sudah melakukan presensi dan sedang izin, tampilkan halaman status izin

      if ($log->latest('created_at')->first()->status == 'izin') {
         return Inertia::render('Dashboard/cui/absensi/DetailMaba', [
            'data' => [
               'status' => 'izin',
               'id' => $user->id,
               'nama' => $user->name,
               'nim' => $user->nim,
               'imgUrl' => $user->photo_profile_url,
               'prodi' => $user->prodi->nama_prodi,
               'pita' => $user->penyakit->pita ?? null,
               'riwayat' => $user->penyakit->ket_penyakit ?? "-",
               'qr_code' => $validated['qr_code'],
               'waktu_izin' => $log->first()->waktu_izin,
               'ket_izin' => $log->first()->ket_izin,
            ]
         ]);
      }

      // jika user sudah melakukan presensi, tampilkan halaman status
      return Inertia::render('Dashboard/cui/absensi/DetailMaba', [
         'data' => [
            'status' => 'hadir',
            'id' => $user->id,
            'nama' => $user->name,
            'nim' => $user->nim,
            'imgUrl' => $user->photo_profile_url,
            'prodi' => $user->prodi->nama_prodi,
            'pita' => $user->penyakit->pita ?? null,
            'riwayat' => $user->penyakit->ket_penyakit ?? "-",
            'qr_code' => $validated['qr_code'],
            'waktu_hadir' => $log->first()->created_at,
         ]
      ]);
   }

   public function storeIzin(Request $request, $code)
   {
      $validated = $request->validate([
         'ket_izin' => 'required|string',
      ]);

      $userid = Qrcode::where('code', $code)->first()->user_id;
      $user = User::find($userid);

      if (!$user->exists()) {
         return response()->json(['message' => 'User tidak ditemukan'], 404);
      }

      $log = LogCui::where('user_id', $userid)->latest('created_at')->first();
      if ($log->first()->status != 'izin') {
         DB::beginTransaction();
         try {
            LogCui::create([
               'user_id' => $user->id,
               'status' => 'izin',
               'ket_izin' => $validated['ket_izin'],
               'waktu_izin' => now(),
            ]);
            DB::commit();
         } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Gagal melakukan izin'], 500);
         }
         return redirect()->route('cui.status', ['code' => $code])->with('message', 'Izin peserta berhasil');
      }
      return redirect()->route('cui.status', ['code' => $code])->with('message', 'Peserta sedang izin');
   }

   public function destroyIzin($code)
   {
      $userid = Qrcode::where('code', $code)->first()->user_id;
      $user = User::find($userid);
      if (!$user->exists()) {
         return response()->json(['message' => 'User tidak ditemukan'], 404);
      }
      DB::beginTransaction();
      try {
         LogCui::where('user_id', $userid)->latest('created_at')->first()->update([
            'waktu_selesai' => Carbon::now(),
         ]);
         LogCui::create([
            'user_id' => $user->id,
            'status' => 'hadir',
            'ket_izin' => 'Selesai Izin',
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return response()->json(['message' => 'Gagal mencabut izin'], 500);
      }
      return redirect()->route('cui.status', ['code' => $code])->with('message', 'Izin peserta berhasil dicabut');
   }

   public function status($code)
   {
      if (Qrcode::where('code', $code)->doesntExist()) {
         return Inertia::render("Dashboard/cui/absensi/result/Page", [
            "response" => [
               "status" => 404,
               "message" => "User tidak ditemukan",
               "data" => [
                  'result' => $code
               ]
            ]
         ]);
      }
      $userid = Qrcode::where('code', $code)->first()->user_id;
      $user = User::find($userid);
      $log = LogCui::where('user_id', $userid)->latest('created_at');
      if (!$user->exists()) {
         return response()->json(['message' => 'User tidak ditemukan'], 404);
      }
      if (!$log->exists()) {
         return response()->json(['message' => 'Belum Melakukan Presensi'], 404);
      }

      $response = [
         'nama' => $user->name,
         'nim' => $user->nim,
         'prodi' => $user->prodi->nama_prodi,
         'pita' => $user->penyakit->pita ?? null,
         'riwayat' => $user->penyakit->ket_penyakit ?? "-",
         'status' => $log->first()->status,
         'photo_profile_url' => $user->photo_profile_url,
         'qrcode' => $code,
         'waktu' => $log->first()->created_at ?? null,
         'waktu_izin' => $log->first()->waktu_izin ?? null,
         'ket_izin' => $log->first()->ket_izin ?? null,
      ];

      return Inertia::render('Dashboard/cui/absensi/result/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Sudah Melakukan Presensi',
            'data' => $response
         ]
      ]);
   }

   public function getMabaByNim($nim)
   {
      $validator = \Validator::make(
         ['nim' => $nim],
         [
            'nim' => 'required|string|digits:9',
         ],
         [
            'nim' => 'NIM harus berupa 9 digit angka!'
         ]
      );

      if ($validator->fails()) {
         return response()->json([
            'message' => $validator->errors()->first('nim') // Mengembalikan error pertama terkait NIM
         ], 422);
      }

      $user = User::where('nim', $nim)->first();
      if (!$user) {
         return response()->json(['message' => 'NIM ' . $nim . ' tidak ditemukan'], 404);
      }
      $log = LogCui::where('user_id', $user->id)->latest('created_at');
      $qrcode = Qrcode::where('user_id', $user->id)->first()->code;

      $response = [
         'message' => 'Berhasil mendapatkan NIM ' . $nim,
         'nama' => $user->name,
         'nim' => $user->nim,
         'profil_url' => $user->photo_profile_url,
         'prodi' => $user->prodi->nama_prodi,
         'pita' => $user->penyakit->pita ?? null,
         'riwayat' => $user->penyakit->ket_penyakit ?? "-",
         'qr_code' => $qrcode,
         'status' => $log->first()->status ?? null,
      ];
      return response()->json(
         ['message' => 'Berhasil mendapatkan NIM ' . $nim, 'data' => $response]
      );
      // return Inertia::render(
      //    'Dashboard/cui/Page',
      //    [
      //       'response' => [
      //          'status' => 200,
      //          'message' => 'Berhasil mendapatkan NIM ' . $validated['nim'],
      //          'data' => $response
      //       ]
      //    ]
      // );
   }
   public function index(Request $request)
   {
      // Count for 'pita hijau' - Count unique users only
      $pitahijau = LogCui::whereHas('user.penyakit', function ($q) {
         $q->where('pita', 'hijau');
      })->distinct('user_id')->count('user_id');

      // Count for 'pita kuning' - Count unique users only
      $pitakuning = LogCui::whereHas('user.penyakit', function ($q) {
         $q->where('pita', 'kuning');
      })->distinct('user_id')->count('user_id');

      // Count for 'pita merah' - Count unique users only
      $pitamerah = LogCui::whereHas('user.penyakit', function ($q) {
         $q->where('pita', 'merah');
      })->distinct('user_id')->count('user_id');

      $izin = LogCui::where('status', 'izin')
         ->whereNull('waktu_selesai')
         ->distinct('user_id')
         ->count('user_id');

      return Inertia::render('Dashboard/cui/Page', [
         'response' => [
            'status' => 200,
            'message' => "Berhasil load dashboard CUI",
            'data' => [
               'tab' => $request->tab,
               'pita' => [
                  'hijau' => $pitahijau,
                  'kuning' => $pitakuning,
                  'merah' => $pitamerah,
               ],
               'izin' => $izin
            ]
         ]
      ]);
   }

   public function getLogBook(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = LogCui::query()
         ->with(['user', 'user.penyakit', 'user.kelompok']) // Memastikan semua data yang diperlukan di eager load
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->whereHas('user', function ($q) use ($searchTerm) {
               $q->where('name', 'like', '%' . $searchTerm . '%')
                  ->orWhere('nim', 'like', '%' . $searchTerm . '%')
                  ->orWhere('email', 'like', '%' . $searchTerm . '%');
            });
         })
         ->orderBy('created_at', 'desc');

      $logbooks = $query->paginate($perPage);

      $currentPage = $logbooks->currentPage(); // Halaman saat ini
      $perPage = $logbooks->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $logbooks->getCollection()->transform(function ($logbook) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $logbook->id,
            'user_id' => $logbook->user_id,
            'status' => $logbook->status,
            'waktu_izin' => $logbook->waktu_izin,
            'waktu_selesai' => $logbook->waktu_selesai,
            'waktu_hadir' => ($logbook->status == 'izin' ? null : $logbook->created_at),
            'ket_izin' => $logbook->ket_izin,
            'user' => [
               'name' => $logbook->user->name,
               'nim' => $logbook->user->nim,
               'email' => $logbook->user->email,
               'photo_profile_url' => $logbook->user->photo_profile_url,
               'qrcode' => $logbook->user->qrcode->code,
               'nama_kelompok' => $logbook->user->kelompok->nama_kelompok,
               'penyakit' => [
                  'pita' => $logbook->user->penyakit->pita,
                  'ket_penyakit' => $logbook->user->penyakit->ket_penyakit,
               ],
            ],
         ];
      });

      return response()->json($logbooks);
   }

   public function absensi()
   {
      return Inertia::render('Dashboard/cui/absensi/Page');
   }

   public function indexIzin($nim)
   {
      $log = LogCui::with(['user', 'user.prodi', 'user.qrcode', 'user.penyakit'])
         ->whereHas('user', function ($query) use ($nim) {
            $query->where('nim', $nim);
         })
         ->latest('created_at')
         ->first();

      // if ($log && $log->waktu_izin) {
      //    return Inertia::render('Dashboard/cui');
      // }

      return Inertia::render('Dashboard/cui/izin/Page', [
         'data' => [
            'nama' => $log->user->name,
            'nim' => $log->user->nim,
            'status' => $log->status,
            'pita' => $log->user->penyakit->pita,
            'prodi' => $log->user->prodi->nama_prodi,
            'photo_profile_url' => $log->user->photo_profile_url,
            'waktu_hadir' => $log->created_at,
            'waktu_izin' => $log->waktu_izin,
            'waktu_selesai' => $log->waktu_selesai,
            'qr_code' => $log->user->qrcode->code
         ]
      ]);
   }
}