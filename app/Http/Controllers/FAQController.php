<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;
use Illuminate\Support\Facades\DB;

class FAQController extends Controller
{
   // Menampilkan semua FAQ
   public function index()
   {
      $faqs = FAQ::select('teks_pertanyaan', 'teks_jawaban')->get();
      return response()->json($faqs);
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
         $faq = FAQ::create($validated);
         DB::commit();
         return response()->json(['message' => 'Berhasil menambahkan FAQ'], 201);
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json([' message' => 'Gagal menambahkan FAQ'], 500);
      }
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
         return response()->json(['message' => 'Berhasil mengubah FAQ'], 200);
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['message' => 'Gagal mengubah FAQ'], 500);
      }
   }

   // Menghapus FAQ
   public function destroy(FAQ $faq)
   {
      DB::beginTransaction();
      try {
         $faq->delete();
         DB::commit();
         return response()->json(['message' => 'Berhasil menghapus FAQ'], 200);
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['message' => 'Gagal menghapus FAQ'], 500);
      }
   }
}
