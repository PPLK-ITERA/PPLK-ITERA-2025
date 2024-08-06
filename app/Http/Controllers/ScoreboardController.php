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
      $kelompokScores = User::with(['kelompok' => function ($query) {
         // Select specific fields from the kelompok relationship if necessary
         $query->select('id', 'no_kelompok', 'nama_kelompok', 'logo_kelompok');
      }])
         ->select('kelompok_id', DB::raw('SUM(score) as total_score'))
         ->whereNotNull('kelompok_id')
         ->groupBy('kelompok_id')
         ->orderBy('total_score', 'desc')
         ->get();

      $topTenScores = $kelompokScores->take(10);

      $topTenScores->transform(function ($topTen) {
         // Check and transform data including related kelompok information
         if (isset($topTen->kelompok) && isset($topTen->total_score)) {
            return [
               'total_score' => $topTen->total_score,
               'kelompok' => [
                  "no_kelompok" => $topTen->kelompok->no_kelompok,
                  "nama_kelompok" => $topTen->kelompok->nama_kelompok,
                  "logo_kelompok" => $topTen->kelompok->logo_kelompok,
               ]
            ];
         }
         // Handling the case where kelompok data is missing
         return null;  // or provide default values or log an error
      });

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
         ->select('kelompok_id', DB::raw('SUM(score) as total_score'))
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
            'kelompok' => [
               'no_kelompok' => $kelompokScore->kelompok->no_kelompok,
               'nama_kelompok' => $kelompokScore->kelompok->nama_kelompok,
               'logo_kelompok' => $kelompokScore->kelompok->logo_kelompok,
            ],
            'position' => $position
         ]);
      }

      return response()->json([
         'message' => 'Kelompok Anda masuk dalam 10 besar!',
         'kelompok' => [
            'no_kelompok' => $kelompokScore->kelompok->no_kelompok,
            'nama_kelompok' => $kelompokScore->kelompok->nama_kelompok,
            'logo_kelompok' => $kelompokScore->kelompok->logo_kelompok,
         ],
         'position' => $position
      ]);
   }
}
