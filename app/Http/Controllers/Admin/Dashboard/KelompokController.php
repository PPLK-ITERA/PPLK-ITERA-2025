<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class KelompokController extends Controller
{
   public function index()
   {
      try {
         $kelompok_id = auth()->user()->kelompok_id;
         // Mengambil kelompok berdasarkan id
         $users = User::where('kelompok_id', $kelompok_id)->get();
         $kelompok = Kelompok::find($kelompok_id);

         // Mengecek apakah kelompok ditemukan
         if (!$kelompok) {
            return Inertia::render(
               'Dashboard/informasi-kelompok/Page',
               [
                  'response' => [
                     'status' => 404,
                     'message' => 'Kelompok tidak ditemukan',
                     'data' => []
                  ]
               ]
            );
         }

         // Mengembalikan daftar user_id yang tergabung dalam satu kelompok
         return Inertia::render(
            'Dashboard/informasi-kelompok/Page',
            [
               'response' => [
                  'status' => 200,
                  'message' => 'Berhasil mendapatkan data',
                  'data' => [
                     'no_kelompok' => $kelompok->no_kelompok,
                     'nama_kelompok' => $kelompok->nama_kelompok,
                     'logo_kelompok' => $kelompok->logo_kelompok,
                     'users' => $users
                  ]
               ]
            ]
         );
      } catch (\Exception $e) {
         return Inertia::render(
            'Dashboard/informasi-kelompok/Page',
            [
               'response' => [
                  'status' => 500,
                  'message' => $e->getMessage(),
                  'data' => []
               ]
            ]
         );
      }
   }
   public function update(Request $request)
   {
      $id = auth()->user()->kelompok_id;
      $kelompok = Kelompok::find($id);
      $validated = $request->validate([
         'nama_kelompok' => 'sometimes|string',
         'logo_kelompok' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048|nullable',
      ]);
      if ($request->hasFile('logo_kelompok')) {
         Storage::delete($kelompok->logo_kelompok);
         $path_image = $request->file('logo_kelompok')->store('images/logokelompok', 'public');
      } else {
         $path_image = $kelompok->logo_kelompok;
      }
      DB::BeginTransaction();
      try {
         if ($request->hasFile('logo_kelompok')) {
            $kelompok->update([
               'nama_kelompok' => $validated['nama_kelompok'],
               'logo_kelompok' => asset('storage/' . $path_image),
            ]);
         } else {
            $kelompok->update([
               'nama_kelompok' => $validated['nama_kelompok'],
               'logo_kelompok' => $path_image,
            ]);
         }

         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return redirect()->route('informasi-kelompok')->with(
            [
               'response' => [
                  'status' => 500,
                  'message' => 'Gagal mengubah data kelompok',
               ]
            ]
         );
      }
      return redirect()->route('informasi-kelompok')->with(
         [
            'response' => [
               'status' => 200,
               'message' => 'Berhasil mengubah data kelompok',
            ]
         ]
      );
   }

   public function getKelompok()
   {
      $id = Auth::user()->kelompok_id;
      $kelompok = Kelompok::with([
         'mentor' => function ($query) {
            // Eager load the related prodi and select specific fields
            $query->with([
               'prodi' => function ($subQuery) {
               $subQuery->select('id', 'nama_prodi');
            }
            ])->select('id', 'name', 'prodi_id');
         },
         'daplok' => function ($query) {
            $query->with([
               'prodi' => function ($subQuery) {
                  $subQuery->select('id', 'nama_prodi');
               }
            ])->select('id', 'name', 'prodi_id');
         }
      ])->find($id);
      return response()->json($kelompok);
   }
}
