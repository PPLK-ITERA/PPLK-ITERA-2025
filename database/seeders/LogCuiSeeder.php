<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LogCui;
class LogCuiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        LogCui::Create([
            'status' => 'tidak_hadir',
        ]);
        LogCui::Create([
            'status' => 'tidak_hadir',
        ]);
        LogCui::Create([
            'status' => 'tidak_hadir',
        ]);
    }
}
