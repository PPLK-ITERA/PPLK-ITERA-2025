<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kelompok;

class KelompokSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kelompok::create([
            'no_kelompok' => 'K001',
            'nama_kelompok' => 'Kelompok Satu',
            'logo_kelompok' => 'logo1.png'
        ]);

        Kelompok::create([
            'no_kelompok' => 'K002',
            'nama_kelompok' => 'Kelompok Dua',
            'logo_kelompok' => 'logo2.png'
        ]);
        
        // Tambahkan data kelompok sesuai kebutuhan
    }
}
