<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Scoreboard;
use App\Models\Kelompok;
use App\Models\User;

class ScoreboardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ambil semua kelompok
        $kelompoks = Kelompok::all();

        foreach ($kelompoks as $kelompok) {
            // Hitung total skor untuk setiap kelompok
            $totalScore = User::where('kelompok_id', $kelompok->id)->sum('score');

            // Buat entri di scoreboard
            Scoreboard::create([
                'kelompok_id' => $kelompok->id,
                'total_score' => $totalScore,
            ]);
        }
    }
}
