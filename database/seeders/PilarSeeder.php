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
                'pilar_name' => 'Pilar 1',
            ],
            [
                'pilar_name' => 'Pilar 2',
            ],
            [
                'pilar_name' => 'Pilar 3',
            ],
            [
                'pilar_name' => 'Pilar 4',
            ],
        ];
        Pilar::query()->insert($pilars);
    }
}
