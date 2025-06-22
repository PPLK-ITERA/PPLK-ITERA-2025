<?php

namespace App\Http\Controllers\Pilar;

use App\Http\Controllers\Controller;
use App\Models\AnswerActivity;
use App\Models\Pilar;
use App\Models\Result;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PilarController extends Controller
{
   public function index()
   {
      $result = Result::where('user_id', auth()->user()->id)->firstOrFail();
      $pilar = null;
      $sifatScores = [$result->sifat_1_score, $result->sifat_2_score, $result->sifat_3_score];

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
      $users = User::where('role_id', 1)->whereNotNull('pilar')->count();
      $userpilar = User::where('role_id', 1)->where('pilar', $user->pilar)->whereNotNull('pilar')->count();

      $persen = ($userpilar / $users) * 100;

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
   public function show($id)
   {
      $result = Result::where('user_id', $id)->firstOrFail();
      $pilar = null;
      $sifatScores = [$result->sifat_1_score, $result->sifat_2_score, $result->sifat_3_score];

      $user = User::findOrFail($id);
      if (!in_array(Auth::user()->role_id, [2, 3, 4])) {
         abort(404);
         if (in_array(Auth::user()->role_id, [2, 4])) {
            if ($user->kelompok_id != Auth::user()->kelompok_id) {
               abort(404);
            }
         }
      }

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
      $users = User::where('role_id', 1)->whereNotNull('pilar')->count();
      $userpilar = User::where('role_id', 1)->where('pilar', $user->pilar)->whereNotNull('pilar')->count();

      $persen = ($userpilar / $users) * 100;

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
