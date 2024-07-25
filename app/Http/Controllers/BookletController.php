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
      // $booklets = Booklet::all();
      return Inertia::render('Dashboard/booklet/Page');
   }
   public function getAllBooklets(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = Booklet::query()
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->where('nama_booklet', 'like', '%' . $searchTerm . '%')
               ->orWhere('url_booklet', 'like', '%' . $searchTerm . '%');
         });

      $booklets = $query->paginate($perPage);

      $currentPage = $booklets->currentPage(); // Halaman saat ini
      $perPage = $booklets->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $booklets->getCollection()->transform(function ($booklet) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'booklet' => $booklet
         ];
      });

      return response()->json($booklets);
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
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->route('booklet.index')->with('response', [
            'status' => 500,
            'message' => 'Gagal menambahkan data',
         ]);
      }
      return redirect()->route('booklet.index')->with('response', [
         'status' => 201,
         'message' => 'Berhasil menambahkan data',
      ]);
   }

   public function update(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer|exists:booklets',
         'nama_booklet' => 'required|string',
         'url_booklet' => 'required|string',
      ]);

      $booklet = Booklet::find($validated['id']);
      if (!$booklet) {
         return redirect()->route('booklet.index')->with('response', [
            'status' => 404,
            'message' => 'Data tidak ditemukan',
         ]);
      }

      dd($booklet);

      DB::beginTransaction();
      try {
         $booklet->update($validated);
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->route('booklet.index')->with('response', [
            'status' => 500,
            'message' => 'Gagal mengubah data',
         ]);
      }
      return redirect()->route('booklet.index')->with('response', [
         'status' => 201,
         'message' => 'Berhasil mengubah data',
      ]);
   }

   public function delete(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer|exists:booklets',
      ]);
      DB::beginTransaction();
      try {
         $booklet = Booklet::find($validated['id'])->delete();
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('booklet.index')->with('response', [
            'status' => 500,
            'message' => 'Gagal menghapus data',
         ]);
      }
      return redirect()->route('booklet.index')->with('response', [
         'status' => 201,
         'message' => 'Berhasil menghapus data',
      ]);
   }
}
