<?php

namespace App\Http\Controllers\Pilar;

use App\Http\Controllers\Controller;
use App\Models\AnswerActivity;
use App\Models\Pilar;
use App\Models\Result;
use App\Models\User;
use Inertia\Inertia;

class PilarController extends Controller
{
   public function index()
   {
      $result = Result::where('user_id', auth()->user()->id)->firstOrFail();
      $pilar = null;
      $sifatScores = [$result->sifat_1_score, $result->sifat_2_score, $result->sifat_3_score];
      $users = User::where('role_id', 1)->whereNotNull('pilar')->count();
      $pilar1 = User::where('role_id', 1)->where('pilar', 1)->whereNotNull('pilar')->count();
      $pilar2 = User::where('role_id', 1)->where('pilar', 2)->whereNotNull('pilar')->count();
      $pilar3 = User::where('role_id', 1)->where('pilar', 3)->whereNotNull('pilar')->count();
      $pilar4 = User::where('role_id', 1)->where('pilar', 4)->whereNotNull('pilar')->count();

      $persen1 = ($pilar1 / $users) * 100;
      $persen2 = ($pilar2 / $users) * 100;
      $persen3 = ($pilar3 / $users) * 100;
      $persen4 = ($pilar4 / $users) * 100;


      $user = User::findOrFail(auth()->user()->id);
      if ($result->sifat_1_score >= 8 && $result->sifat_2_score >= 8 && $result->sifat_3_score >= 8) {
         $pilar = Pilar::find(4);
         $user->pilar = 4;
         $user->save();
      } else {
         $maxScore = max($sifatScores);
         $indices = array_keys($sifatScores, $maxScore);
         $pilarIndex = max($indices);
         $pilar = Pilar::find($pilarIndex + 1);
         $user->pilar = $pilarIndex + 1;
         $user->save();
      }
      if ($pilar->id == 1) {
         $persen = $persen1;
      } elseif ($pilar->id == 2) {
         $persen = $persen2;
      } elseif ($pilar->id == 3) {
         $persen = $persen3;
      } else {
         $persen = $persen4;
      }

      return Inertia::render('Asesmen/Result/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Success',
            'data' => [
               'result' => $result,
               'pilar' => $pilar,
               'persen' => $persen
            ]
         ]
      ]);
   }
}
