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
         'qr_code' => 'required|string|max:10',
      ]);

      // Define the time window when actions are allowed
      $currentTime = Carbon::now();
      $start = Carbon::today()->setHour(6); // 7 AM today
      $end = Carbon::today()->setHour(20); // 8 PM today

      // Check if the action is permissible based on the date and current time
      $action = Carbon::today()->toDateString() && $currentTime->between($start, $end);

      if (!$action) {
         return redirect()->back()->with('response', [
            "status" => 403,
            "message" => "Maaf hanya bisa dilakukan saat jam 7 Pagi hingga Jam 6 Sore",
         ]);

      }

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
      if (Auth::user()->role_id == 5) {
         if ($user->prodi_id != Auth::user()->prodi_id) {
            return response()->json([
               "status" => 403,
               "message" => "Maba tidak ada di prodi anda",
               "data" => [
                  $validated['qr_code']
               ]
            ], 403);
         }
      } elseif (Auth::user()->role_id == 2 || Auth::user()->role_id == 4) {
         $kelompok = Auth::user()->kelompok_id;
         if ($kelompok != $user->kelompok_id) {
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
      return Inertia::render('Dashboard/absensi-maba/Page');
   }
   public function dataHadir(Request $request)
   {
      $user = Auth::user();
      $kelompok_id = $user->kelompok_id;
      $prodi_id = $user->prodi_id; // Assuming this exists if role_id 5 needs it

      // Initialize variables for response
      $users = collect(); // Empty collection as default
      $hadir = 0;
      $izin = 0;

      $date = $request->input('date', Carbon::today()->toDateString());

      if ($user->role_id == 2 || $user->role_id == 4) {
         // Get latest attendance entries for the kelompok
         $latestPresensiIds = PresensiPplk::whereHas('user', function ($query) use ($kelompok_id) {
            $query->where('kelompok_id', $kelompok_id);
         })->where('tanggal_presensi', $date)
            ->selectRaw('MAX(id) as id')
            ->groupBy('user_id');

         $users = User::where('kelompok_id', $kelompok_id)
            ->where('role_id', 1)
            ->count();

         $hadir = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Hadir')
            ->count();

         $izin = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Izin')
            ->count();
      } elseif ($user->role_id == 5) {
         // Get latest attendance entries for the prodi
         $latestPresensiIds = PresensiPplk::whereHas('user', function ($query) use ($prodi_id) {
            $query->where('prodi_id', $prodi_id);
         })->where('tanggal_presensi', $date)
            ->selectRaw('MAX(id) as id')
            ->groupBy('user_id');

         $users = User::where('prodi_id', $prodi_id)
            ->where('role_id', 1)
            ->count();

         $hadir = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Hadir')
            ->count();

         $izin = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Izin')
            ->count();
      } elseif ($user->role_id == 3) {
         // Get latest attendance entries for all users with role_id 1
         $latestPresensiIds = PresensiPplk::where('tanggal_presensi', $date)
            ->selectRaw('MAX(id) as id')
            ->groupBy('user_id');

         $users = User::where('role_id', 1)->count();

         $hadir = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Hadir')
            ->count();

         $izin = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Izin')
            ->count();
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
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Data presensi berhasil diambil',
            'data' => [
               'tidakHadir' => $users - $hadir - $izin,
               'hadir' => $hadir,
               'izin' => $izin,
            ]
         ]
      ], 200);
   }


   public function getAllPresensi(Request $request, $date = null)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');
      $date = $date ?: Carbon::today()->toDateString();

      // Define the time window when actions are allowed
      $currentTime = Carbon::now();
      $start = Carbon::today()->setHour(6); // 7 AM today
      $end = Carbon::today()->setHour(20); // 8 PM today

      // Check if the action is permissible based on the date and current time
      $action = $date === Carbon::today()->toDateString();
      // && $currentTime->between($start, $end);

      if (!in_array(Auth::user()->role_id, [2, 4, 5, 3])) {
         return response()->json([
            'response' => [
               'status' => 403,
               'message' => 'You do not have access',
            ]
         ], 403);
      }

      $query = User::query()->where('role_id', 1);

      if (Auth::user()->role_id === 2 || Auth::user()->role_id === 4) {
         $query->where('kelompok_id', Auth::user()->kelompok_id);
      } elseif (Auth::user()->role_id === 5) {
         $query->where('prodi_id', Auth::user()->prodi_id);
      }

      $query->with([
         'penyakit',
         'kelompok',
         'presensi' => function ($q) use ($date) {
            $q->where('tanggal_presensi', $date);
         }
      ]);

      $query->where(function ($q) use ($searchTerm) {
         $q->where('name', 'like', '%' . $searchTerm . '%')
            ->orWhere('nim', 'like', '%' . $searchTerm . '%')
            ->orWhere('email', 'like', '%' . $searchTerm . '%');
      });

      $attendances = $query->paginate($perPage);

      // Add the action boolean to the pagination result
      $attendances->getCollection()->transform(function ($user) use ($action) {
         $presence = optional($user->presensi)->first(); // Safe access
         return [
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'photo_profile_url' => $user->photo_profile_url ?? null,
               'qrcode' => optional($user->qrcode)->code,
               'nama_kelompok' => optional($user->kelompok)->nama_kelompok,
               'penyakit' => [
                  'pita' => optional($user->penyakit)->pita,
                  'ket_penyakit' => optional($user->penyakit)->ket_penyakit,
               ],
               'status' => $presence ? $presence->kehadiran : 'Tidak Hadir',
               'tanggal_presensi' => $presence ? $presence->tanggal_presensi : '-',
               'ket_izin' => ($presence && $presence->kehadiran === 'Izin') ? $presence->keterangan : '-',
            ],
            'action' => $action // Include the action key here
         ];
      });

      return response()->json($attendances);
   }





   public function store(Request $request)
   {
      // Check if the current time is within the allowed range
      $currentTime = Carbon::now();
      $start = Carbon::today()->setHour(6); // 7 AM today
      $end = Carbon::today()->setHour(20); // 8 PM today

      if (!$currentTime->between($start, $end)) {
         return redirect()->route('dashboard.absensi-maba')->with('response', [
            'status' => 403,
            'message' => 'Presensi hanya dapat ditambahkan antara jam 7 pagi dan 8 malam.'
         ]);
      }

      // Validation rules
      $validated = $request->validate([
         'id' => 'required|integer',
         'kehadiran' => 'required|in:Hadir,Izin',
         'keterangan' => 'string|nullable'
      ]);

      // Start transaction
      DB::beginTransaction();
      try {
         // Check if there's a last attendance record for today
         $lastPresensi = PresensiPplk::where('user_id', $validated['id'])
            ->where('tanggal_presensi', Carbon::today())
            ->latest()
            ->first();

         // If there is a last attendance, delete it
         if ($lastPresensi) {
            $lastPresensi->delete();
         }

         // Create the new attendance record
         $presensi = PresensiPplk::create([
            'user_id' => $validated['id'],
            'tanggal_presensi' => Carbon::today(),
            'kehadiran' => $validated['kehadiran'],
            'keterangan' => $validated['keterangan']
         ]);
         DB::commit();
      } catch (\Throwable $th) {
         // Rollback and return with error
         DB::rollBack();
         return redirect()->route('dashboard.absensi-maba')->with('response', [
            'status' => 500,
            'message' => 'Terjadi kesalahan saat menyimpan data.'
         ]);
      }
      return redirect()->route('dashboard.absensi-maba')->with('response', [
         'status' => 200,
         'message' => 'Presensi berhasil ditambahkan'
      ]);
   }

   public function updateKehadiran(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'kehadiran' => 'required|in:Hadir,Izin,Tidak Hadir',
         'keterangan' => 'string|nullable',
      ]);

      $today = Carbon::today();
      $presensi = PresensiPplk::where('user_id', $validated['id'])->where('tanggal_presensi', $today)->latest()->first();

      DB::beginTransaction();
      try {
         if ($presensi && $presensi->kehadiran === 'Hadir') {
            $presensi->delete();
         }

         PresensiPplk::create([
            'user_id' => $validated['id'],
            'tanggal_presensi' => $today,
            'kehadiran' => 'Izin',
            'keterangan' => $validated['keterangan']
         ]);
         DB::commit();
         // Redirect with success message
         return redirect()->back()->with('response', [
            'status' => 200,
            'message' => 'Presensi berhasil diperbarui'
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         // Redirect back with error details
         return redirect()->back()->with('response', [
            'status' => 500,
            'message' => 'Gagal menghapus presensi'
         ]);
      }
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
