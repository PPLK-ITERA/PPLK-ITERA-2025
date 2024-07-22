<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Penyakit;
class PenyakitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Penyakit::create([
            'pita' => 'hijau',
        ]);
        Penyakit::create([
            'pita' => 'kuning',
            'ket_penyakit' => 'maag',
        ]);
        Penyakit::create([
            'pita' => 'merah',
            'ket_penyakit' => 'asma',
        ]);
    }
}
