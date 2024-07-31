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
      return Inertia::render(
         'Materi/Page',
         [
            'response' => [
               'status' => 200,
               'message' => 'berhasil mendapatkan data materi',
               'data' => $materi
            ]
         ]
      );
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
         'nama_materi' => 'required|string',
         'link_materi' => 'required|url|string',
         'hari' => 'required|integer',
      ]);
      DB::beginTransaction();
      try {
         Materi::create($validated);
         DB::commit();
         return redirect()->route('materi.index')->with('success', 'Materi berhasil ditambahkan');
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('materi.index')->with('error', 'Materi gagal ditambahkan');
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
         'nama_materi' => 'required|string',
         'link_materi' => 'required|url|string',
         'hari' => 'required|integer',
      ]);
      DB::beginTransaction();
      try {
         Materi::find($validated['id'])->update($validated);
         DB::commit();
         return redirect()->route('materi.index')->with('success', 'Materi berhasil diubah');
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('materi.index')->with('error', 'Materi gagal diubah');
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
   }
}