<?php

namespace App\Http\Controllers;

use App\Models\Kelompok;
use App\Models\Scoreboard;
use Illuminate\Http\Request;

class ScoreboardController extends Controller
{
    /**
     * Accumulate scores for each group and update the scoreboard.
     */
    public function accumulateScores()
    {
        // Fetch all groups with their users
        $kelompoks = Kelompok::with('users')->get();

        foreach ($kelompoks as $kelompok) {
            // Sum the scores of all users in the group
            $totalScore = $kelompok->users->sum('score');

            // Update the scoreboard with the total score
            $scoreboard = Scoreboard::updateOrCreate(
                ['kelompok_id' => $kelompok->id],
                ['total_score' => $totalScore]
            );
        }

        return response()->json(['message' => 'Scores accumulated and scoreboard updated successfully.']);
    }

    /**
     * Get the scoreboard with ranking.
     */

    public function getScoreboard()
    {
        // Fetch the top 10 scores
        $top10 = Scoreboard::with('kelompok')
            ->orderBy('total_score', 'desc')
            ->take(10)
            ->get();

        // Fetch the scores of other groups not in the top 10
        $otherScores = Scoreboard::with('kelompok')
            ->whereNotIn('id', $top10->pluck('id'))
            ->orderBy('total_score', 'desc')
            ->get();

        return response()->json([
            'top_10' => $top10,
            'other_scores' => $otherScores
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Scoreboard $scoreboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Scoreboard $scoreboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Scoreboard $scoreboard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Scoreboard $scoreboard)
    {
        //
    }
}
