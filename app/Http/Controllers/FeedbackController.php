<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    public function submit(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:225',
        ]);

        Feedback::create([
            'user_id' => auth()->id,
            'message' => $request->input('message'),
            'status' => 'in_progress',
            'response' => null,
        ]);

        return redirect()->back()->with('success', 'Feedback submitted succesfully.');
    }

    public function response(Request $request, $id)
    {
        $request->validate([
            'response' => 'required|string',
        ]);

        $feedback = Feedback::findOrFail($id);
        $feedback->response = $request->input('response');
        $feedback->status = 'completed';
        $feedback->save();

        return redirect()->back()->with('success', 'Response submitted succesfully.');
    }

    public function showAllFeedback()
    {
        $feedback = Feedback::all();
        return view('admin.feedback', compact('feedback'));
    }

    public function showUserFeedback(Request $request)
    {
        $feedback = Feedback::where('user_id', $request->user()->id)->get();
        return view('user.feedback', compact('feedback'));
    }
}
