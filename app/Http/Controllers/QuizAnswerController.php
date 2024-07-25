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
    public function checkAnswers(Request $request, $id)
{
    // $user = Auth::user();
    $user = User::findOrFail($id);
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
                             ->latest('created_at')
                             ->first();
    // dd($activity->selesai);

    if ($activity && $activity->selesai == 1) {
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

    if (!$activity|| $activity->selesai == 0) {
        $activity = new QuizActivity([
            'user_id' => $user->id,
            'gedung_id' => $gedung_id,
            'selesai' => 0
        ]);
    }

    if ($score == 5) {
        $user->score += 100;
        // $activity = new QuizActivity([
        //     'user_id' => $user->id,
        //     'gedung_id' => $gedung_id,
        //     'selesai' => 1
        // ]);
        $activity ->selesai = 1;
    } else {
        $attempt = QuizActivity::where('user_id', $id)->where('gedung_id', $gedung_id)->get()->count();
        if ($attempt > 1) {
            // $activity = new QuizActivity([
            //     'user_id' => $user->id,
            //     'gedung_id' => $gedung_id,
            //     'selesai' => 1
            // ]);
            $activity ->selesai = 1;
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