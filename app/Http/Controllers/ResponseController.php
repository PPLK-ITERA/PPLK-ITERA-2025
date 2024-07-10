<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Response;
use App\Models\Feedback;

class ResponseController extends Controller
{
    public function store(Request $request, $feedbackId)
    {
        $request->validate([
            'response' => 'required',
        ]);

        Response::create([
            'feedback_id' => $feedbackId,
            'admin_id' => auth()->id,
            'response' => $request->response,
        ]);

        $feedback = Feedback::find($feedbackId);
        $feedback->update(['status'=>'completed']);

        return redirect()->back()->with('success', 'Response submitted successfully.');
    }
}
