<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    public function index()
    {
        $feedback = Feedback::with('responses')->get();
        return view('feedback.index', compact('feedback'));
    }

    public function store(Request $feedback)
    {
        $feedback->validate([
            'pertanyaan' => 'required',
        ]);

        Feedback::create([
            'user_id' => auth()->id,
            'pertanyaan' => $feedback->pertanyaan,
        ]);

        return redirect()->back()->with('success', 'Feedback submitted succesfully.');
    }

    public function allFeedback()
    {
        $feedback = Feedback::with('responses')->get();
        return view('feedback.all', compact('feedback'));
    }
}
