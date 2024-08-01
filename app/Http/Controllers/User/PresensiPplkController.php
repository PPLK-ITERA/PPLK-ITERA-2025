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

      if (Auth::user()->role_id == 2 || Auth::user()->role_id == 4) {
         $kelompok_id = Auth::user()->kelompok_id;
         $query = User::query()->where('kelompok_id', $kelompok_id);
      } elseif (Auth::user()->role_id == 5) {
         $prodi_id = Auth::user()->prodi_id;
         $query = User::query()->where('prodi_id', $prodi_id);
      } elseif (Auth::user()->role_id == 3) {
         $query = User::query();
      } else {
         return response()->json([
            'response' => [
               'status' => 403,
               'message' => 'Anda tidak memiliki akses',
            ]
         ], 403);
      }

      $query->where('role_id', 1)->with([
         'penyakit',
         'kelompok',
         'presensi'
      ]) // Eager loading necessary relationships
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->where(
               'name',
               'like',
               '%' . $searchTerm . '%'
            )
               ->orWhere('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('email', 'like', '%' . $searchTerm . '%')
               ->orWhereHas('presensi', function ($q) use ($searchTerm) {
                  $q->where('kehadiran', 'like', '%' . $searchTerm . '%')
                     ->orWhere('tanggal_presensi', 'like', '%' . $searchTerm . '%');
               });
         });

      $attendances = $query->paginate($perPage);

      // Adjusting the collection to include custom attributes like indexing and presence data
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
               'qrcode' => $user->qrcode->code ?? null,
               'nama_kelompok' => $user->kelompok->nama_kelompok ?? null,
               'penyakit' => [
                  'pita' => $user->penyakit->pita ?? null,
                  'ket_penyakit' => $user->penyakit->ket_penyakit ?? null,
               ],
               'status' => ($user->presensi) ? $user->presensi->kehadiran : 'Tidak Hadir', // Using optional() to safely access kehadiran
               'tanggal_presensi' => ($user->presensi) ? $user->presensi->tanggal_presensi : '-',
               'ket_izin' => ($user->presensi) ? ($user->presensi->kehadiran) == 'Izin' ? $user->presensi->keterangan : '-' : '-', // Safely accessing tanggal_presensi
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
