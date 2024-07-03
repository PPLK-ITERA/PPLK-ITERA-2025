<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Scoreboard;

class ScoreboardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create dummy data for Scoreboard
        $scoreboard1 = Scoreboard::create([
            'kelompok_id' => 1,
            'total_score' => 100,
        ]);

        $scoreboard2 = Scoreboard::create([
            'kelompok_id' => 2,
            'total_score' => 90,
        ]);

        // Add more Scoreboard as needed
    }
}
