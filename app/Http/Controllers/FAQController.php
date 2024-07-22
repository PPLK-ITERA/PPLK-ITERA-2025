<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class FAQController extends Controller
{
   // Menampilkan semua FAQ
   public function guestIndex()
   {
      $faqs = FAQ::select('teks_pertanyaan', 'teks_jawaban')->get();
      return Inertia::render('FAQ/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Success',
            'data' => $faqs
         ]
      ]);
   }
   public function index()
   {
      $faqs = FAQ::select('teks_pertanyaan', 'teks_jawaban')->get();
      return Inertia::render('Dashboard/faq/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Success',
            'data' => $faqs
         ]
      ]);
   }
   public function create()
   {
      //
   }
   // Menyimpan FAQ baru
   public function store(Request $request)
   {
      $validated = $request->validate([
         'pertanyaan' => 'required|string',
         'jawaban' => 'required|string',
      ]);

      DB::beginTransaction();
      try {
         FAQ::create($validated);
         DB::commit();
         return Inertia::render('Dashboard/faq/Page', [
            'response' => [
               'status' => 201,
               'message' => 'Berhasil menambahkan data',
            ]
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         return Inertia::render('Dashboard/faq/Page', [
            'response' => [
               'status' => 500,
               'message' => 'Kesalahan server internal',
            ]
         ]);
      }
   }

   public function edit(string $id)
   {
   }

   // Memperbarui FAQ
   public function update(Request $request, FAQ $faq)
   {
      $validated = $request->validate([
         'teks_pertanyaan' => 'required|string',
         'teks_jawaban' => 'required|string',
      ]);

      DB::beginTransaction();
      try {
         $faq->update($validated);
         DB::commit();
         return Inertia::render('Dashboard/faq/Page', [
            'response' => [
               'status' => 201,
               'message' => 'Berhasil mengubah data',
            ]
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         return Inertia::render('Dashboard/faq/Page', [
            'response' => [
               'status' => 500,
               'message' => 'Kesalahan server internal',
               'data' => $faq
            ]
         ]);
      }
   }

   // Menghapus FAQ
   public function destroy(FAQ $faq)
   {
      DB::beginTransaction();
      try {
         $faq->delete();
         DB::commit();
         return Inertia::render('Dashboard/faq/Page', [
            'response' => [
               'status' => 201,
               'message' => 'Berhasil mengapus data',
            ]
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         return Inertia::render('Dashboard/faq/Page', [
            'response' => [
               'status' => 500,
               'message' => 'Gagal menghapus data',
            ]
         ]);
      }
   }
}
