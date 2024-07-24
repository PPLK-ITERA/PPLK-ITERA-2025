<?php

namespace App\Http\Controllers;

use App\Models\AnswerActivity;
use App\Models\quiz;
use App\Models\quiz_answer;
use App\Models\QuizActivity;
use App\Models\UnlockStatus;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuizAnswerController extends Controller
{
    public function checkAnswers(Request $request)
{
    $user = Auth::user();

    // Validasi request
    $validated = $request->validate([
        'gedung_id' => 'required|integer',
        'answer' => 'required|array',
        'answer.*.question_id' => 'required|integer',
        'answer.*.answer_id' => 'required|integer'
    ]);

    $gedung_id = $validated['gedung_id'];
    $answers = $validated['answer'];

    // Cek apakah gedung sudah selesai di QuizActivity
    $activity = QuizActivity::where('user_id', $user->id)
                             ->where('gedung_id', $gedung_id)
                             ->first();

    if ($activity && $activity->selesai) {
        return response()->json([
            'status' => 200,
            'message' => 'Gedung ini sudah selesai dijawab.',
            'data' => null
        ]);
    }

    $score = 0;
    foreach ($answers as $answer) {
        $correctAnswer = quiz_answer::where('question_id', $answer['question_id'])
                                   ->where('id', $answer['answer_id'])
                                   ->where('is_correct', 1)
                                   ->exists();
        if ($correctAnswer) {
            $score += 1;
        }
    }

    if (!$activity) {
        $activity = new QuizActivity([
            'user_id' => $user->id,
            'gedung_id' => $gedung_id,
            'selesai' => false
        ]);
    }

    if ($score == 5) {
        $user->score += 100;
        $activity->selesai = true;
    } else {
        $activity->attempt_count = ($activity->attempt_count ?? 0) + 1;
        if ($activity->attempt_count >= 3) {
            $activity->selesai = true;
        }
    }

    $user->save();
    $activity->save();

    $message = $score == 5 ? "Berhasil menjawab" : "Gagal menjawab";

    return response()->json([
        'status' => 200,
        'message' => $message,
        'data' => null
    ]);
}

    public function test(){
        return view("test");
    }    
}