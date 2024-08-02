<?php

namespace App\Http\Controllers\Pilar;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\AnswerActivity;
use App\Models\Question;
use App\Models\Result;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AnswerController extends Controller
{
    public function store($question_id, $answer_id)
    {
        $answer_activity = AnswerActivity::where('user_id', auth()->user()->id)->where('question_id', $question_id)->first();
        if ($answer_activity) {
            return response()->json([
                'status' => 400,
                'message' => 'Udah jawab soal',
                'data' => []
            ]);
        }

        $result = Result::where('user_id', auth()->user()->id)->firstOrFail();
        $question = Question::findOrfail($question_id);
        $answer = Answer::where('id', $answer_id)->where('question_id', $question_id)->firstOrFail();

        DB::beginTransaction();
        try {
            switch ($question->sifat) {
                case 1:
                    $result->sifat_1_score += $answer->nilai_sifat;
                    break;
                case 2:
                    $result->sifat_2_score += $answer->nilai_sifat;
                    break;
                case 3:
                    $result->sifat_3_score += $answer->nilai_sifat;
                    break;
            }
            $result->save();
            AnswerActivity::create([
                'user_id' => auth()->user()->id,
                'question_id' => $question->id,
            ]);
            DB::commit();
            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'data' => []
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'status' => 500,
                'message' => 'Failed to save answer',
                'data' => []
            ]);
        }

    }
}
