<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
         'logo_kelompok' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      ]);
      DB::BeginTransaction();
      try {
         $kelompok->update([
            'nama_kelompok' => $validated['nama_kelompok'],
            'logo_kelompok' => $validated['logo_kelompok']
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return redirect()->route('kelompok.index')->with(
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
}
