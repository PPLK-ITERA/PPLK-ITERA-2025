<?php

namespace App\Http\Controllers;

use App\Models\Booklet;
use Illuminate\Http\Request;

class BookletController extends Controller
{
   public function index()
   {
      $booklet = Booklet::all();
      return response()->json($booklet, 200);
   }

   public function store(Request $request)
   {
      $request->validate([
         'nama_booklet' => 'required|string',
         'url_booklet' => 'required|string',
      ]);

      $booklet = Booklet::create(
         [
            'nama_booklet' => $request->nama_booklet,
            'url_booklet' => $request->url_booklet,
         ]
      );

      if ($booklet) {
         return response()->json(['message' => 'Berhasil menambahkan booklet'], 201);
      }

      return response()->json([
         'message' => 'Gagal menambahkan booklet',
      ], 500);
   }

   public function update(Request $request, $id)
   {
      $request->validate([
         'nama_booklet' => 'required|string',
         'url_booklet' => 'required|string',
      ]);

      $booklet = Booklet::find($id);

      $booklet->update(
         [
            'nama_booklet' => $request->nama_booklet,
            'url_booklet' => $request->url_booklet,
         ]
      );

      if ($booklet) {
         return response()->json(['message' => 'Berhasil mengubah booklet'], 201);
      }

      return response()->json([
         'message' => 'Gagal mengubah booklet',
      ], 500);
   }

   public function delete($id)
   {
      $booklet = Booklet::find($id)->delete();

      if ($booklet) {
         return response()->json(['message' => 'Berhasil menghapus booklet'], 201);
      }

      return response()->json([
         'message' => 'Gagal menghapus booklet',
      ], 500);
   }
}