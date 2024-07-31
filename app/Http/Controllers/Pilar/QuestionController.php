<?php

namespace App\Http\Controllers\Pilar;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\Result;
use Carbon\Carbon;
use Inertia\Inertia;

class QuestionController extends Controller
{
    public function index()
    {
        $result = auth()->user()->result;
        if (!$result) {
            Result::create([
                'user_id' => auth()->user()->id,
                'start_time' => Carbon::now(),
            ]);
        }

        $questions = Question::all();
        foreach ($questions as $question) {
            $answers = $question->Answers;
            $question->setRelation('Answers', collect($answers));
        }
        return response()->json([
            'status' => 200,
            'message' => 'Success',
            'data' => [
                'questions' => $questions
            ]
        ]);

        // return Inertia::render('Question/Page', [
        //     'response' => [
        //         'status' => 200,
        //         'message' => 'Success',
        //         'data' => $questions
        //     ]
        // ]);
    }
}
