<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;

class FAQController extends Controller
{
    // Menampilkan semua FAQ
    public function index()
    {
        $faqs = FAQ::select( 'teks_pertanyaan', 'teks_jawaban')->get();
        return response()->json($faqs);
    }

    // Menyimpan FAQ baru
    public function store(Request $request)
    {
        $request->validate([
            'teks_pertanyaan' => 'required|string',
            'teks_jawaban' => 'required|string',
        ]);

        $faq = FAQ::create($request->only('teks_pertanyaan', 'teks_jawaban'));

        return response()->json([
            'message' => 'FAQ created successfully.',
            'faq' => $faq->only('id', 'teks_pertanyaan', 'teks_jawaban')
        ], 201);
    }

    // Menampilkan FAQ tertentu
    public function show(FAQ $faq)
    {
        return response()->json($faq->only('id', 'teks_pertanyaan', 'teks_jawaban'));
    }

    // Memperbarui FAQ
    public function update(Request $request, FAQ $faq)
    {
        $request->validate([
            'teks_pertanyaan' => 'required|string',
            'teks_jawaban' => 'required|string',
        ]);

        $faq->update($request->only('teks_pertanyaan', 'teks_jawaban'));

        return response()->json([
            'message' => 'FAQ updated successfully.',
            'faq' => $faq->only('id', 'teks_pertanyaan', 'teks_jawaban')
        ]);
    }

    // Menghapus FAQ
    public function destroy(FAQ $faq)
    {
        $faq->delete();

        return response()->json([
            'message' => 'FAQ deleted successfully.'
        ]);
    }
}


