<?php

namespace App\Http\Controllers;

use App\Models\quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function getAll($gedung_id)
    {
    // // Mendapatkan ID pertanyaan yang sudah ditampilkan dari session
    // $excludedIds = session()->get('id', []);

    // // Fetch 5 random quiz questions yang belum ditampilkan
    // $questions = quiz::select('id', 'quiz_question','gedung_id')
    //                  ->whereNotIn('id', $excludedIds) 
    //                  ->inRandomOrder()  
    //                  ->limit(5)         
    //                  ->get();

    // // Menambahkan ID pertanyaan baru ke dalam session
    // $newExcludedIds = array_merge($excludedIds, $questions->pluck('id')->toArray());
    // session()->put('id', $newExcludedIds);

    // return response()->json($questions);
    // }
    
            // Retrieve the quiz questions based on the gedung_id
            $questions = quiz::where('gedung_id', $gedung_id)->get();

            // Check if any questions are found
            if ($questions->isEmpty()) {
                return response()->json([
                    'message' => 'No questions found for the selected gedung.'
                ], 404);
            }
    
            // Return the questions
            return response()->json($questions, 200);
    }
}

