<?php

namespace App\Http\Controllers;

use App\Models\Booklet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BookletController extends Controller
{
   public function index()
   {
      $booklets = Booklet::all();
      return Inertia::render('Booklet/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Success',
            'data' => $booklets
         ]
      ]);
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
         return Inertia::render('Booklet/Page', [
            'response' => [
               'status' => 201,
               'message' => 'Berhasil menambahkan booklet',
               'data' => $booklet
            ]
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         return Inertia::render('Booklet/Page', [
            'response' => [
               'status' => 500,
               'message' => 'Gagal menambahkan booklet',
            ]
         ]);
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
         return Inertia::render('Booklet/CarouselBooklet', [
            'response' => [
               'status' => 201,
               'message' => 'Berhasil menambahkan booklet',
               'data' => $booklet
            ]
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['message' => 'Gagal mengubah booklet'], 500);
      }
   }

   public function delete($id)
   {
      DB::beginTransaction();
      try {
         $booklet = Booklet::find($id)->delete();
         DB::commit();
         if ($booklet) {
            return Inertia::render('Booklet/Page', [
               'response' => [
                  'status' => 201,
                  'message' => 'Berhasil menghapus booklet',
               ]
            ]);
         }
      } catch (\Exception $e) {
         DB::rollBack();
         return Inertia::render('Booklet/Page', [
            'response' => [
               'status' => 500,
               'message' => 'Gagal menghapus booklet',
            ]
         ]);
      }
   }
}
