<?php

namespace App\Http\Controllers\Pilar;

use App\Http\Controllers\Controller;
use App\Models\AnswerActivity;
use App\Models\Question;
use App\Models\Result;
use Carbon\Carbon;
use Inertia\Inertia;

class QuestionController extends Controller
{
    public function index()
    {
        $answered_activities = AnswerActivity::where('user_id', auth()->user()->id)->get();
        if ($answered_activities->count() == 15) {
            return to_route('asesmen.result');
        }

        return Inertia::render('Asesmen/Page');
    }

    public function getQuestions()
    {
        $result = auth()->user()->result;
        if (!$result) {
            Result::create([
                'user_id' => auth()->user()->id,
                'start_time' => Carbon::now(),
            ]);
        }
        $questions = Question::with('Answers')->get();

        foreach ($questions as $question) {
            $question->answers = $question->answers->shuffle();
        }

        return response()->json([
            'status' => 200,
            'message' => 'Success',
            'data' => [
                'questions' => $questions->shuffle()
            ]
        ]);
    }
}