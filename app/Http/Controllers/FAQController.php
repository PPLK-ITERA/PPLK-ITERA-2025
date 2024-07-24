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
      // $faqs = FAQ::all();
      // return Inertia::render('Dashboard/faq/Page', [
      //    'response' => [
      //       'status' => 200,
      //       'message' => 'Success',
      //       'data' => $faqs
      //    ]
      // ]);
      return Inertia::render('Dashboard/faq/Page');
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
         FAQ::create([
            'teks_pertanyaan' => $validated['pertanyaan'],
            'teks_jawaban' => $validated['jawaban'],
         ]);
         DB::commit();
         return redirect()->route('dashboard.faq')->with('message', 'Berhasil menambahkan data');
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->route('dashboard.faq')->with('message', 'Gagal menambahkan data');
      }
   }

   public function edit(string $id)
   {
   }

   // Memperbarui FAQ
   // public function update(Request $request)
   // {
   //    $validated = $request->validate([
   //       'id' => 'required|integer',
   //       'teks_pertanyaan' => 'required|string',
   //       'teks_jawaban' => 'required|string',
   //    ]);

   //    DB::beginTransaction();
   //    try {
   //       $faq = FAQ::find($validated['id']);
   //       $faq->update($validated);
   //       DB::commit();
   //       return redirect()->route('dashboard.faq')->with('message', 'Berhasil mengubah data');
   //    } catch (\Throwable $th) {
   //       DB::rollBack();
   //       return Inertia::render('Dashboard/faq/Page', [
   //          'response' => [
   //             'status' => 500,
   //             'message' => $th,
   //             'data' => $faq
   //          ]
   //       ]);
   //    }
   // }
   public function update(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'teks_pertanyaan' => 'required|string',
         'teks_jawaban' => 'required|string',
      ]);

      DB::beginTransaction();
      try {
         $faq = FAQ::find($validated['id']);

         if (!$faq) {
            return redirect()->route('dashboard.faq')->with('error', 'Data not found');
         }

         $faq->update($validated);
         DB::commit();

         return redirect()->route('dashboard.faq')->with('message', 'Berhasil mengubah data');
      } catch (\Throwable $th) {
         DB::rollBack();

         return Inertia::render('Dashboard/faq/Page', [
            'response' => [
               'status' => 500,
               'message' => 'Internal Server Error',
               'data' => $validated // Include validated data for context
            ]
         ]);
      }
   }


   // Menghapus FAQ
   public function destroy(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
      ]);

      DB::beginTransaction();
      try {
         $faq = FAQ::find($validated['id']);

         if (!$faq) {
            return redirect()->route('dashboard.faq')->with('error', 'Data not found');
         }

         $faq->delete();
         DB::commit();
         return redirect()->route('dashboard.faq')->with('message', 'Berhasil menghapus data');
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

   public function getAllFAQ(Request $request)
   {
      // return Inertia::render('Dashboard/faq/Page');
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = FAQ::query()
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->where('teks_pertanyaan', 'like', '%' . $searchTerm . '%')
               ->orWhere('teks_jawaban', 'like', '%' . $searchTerm . '%');
         });

      $faqs = $query->paginate($perPage);

      $currentPage = $faqs->currentPage(); // Halaman saat ini
      $perPage = $faqs->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $faqs->getCollection()->transform(function ($faq) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'faq' => $faq
         ];
      });

      return response()->json($faqs);
   }
}
