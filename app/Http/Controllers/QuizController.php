<?php

namespace App\Http\Controllers;

use App\Models\quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function getAll()
    {
        // Fetch 5 random quiz questions
        $questions = quiz::select('id', 'quiz_question')
                         ->inRandomOrder()  // Order the results randomly
                         ->limit(5)         // Limit the number of questions to 5
                         ->get();

        return response()->json($questions);
    }
    }

