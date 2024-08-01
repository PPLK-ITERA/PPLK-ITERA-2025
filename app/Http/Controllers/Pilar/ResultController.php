<?php

namespace App\Http\Controllers\Pilar;

use App\Http\Controllers\Controller;

class ResultController extends Controller
{
    public function reset()
    {
        try {
            $result = auth()->user()->result;
            $result->delete();
            $answerActivities = auth()->user()->assesmenActivity;
            foreach ($answerActivities as $answerActivity) {
                $answerActivity->delete();
            }
            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'data' => []
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => "Failed to reset result",
                'data' => []
            ]);
        }
    }
}
