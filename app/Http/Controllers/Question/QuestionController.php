<?php

namespace App\Http\Controllers\Question;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Question;
use Inertia\Inertia;
use Inertia\Response;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = Question::all();
        foreach ($questions as $question) {
            $answers = $question->Answer->toArray();
            $question->setRelation('Answer', collect($answers));
        }
        return Inertia::render('Question/Index', ['questions' => $questions]);
    }
}

