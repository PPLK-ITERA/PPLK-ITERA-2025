<?php

namespace App\Http\Controllers;

use App\Models\Booklet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookletController extends Controller
{
   public function index()
   {
      $booklets = Booklet::all();
      return response()->json($booklets, 200);
   }

   public function store(Request $request)
   {
      $validated = $request->validate([
         'nama_booklet' => 'required|string',
         'url_booklet' => 'required|string',
      ]);

      DB::beginTransaction();
      try {
         $booklet = Booklet::create($validated);
         DB::commit();
         return response()->json(['message' => 'Berhasil menambahkan booklet'], 201);
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['message' => 'Gagal menambahkan booklet'], 500);
      }
   }

   public function update(Request $request, $id)
   {
      $validated = $request->validate([
         'nama_booklet' => 'required|string',
         'url_booklet' => 'required|string',
      ]);

      $booklet = Booklet::find($id);
      if (!$booklet) {
         return response()->json(['message' => 'Booklet not found'], 404);
      }

      DB::beginTransaction();
      try {
         $booklet->update($validated);
         DB::commit();
         return response()->json(['message' => 'Berhasil mengubah booklet'], 200);
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['message' => 'Gagal mengubah booklet'], 500);
      }
   }

   public function delete($id)
   {
      $booklet = Booklet::find($id);
      if (!$booklet) {
         return response()->json(['message' => 'Booklet not found'], 404);
      }
      DB::beginTransaction();
      try {
         $booklet->delete();
         DB::commit();
         return response()->json(['message' => 'Berhasil menghapus booklet'], 200);
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['message' => 'Gagal menghapus booklet'], 500);
      }
   }
}
