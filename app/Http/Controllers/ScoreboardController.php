<?php

namespace App\Http\Controllers;

use App\Models\Kelompok;
use App\Models\Scoreboard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class ScoreboardController extends Controller
{

    /**
     * Mengambil total skor kelompok dari database tabel user.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTotalScoresFromDatabase()
    {
        $kelompokScores = User::select('kelompok_id', \DB::raw('SUM(score) as total_score'))
                              ->groupBy('kelompok_id')
                              ->orderBy('total_score', 'desc')
                              ->get();

        $topTenScores = $kelompokScores->take(10);

        return response()->json($topTenScores);        
    }

    /**
     * Menampilkan skor kelompok yang tidak masuk dalam 10 besar.
     *
     * @param  int  $kelompok_id
     * @return \Illuminate\Http\Response
     */
    public function getKelompokScore($kelompok_id)
    {
        $kelompokScores = User::select('kelompok_id', \DB::raw('SUM(score) as total_score'))
                              ->groupBy('kelompok_id')
                              ->orderBy('total_score', 'desc')
                              ->get();

        $topTenIds = $kelompokScores->take(10)->pluck('kelompok_id');
        $kelompokInTopTen = $topTenIds->contains($kelompok_id);

        if (!$kelompokInTopTen) {
            $kelompokScore = $kelompokScores->where('kelompok_id', $kelompok_id)->first();
            return response()->json($kelompokScore);
        }

        return response()->json(['message' => 'Kelompok masuk dalam 10 besar.']);
    }

}
