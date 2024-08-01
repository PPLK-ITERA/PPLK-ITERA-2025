<?php

namespace App\Http\Controllers;

use App\Models\Kelompok;
use App\Models\Scoreboard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ScoreboardController extends Controller
{

   /**
    * Mengambil total skor kelompok dari database tabel user.
    *
    * @return \Illuminate\Http\Response
    */
   public function getTotalScoresFromDatabase()
   {
      $kelompokScores = User::with('kelompok')->select('kelompok_id', \DB::raw('SUM(score) as total_score'))->whereNotNull('kelompok_id')
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
   public function getKelompokScore()
   {
      $kelompok_id = Auth::user()->kelompok_id;

      // Mengambil skor kelompok dan mengurutkannya
      $kelompokScores = User::with('kelompok')
         ->select('kelompok_id', \DB::raw('SUM(score) as total_score'))
         ->groupBy('kelompok_id')
         ->orderBy('total_score', 'desc')
         ->get();

      // Mendapatkan top 10 kelompok berdasarkan skor
      $topTenIds = $kelompokScores->take(10)->pluck('kelompok_id');
      $kelompokInTopTen = $topTenIds->contains($kelompok_id);

      // Mencari skor dan posisi kelompok pengguna
      $kelompokScore = $kelompokScores->where('kelompok_id', $kelompok_id)->first();

      // Menemukan posisi kelompok dalam daftar yang telah diurutkan
      $position = $kelompokScores->search(function ($score) use ($kelompok_id) {
         return $score->kelompok_id == $kelompok_id;
      }) + 1;  // Menambahkan 1 karena indeks array dimulai dari 0

      // Mengecek jika kelompok tidak ada dalam top ten
      if (!$kelompokInTopTen) {
         return response()->json([
            'kelompok' => $kelompokScore,
            'position' => $position
         ]);
      }

      return response()->json([
         'message' => 'Kelompok Anda masuk dalam 10 besar!',
         'kelompok' => $kelompokScore,
         'position' => $position
      ]);
   }

}
