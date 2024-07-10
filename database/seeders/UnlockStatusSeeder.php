<?php

namespace Database\Seeders;

use App\Models\gedung;
use App\Models\Kelompok;
use App\Models\UnlockStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UnlockStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kelompoks = Kelompok::all();
        $gedungs = Gedung::all()->pluck('id')->toArray();
        $startDate = strtotime('today');

        foreach ($kelompoks as $index => $kelompok) {
            // Assign a random gedung to each kelompok
            $gedungId = $gedungs[$index % count($gedungs)];

            UnlockStatus::create([
                'kelompok_id' => $kelompok->id,
                'gedung_id' => $gedungId,
                'dateOpen' => $startDate
            ]);

            // Move to the next day for the next group
            $startDate = strtotime('+1 day', $startDate);
        }
    }
}
