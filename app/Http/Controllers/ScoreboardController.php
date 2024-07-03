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

            // Update or create the scoreboard entry for the group
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
        // Fetch all scoreboards ordered by total score descending
        $scoreboards = Scoreboard::with('kelompok')
            ->orderByDesc('total_score')
            ->get();

        // Initialize arrays to store top 10 and other scores
        $top10 = [];
        $otherScores = [];

        // Process each scoreboard entry
        $rank = 1;
        foreach ($scoreboards as $scoreboard) {
            // Assign rank to the scoreboard entry
            $scoreboard->rank = $rank;

            // Determine whether to add to top 10 or other scores
            if ($rank <= 10) {
                $top10[] = $scoreboard;
            } else {
                $otherScores[] = $scoreboard;
            }

            $rank++;
        }

        return response()->json([
            'top_10' => $top10,
            'other_scores' => $otherScores
        ]);
    }
}
