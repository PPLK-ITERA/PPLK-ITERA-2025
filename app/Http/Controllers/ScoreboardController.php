<?php

namespace App\Http\Controllers;

use App\Models\Kelompok;
use App\Models\Scoreboard;
use Illuminate\Http\Request;

class ScoreboardController extends Controller
{
    /**
     * Mengambil score kelompok berdasarkan kelompok_id dan menampilkan top 10 skor.
     *
     * @param  int  $kelompok_id
     * @return \Illuminate\Http\Response
     */
    public function getTopScores($kelompok_id)
    {
        // Mengambil semua kelompok dan mengurutkan berdasarkan total_score
        $topScores = Scoreboard::orderBy('total_score', 'desc')
                               ->take(10)
                               ->get();

        // Mencari kelompok berdasarkan kelompok_id
        $kelompok = Scoreboard::where('kelompok_id', $kelompok_id)->first();

        // Mengecek apakah kelompok ditemukan
        if (!$kelompok) {
            return response()->json(['error' => 'Kelompok tidak ditemukan'], 404);
        }

        // Mengecek apakah kelompok ada di top 10
        $ranked = $topScores->contains('kelompok_id', $kelompok_id);

        if ($ranked) {
            // Mengembalikan top 10 skor jika kelompok ada di top 10
            return response()->json($topScores);
        } else {
            // Mengembalikan skor kelompok jika tidak ada di top 10
            return response()->json(['kelompok_id' => $kelompok_id, 'total_score' => $kelompok->total_score]);
        }
    }
}
