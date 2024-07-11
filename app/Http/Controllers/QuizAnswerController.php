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
    public function storeAnswer(Request $request,$question_id,$id){
        $userId = Auth::id(); // Assuming you have user authentication

        // Find the answer
        $answer = quiz_answer::where('id', $id)->where('question_id', $question_id)->first();
    
        if (!$answer) {
            return response()->json([
                'message' => 'Invalid question or answer ID'
            ], 404);
        }
    
        // Count the number of attempts the user has made for this question
        $attemptCount = QuizActivity::where('user_id', $userId)
                                    ->where('question_id', $question_id)
                                    ->count();
    
        if ($attemptCount >= 3) {
            return response()->json([
                'message' => 'You have exhausted your attempts for this question.'
            ], 400);
        }
    
        // Save the answer to the quiz activity
        QuizActivity::create([
            'user_id' => $userId,
            'question_id' => $question_id,
        ]);
    
        // Update the user's score
        $user = User::find($userId);
        $user->score += $answer->nilai_jawaban;
        $user->save();
    
        return response()->json([
            'message' => 'Answer submitted successfully', 
            'new_score' => $user->score,
        ], 200);
    }

    public function test(){
        return view("test");
    }    
}