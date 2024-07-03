<?php

namespace App\Http\Controllers;

use App\Models\Kelompok;
use Illuminate\Http\Request;

namespace App\Http\Controllers;

use App\Models\Kelompok;
use Illuminate\Http\Request;

class KelompokController extends Controller
{
    public function index()
    {
        // Mengambil semua kelompok
        $kelompoks = Kelompok::all();

        return response()->json($kelompoks);
    }

    public function show($id)
    {
        // Mengambil satu kelompok berdasarkan ID
        $kelompok = Kelompok::findOrFail($id);

        // Menghitung total skor kelompok
        $totalScore = $kelompok->calculateTotalScore();

        return response()->json([
            'kelompok' => $kelompok,
            'total_score' => $totalScore
        ]);
    }
}

