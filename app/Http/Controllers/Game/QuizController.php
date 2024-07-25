<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller;
use Cache;
use Illuminate\Http\Request;
use App\Models\UnlockStatus;
use App\Models\quiz;
use App\Models\QuizActivity;
use App\Models\quiz_answer;
use Illuminate\Support\Facades\Auth;

class QuizController extends Controller
{
   public function getQuestionsByGedung($gedung_id)
   {
      $user = Auth::user();

      // Cek apakah gedung yang diminta sudah dibuka oleh user
      if (!UnlockStatus::where('user_id', $user->id)->where('gedung_id', $gedung_id)->exists()) {
         return response()->json(['message' => 'Gedung ini belum dibuka oleh Anda.'], 403);
      }

      // Ambil 5 pertanyaan acak dari gedung yang diminta
      $questions = Quiz::where('gedung_id', $gedung_id)
         ->inRandomOrder()
         ->take(5)
         ->get();

      if ($questions->isEmpty()) {
         return response()->json(['message' => 'Tidak ada pertanyaan yang ditemukan untuk gedung ini.'], 404);
      }

      // Ambil jawaban untuk setiap pertanyaan
      $result = $questions->map(function ($question) {
         $answers = quiz_answer::where('question_id', $question->id)->get();
         return [
            'id' => $question->id,
            'question' => $question->quiz_question,
            'answers' => $answers->map(function ($answer) {
               return [
                  'id' => $answer->id,
                  'answer' => $answer->teks_jawaban
               ];
            })
         ];
      });

      // Return the questions with answers
      return response()->json($result, 200);
   }
}
