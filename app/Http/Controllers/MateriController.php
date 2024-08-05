<?php

namespace App\Http\Controllers;

use App\Models\Materi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MateriController extends Controller
{
   /*
    Display a listing of the resource for guest
   */
   public function guestIndex()
   {
      $materi = Materi::all();
      return Inertia::render('Materi/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Success',
            'data' => $materi
         ]
      ]);
   }
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      return Inertia::render('Dashboard/materi/Page');
   }

   /**
    * Show the form for creating a new resource.
    */
   public function create()
   {
      //
   }

   /**
    * Store a newly created resource in storage.
    */
   public function store(Request $request)
   {
      $validated = $request->validate([
         'nama_materi' => 'required|string|max:120',
         'link_materi' => 'required|url|string',
         'hari' => 'required|string|max:120',
      ]);
      DB::beginTransaction();
      try {
         Materi::create($validated);
         DB::commit();
         return redirect()->route('dashboard.materi.index')->with('success', 'Materi berhasil ditambahkan');
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('dashboard.materi.index')->with('error', 'Materi gagal ditambahkan');
      }
   }

   /**
    * Display the specified resource.
    */
   public function show(string $id)
   {
      //
   }

   /**
    * Show the form for editing the specified resource.
    */
   public function edit(string $id)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    */
   public function update(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'nama_materi' => 'required|string|max:120',
         'link_materi' => 'required|url|string|max:120',
         'hari' => 'required|string|max:120',
      ]);
      DB::beginTransaction();
      try {
         Materi::find($validated['id'])->update($validated);
         DB::commit();
         return redirect()->route('dashboard.materi.index')->with('success', 'Materi berhasil diubah');
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('dashboard.materi.index')->with('error', 'Materi gagal diubah');
      }
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
      ]);
      DB::beginTransaction();
      try {
         $materi = Materi::find($validated['id'])->delete();
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('dashboard.materi.index')->with('response', [
            'status' => 500,
            'message' => 'Gagal menghapus data',
         ]);
      }
      return redirect()->route('dashboard.materi.index')->with('response', [
         'status' => 201,
         'message' => 'Berhasil menghapus data',
      ]);
   }

   public function getAllMateris(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = Materi::query()
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->where('nama_materi', 'like', '%' . $searchTerm . '%')
               ->orWhere('link_materi', 'like', '%' . $searchTerm . '%');
         });

      $materis = $query->paginate($perPage);

      $currentPage = $materis->currentPage(); // Halaman saat ini
      $perPage = $materis->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $materis->getCollection()->transform(function ($materi) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'materi' => [
               'id' => $materi->id,
               'nama_materi' => $materi->nama_materi,
               'link_materi' => $materi->link_materi,
               'hari' => $materi->hari,
            ]
         ];
      });

      return response()->json($materis);
   }
}