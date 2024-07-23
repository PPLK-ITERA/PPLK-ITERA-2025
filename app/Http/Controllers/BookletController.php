<?php

namespace App\Http\Controllers;

use App\Models\Booklet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BookletController extends Controller
{
   public function guestIndex()
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
   public function index()
   {
      $booklets = Booklet::all();
      return Inertia::render('Dashboard/booklet/Page', [
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
         return redirect()->route('booklet.index')->with('response', [
            'status' => 201,
            'message' => 'Berhasil menambahkan data',
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->route('booklet.index')->with('response', [
            'status' => 500,
            'message' => 'Gagal menambahkan data',
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
         return redirect()->route('booklet.index')->with('response', [
            'status' => 404,
            'message' => 'Data tidak ditemukan',
         ]);
      }

      DB::beginTransaction();
      try {
         $booklet->update($validated);
         DB::commit();
         return redirect()->route('booklet.index')->with('response', [
            'status' => 201,
            'message' => 'Berhasil mengubah data',
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->route('booklet.index')->with('response', [
            'status' => 500,
            'message' => 'Gagal mengubah data',
         ]);
      }
   }

   public function delete($id)
   {
      DB::beginTransaction();
      try {
         $booklet = Booklet::find($id)->delete();
         DB::commit();
         if ($booklet) {
            return redirect()->route('booklet.index')->with('response', [
               'status' => 201,
               'message' => 'Berhasil menghapus data',
            ]);
         }
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('booklet.index')->with('response', [
            'status' => 500,
            'message' => 'Gagal menghapus data',
         ]);
      }
   }
}
