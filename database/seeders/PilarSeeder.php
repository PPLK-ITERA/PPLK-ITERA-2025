<?php

namespace Database\Seeders;

use App\Models\Pilar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PilarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pilars = [
            [
                'pilar_name' => 'Work Hard',
            ],
            [
                'pilar_name' => 'Sharing Is Caring',
            ],
            [
                'pilar_name' => 'Equity',
            ],
            [
                'pilar_name' => 'Refinement',
            ],
        ];
        Pilar::query()->insert($pilars);
    }
}
