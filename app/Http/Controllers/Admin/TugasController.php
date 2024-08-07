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
         'catatan' => 'required|string|max:120|alpha_num:ascii',
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
}