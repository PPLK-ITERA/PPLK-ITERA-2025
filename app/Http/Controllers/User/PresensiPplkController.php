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
   // tambah berdasarkan prodi filter bydate
   public function index()
   {
      return Inertia::render('Dashboard/absensi-maba/Page');
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

   public function store(Request $request, $id)
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

   public function updateKehadiran(Request $request, $id)
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
               'user_id' => $id,
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
}
