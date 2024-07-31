<?php

namespace App\Http\Controllers\Pilar;

use App\Http\Controllers\Controller;
use App\Models\Pilar;
use App\Models\Result;
use Inertia\Inertia;

class PilarController extends Controller
{
    public function index()
    {
        $result = Result::where('user_id', auth()->user()->id)->firstOrFail();
        $pilar = null;
        $sifatScores = [$result->sifat_1_score, $result->sifat_2_score, $result->sifat_3_score];

        if ($result->sifat_1_score >= 8 && $result->sifat_2_score >= 8 && $result->sifat_3_score >= 8) {
            $pilar = Pilar::find(4);
        } else {
            $maxScore = max($sifatScores);
            $indices = array_keys($sifatScores, $maxScore);
            $pilarIndex = max($indices);
            $pilar = Pilar::find($pilarIndex + 1);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Success',
            'data' => [
                'result' => $result,
                'pilar' => $pilar
            ]
        ]);
        // return Inertia::render('Pilar/Page', [
        //     'response' => [
        //         'status' => 200,
        //         'message' => 'Success',
        //         'data' => [
        //             'result' => $result,
        //             'pilar' => $pilar
        //         ]
        //     ]
        // ]);
    }
}
