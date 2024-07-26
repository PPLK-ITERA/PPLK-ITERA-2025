<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
   public function getUserScore(Request $request, $id)
   {
      $user_id = User::findOrFail($id);
      try {
         $score = User::findorfail($user_id)->score;
         return response()->json([
            'response' => [
               'status' => 200,
               'message' => 'berhasil mendapatkan score user',
               'data' => ['score' => $score]
            ]
         ]);
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => 'gagal mendapatkan score kelompok',
               'data' => $e->getMessage()
            ]
         ]);
      }
   }
   public function getScoreKelompok(Request $request, $id)
   {
      $user_id = User::findOrFail($id);
      $kelompok = User::select('kelompok_id')->where('id', $user_id)->first();
      try {
         $score = User::select(DB::raw('SUM(score) as score'))->where('kelompok_id', $kelompok->kelompok_id)->first();
         return response()->json([
            'response' => [
               'status' => 200,
               'message' => 'berhasil mendapatkan score kelompok',
               'data' => $score
            ]
         ]);
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => 'gagal mendapatkan score kelompok',
               'data' => $e->getMessage()
            ]
         ]);
      }
   }
}
