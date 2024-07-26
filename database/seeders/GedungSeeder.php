<?php

namespace Database\Seeders;

use App\Models\gedung;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GedungSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gedungs = [
                // Main Gates
    ['nama_gedung' => 'Gerbang Utama'],
    ['nama_gedung' => 'Gerbang Barat'],

    // Buildings
    ['nama_gedung' => 'Gedung A'],
    ['nama_gedung' => 'Gedung B'],
    ['nama_gedung' => 'Gedung C'],
    ['nama_gedung' => 'Gedung D'],
    ['nama_gedung' => 'Gedung E'],
    ['nama_gedung' => 'Gedung F'],

    // GKU
    ['nama_gedung' => 'GKU 1'],
    ['nama_gedung' => 'GKU 2'],

    // LABTEK
    ['nama_gedung' => 'LABTEK 1'],
    ['nama_gedung' => 'LABTEK 2'],
    ['nama_gedung' => 'LABTEK 3'],
    ['nama_gedung' => 'LABTEK OZT'],

    // EMBUNG
    ['nama_gedung' => 'EMBUNG A'],
    ['nama_gedung' => 'EMBUNG B'],
    ['nama_gedung' => 'EMBUNG C'],
    ['nama_gedung' => 'EMBUNG D'],
    ['nama_gedung' => 'EMBUNG SUMATERA'],

    // KEBUN RAYA and other special areas
    ['nama_gedung' => 'KEBUN RAYA'],
    ['nama_gedung' => 'OAIL'],
    ['nama_gedung' => 'IWACI'],
    ['nama_gedung' => 'POLIKLINIK'],
    ['nama_gedung' => 'ASRAMA'],

    // Sports Fields
    ['nama_gedung' => 'Lapangan Deket Gedung C (Basket, Voli)'],
    ['nama_gedung' => 'Lapangan Basket Deket Asrama'],
    ['nama_gedung' => 'Lapangan Baseball'],

    // Other locations
    ['nama_gedung' => 'GSG'],
    ['nama_gedung' => 'PLTS'],

    // Galleries
    ['nama_gedung' => 'Galeri 1'],
    ['nama_gedung' => 'Galeri 2'],

    // Canteens
    ['nama_gedung' => 'Kantin BKL'],
    ['nama_gedung' => 'Kantin RK'],

        ];

        gedung::query()->insert($gedungs);
    }
}
