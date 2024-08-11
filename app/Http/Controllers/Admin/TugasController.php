<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KartuTugas;
use App\Models\PengumpulanTugas;
use App\Models\Poster;
use App\Models\Tugas;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class TugasController extends Controller
{
   public function getTugasUser($id)
   {
      try {
         $tugas = PengumpulanTugas::with([
            'tugas' => function ($query) {
               $query->select('id', 'judul');
            }
         ])->where('user_id', $id)->get();

         $nama = User::findOrFail($id)->name;
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => $e->getMessage()
            ]
         ]);
      }
      $response = $tugas->transform(function ($item) {
         return [
            'id' => $item->id,
            'nama_tugas' => $item->tugas->judul,
            'jawaban' => $item->jawaban,
            'isReturn' => $item->isReturn,
            'tanggal_submit' => $item->tanggal_submit,
            'catatan' => $item->catatan
         ];
      });
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mendapatkan data',
            'data' => $response
         ],
         'nama' => $nama
      ]);
   }
   public function getTugasKelompok()
   {
      try {
         $ketua = User::where('kelompok_id', Auth::user()->kelompok_id)->where('isKetua', true)->first();
         $tugas = Tugas::with([
            'pengumpulanTugas' => function ($query) use ($ketua) {
               $query->select('id', 'tugas_id', 'jawaban', 'isReturn', 'catatan')
                  ->where('user_id', $ketua->id); // Filter right in the 'with' to double-check
            }
         ])
            ->where('kategori', 'kelompok')
            ->whereHas('pengumpulanTugas', function ($query) use ($ketua) {
               $query->where('user_id', $ketua->id);
            })->get();
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => $e->getMessage()
            ]
         ]);
      }
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mendapatkan data',
            'data' => $tugas
         ],
      ]);
   }
   public function returnTugas(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'catatan' => "required|string|max:120|regex:/^[a-zA-Z0-9\' .\-_]+$/",
      ]);

      $kelompokId = Auth::user()->kelompok_id;

      $tugas = PengumpulanTugas::find($validated['id']);
      if ($tugas->isReturn) {
         return redirect()->back()->with(
            'response',
            [
               'status' => 400,
               'message' => "Tugas sudah dikembalikan"
            ]
         );
      }

      DB::beginTransaction();
      try {
         $tugas->update([
            'isReturn' => true,
            'catatan' => $validated['catatan']
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->back()->with(
            'response',
            [
               'status' => 500,
               'message' => "Kesalahan server internal"
            ]
         );
      }
      return redirect()->back()->with(
         'response',
         [
            'status' => 200,
            'message' => 'Berhasil mengembalikan tugas'
         ]
      );
   }

   public function getPoster()
   {
      $kelompok_id = Auth::user()->kelompok_id;
      $urls = Poster::where('kelompok_id', $kelompok_id)
         ->get();

      return response()->json($urls);
   }

   public function returnPoster(Request $request)
   {
      $validated = $request->validate([
         'hari' => 'required|integer|in:0,1,2,3,4,5',
      ]);
      $poster = Poster::where('kelompok_id', Auth::user()->kelompok_id)
         ->where('hari', $validated['hari'])
         ->first();

      if (!$poster) {
         return redirect()->back()->with(
            'response',
            [
               'status' => 404,
               'message' => 'Poster tidak ditemukan'
            ]
         );
      }

      DB::beginTransaction();
      try {
         $storagePath = substr($poster->poster, strlen('/storage/'));
         if (Storage::disk('public')->exists($storagePath)) {
            Storage::disk('public')->delete($storagePath);
         }
         $poster->update([
            'url_poster' => null,
            'isReturn' => true,
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->back()->with(
            'response',
            [
               'status' => 500,
               'message' => $e->getMessage()
            ]
         );
      }
      return redirect()->back()->with(
         'response',
         [
            'status' => 200,
            'message' => 'Berhasil mengembalikan poster'
         ]
      );
   }

   public function getAllTugas(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');
      $tugasId = $request->input('tugasId', 1);

      if (!in_array($tugasId, [1, 2, 3, 4, 5, 6, 7])) {
         return response()->json([
            'response' => [
               'status' => 400,
               'message' => 'Invalid tugasId'
            ]
         ]);
      }

      $query = User::query()
         ->where('role_id', 1) // Ensure only users with role_id = 1 are shown
         ->leftJoin('pengumpulan_tugas', function ($join) use ($tugasId) {
            $join->on('users.id', '=', 'pengumpulan_tugas.user_id')
               ->where('pengumpulan_tugas.tugas_id', '=', $tugasId);
         })
         ->leftJoin('kelompok', 'users.kelompok_id', '=', 'kelompok.id')
         ->leftJoin('prodis', 'users.prodi_id', '=', 'prodis.id') // Assuming there is a `prodi_id` in users
         ->select(
            'users.id',
            'users.name',
            'users.email',
            'kelompok.id as kelompok_id',
            'prodis.nama_prodi',
            'kelompok.nama_kelompok',
            'users.isKetua',
            'pengumpulan_tugas.id as submission_id'
         )
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->where('users.name', 'like', '%' . $searchTerm . '%')
               ->orWhere('users.email', 'like', '%' . $searchTerm . '%')
               ->orWhere('kelompok.nama_kelompok', 'like', '%' . $searchTerm . '%')
               ->orWhere('prodis.nama_prodi', 'like', '%' . $searchTerm . '%');
         });

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage();
      $perPage = $users->perPage();
      $currentIndex = ($currentPage - 1) * $perPage;

      $users->getCollection()->transform(function ($user, $key) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex,
            'user' => $user,
            'has_submitted' => !is_null($user->submission_id) ? 'Yes' : 'No'
         ];
      });

      return response()->json($users);
   }





}
