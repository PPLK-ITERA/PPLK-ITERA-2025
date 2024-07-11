<?php

namespace Database\Seeders;

use App\Models\gedung;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class gedungSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gedungs = [
            ['nama_gedung' => 'Gedung A'],
            ['nama_gedung' => 'Gedung B'],
            ['nama_gedung' => 'Gedung C'],
            ['nama_gedung' => 'Gedung D'],
            ['nama_gedung' => 'Gedung E'],
        ];

        gedung::query()->insert($gedungs);
    }
}
