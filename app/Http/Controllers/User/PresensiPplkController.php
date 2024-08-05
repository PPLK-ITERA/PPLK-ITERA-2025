<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use App\Models\Prodi;
use App\Models\Qrcode;
use App\Models\PresensiPplk;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PresensiPplkController extends Controller
{
   public function QRScan(Request $request)
   {
      $validated = $request->validate([
         'qr_code' => 'required|string',
      ]);

      $qrcode = Qrcode::where('code', $validated['qr_code'])->first();
      if (!$qrcode) {
         return response()->json([
            "status" => 404,
            "message" => "QR Code tidak ditemukan",
            "data" => [
               'qr_code' => $validated['qr_code']
            ]
         ], 404);
      }
      $user = User::findorfail($qrcode->user_id);
      if(Auth::user()->role_id == 5){
         if($user->prodi_id != Auth::user()->prodi_id){
            return response()->json([
               "status" => 403,
               "message" => "Maba tidak ada di prodi anda",
               "data" => [
                  $validated['qr_code']
               ]
            ], 403);
         }
      }elseif(Auth::user()->role_id == 2 || Auth::user()->role_id == 4){
         $kelompok = Auth::user()->kelompok_id;
         if($kelompok != $user->kelompok_id){
            return response()->json([
               "status" => 403,
               "message" => "Maba tidak ada di kelompok anda",
               "data" => [
                  $validated['qr_code']
               ]
            ], 403);
         }
      }
      if (!$user) {
         return response()->json([
            "status" => 404,
            "message" => "User tidak ditemukan",
            "data" => [
               $validated['qr_code']
            ]
         ], 404);
      }
      $presensi = PresensiPplk::where('user_id', $user->id)->where('tanggal_presensi', Carbon::today());
      if (!$presensi->exists()) {
         DB::beginTransaction();
         try {
            $presensi_now = PresensiPplk::create([
               'user_id' => $user->id,
               'tanggal_presensi' => Carbon::today(),
               'status' => 'Hadir',
            ]);
            DB::commit();
         } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Gagal membuat log'], 500);
         }
         return response()->json([
            'response' => [
               'status' => 200,
               'message' => $presensi_now->user->name . ' berhasil melakukan presensi.',
               'data' => [
                  "nama" => $presensi_now->user->name,
                  "tanggal" => $presensi_now->tanggal_presensi
               ]
            ]
         ], 200);
      } else {
         $presensi = $presensi->first();
         if ($presensi->kehadiran == 'Hadir') {
            return response()->json([
               'response' => [
                  'status' => 400,
                  'message' => $presensi->user->name . ' Telah melakukan presensi.',
                  'data' => [
                     "nama" => $presensi->user->name,
                     "tanggal" => $presensi->tanggal_presensi
                  ]
               ]
            ], 400);
         } else if ($presensi->kehadiran) {
            return response()->json([
               'response' => [
                  'status' => 400,
                  'message' => $presensi->user->name . ' izin tidak mengikuti PPLK, tidak bisa melakukan presensi.',
                  'data' => [
                     "nama" => $presensi->user->name,
                     "tanggal" => $presensi->tanggal_presensi
                  ]
               ]
            ], 400);
         }
      }
   }

   // tambah berdasarkan prodi filter bydate
   public function index()
   {
      $user = Auth::user();
      $kelompok_id = $user->kelompok_id;
      $prodi_id = $user->prodi_id; // Assuming this exists if role_id 5 needs it

      // Initialize variables for response
      $users = collect(); // Empty collection as default
      $hadir = 0;
      $izin = 0;

      if ($user->role_id == 2 || $user->role_id == 4) {
         // Role 2 and 4: Access users from the same kelompok
         $users = User::where('kelompok_id', $kelompok_id)
            ->where('role_id', 1)
            ->count();

         $hadir = PresensiPplk::whereHas('user', function ($query) use ($kelompok_id) {
            $query->where('kelompok_id', $kelompok_id);
         })->where('kehadiran', 'Hadir')->count();

         $izin = PresensiPplk::whereHas('user', function ($query) use ($kelompok_id) {
            $query->where('kelompok_id', $kelompok_id);
         })->where('kehadiran', 'Izin')->count();
      } elseif ($user->role_id == 5) {
         // Role 5: Access users by prodi_id
         $users = User::where('prodi_id', $prodi_id)
            ->where('role_id', 1)
            ->count();

         $hadir = PresensiPplk::whereHas('user', function ($query) use ($prodi_id) {
            $query->where('prodi_id', $prodi_id);
         })->where('kehadiran', 'Hadir')->count();

         $izin = PresensiPplk::whereHas('user', function ($query) use ($prodi_id) {
            $query->where('prodi_id', $prodi_id);
         })->where('kehadiran', 'Izin')->count();
      } elseif ($user->role_id == 3) {
         // Role 3: Access all users with role_id 1
         $users = User::where('role_id', 1)->count();

         $hadir = PresensiPplk::where('kehadiran', 'Hadir')->count();
         $izin = PresensiPplk::where('kehadiran', 'Izin')->count();
      } else {
         // Unauthorized access
         return response()->json([
            'response' => [
               'status' => 403,
               'message' => 'Anda tidak memiliki akses',
            ]
         ], 403);
      }

      // Pass data to Inertia view
      return Inertia::render('Dashboard/absensi-maba/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Data presensi berhasil diambil',
            'data' => [
               'tidakHadir' => $users - $hadir - $izin,
               'hadir' => $hadir,
               'izin' => $izin,
            ]
         ]
      ]);
   }

   public function getAllPresensi(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');
      $date = $request->input('date', Carbon::today()->toDateString());

      if (!in_array(Auth::user()->role_id, [2, 4, 5, 3])) {
         return response()->json([
            'response' => [
               'status' => 403,
               'message' => 'Anda tidak memiliki akses',
            ]
         ], 403);
      }

      $query = User::query()->where('role_id', 1);

      if (Auth::user()->role_id === 2 || Auth::user()->role_id === 4) {
         $query->where('kelompok_id', Auth::user()->kelompok_id);
      } elseif (Auth::user()->role_id === 5) {
         $query->where('prodi_id', Auth::user()->prodi_id);
      }

      $query->with(['penyakit', 'kelompok', 'presensi'])
         ->where(function ($q) use ($searchTerm, $date) {
            $q->where('name', 'like', '%' . $searchTerm . '%')
               ->orWhere('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('email', 'like', '%' . $searchTerm . '%')
               ->orWhereHas('presensi', function ($query) use ($searchTerm, $date) {
                  $query->where('kehadiran', 'like', '%' . $searchTerm . '%')
                     ->orWhere('tanggal_presensi', $date);
               });
         });

      $attendances = $query->paginate($perPage);

      $attendances->getCollection()->transform(function ($user, $key) use ($perPage, $attendances) {
         $currentIndex = ($attendances->currentPage() - 1) * $perPage + $key + 1;
         return [
            'no' => $currentIndex,
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'photo_profile_url' => $user->photo_profile_url,
               'qrcode' => optional($user->qrcode)->code,
               'nama_kelompok' => optional($user->kelompok)->nama_kelompok,
               'penyakit' => [
                  'pita' => optional($user->penyakit)->pita,
                  'ket_penyakit' => optional($user->penyakit)->ket_penyakit,
               ],
               'status' => optional($user->presensi)->kehadiran ?: 'Tidak Hadir',
               'tanggal_presensi' => optional($user->presensi)->tanggal_presensi ?: '-',
               'ket_izin' => optional($user->presensi)->kehadiran === 'Izin' ? $user->presensi->keterangan : '-',
            ],
         ];
      });

      return response()->json($attendances);
   }


   public function store(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'kehadiran' => 'required|in:Hadir,Izin',
         'keterangan' => 'string|nullable'
      ]);

      DB::beginTransaction();
      try {
         $presensi = PresensiPplk::create(
            [
               'user_id' => $validated['id'],
               'tanggal_presensi' => Carbon::today(),
               'kehadiran' => $validated['kehadiran'],
               'keterangan' => $validated['keterangan']
            ]
         );
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->route('dashboard.absensi-maba')->with('failed', 'Presensi gagal ditambahkan');
      }

      return redirect()->route('dashboard.absensi-maba')->with('success', 'Presensi berhasil ditambahkan');
   }

   public function updateKehadiran(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'kehadiran' => 'required|in:Hadir,Izin,Tidak Hadir',
         'keterangan' => 'string|nullable',
      ]);
      // $presensi = PresensiPplk::where('user_id', $user_id)->where('tanggal_presensi', $tanggal_presensi);
      DB::beginTransaction();
      try {
         $presensi = PresensiPplk::create(
            [
               'user_id' => $validated['id'],
               'tanggal_presensi' => Carbon::today(),
               'kehadiran' => 'Izin',
               'keterangan' => $validated['keterangan']
            ]
         );
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->route('presensi.index')->with('failed', 'Presensi gagal ditambahkan');
      }
      return redirect()->route('presensi.index')->with('success', 'Presensi berhasil ditambahkan');
   }

   public function destroyAbsen(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'date' => 'required|date'
      ]);
      $presensi = PresensiPplk::find($validated['id']);
      if (!$presensi) {
         return response()->json([
            'response' => [
               'status' => 404,
               'message' => 'Presensi tidak ditemukan',
            ]
         ], 404);
      }
      DB::beginTransaction();
      try {
         $presensi->delete();
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => 'Gagal menghapus presensi',
            ]
         ], 500);
      }
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Presensi berhasil dihapus',
         ]
      ], 200);
   }
}
