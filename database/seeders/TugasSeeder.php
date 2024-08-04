<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tugas;
use App\Models\User;
use Carbon\Carbon;

class TugasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tugas = [
            [
                'judul' => 'Tugas 1',
                'deskripsi' => 'Deskripsi Tugas 1',
                'hari' => '0',
                'tipe_link' => 'drive',
                'kategori' => 'kelompok',
                'deadline' => Carbon::now()->addDays(1),
            ],
            [
                'judul' => 'Tugas 2 - Tiktok',
                'deskripsi' => 'Deskripsi Tugas 2',
                'hari' => '1',
                'tipe_link' => 'tiktok',
                'kategori' => 'individu',
                'deadline' => Carbon::now()->addDays(2),
            ],
            [
                'judul' => 'Tugas 2 - Drive',
                'deskripsi' => 'Deskripsi Tugas 2',
                'hari' => '1',
                'tipe_link' => 'drive',
                'kategori' => 'individu',
                'deadline' => Carbon::now()->addDays(2),
            ],
            [
                'judul' => 'Tugas 3',
                'deskripsi' => 'Deskripsi Tugas 3',
                'hari' => '2',
                'tipe_link' => 'drive',
                'kategori' => 'individu',
                'deadline' => Carbon::now()->addDays(3),
            ],
            [
                'judul' => 'Tugas 4',
                'deskripsi' => 'Deskripsi Tugas 4',
                'hari' => '3',
                'tipe_link' => 'drive',
                'kategori' => 'individu',
                'deadline' => Carbon::now()->addDays(4),
            ],
            [
                'judul' => 'Tugas 5',
                'deskripsi' => 'Deskripsi Tugas 5',
                'hari' => '4',
                'tipe_link' => 'drive',
                'kategori' => 'individu',
                'deadline' => Carbon::now()->addDays(5),
            ],
            [
                'judul' => 'Tugas 6',
                'deskripsi' => 'Deskripsi Tugas 6',
                'hari' => '5',
                'tipe_link' => 'drive',
                'kategori' => 'individu',
                'deadline' => Carbon::now()->addDays(6),
            ],
        ];

        foreach ($tugas as $t) {
            Tugas::create($t);
        }
    }
}


// tambahin kolom tabel untuk ketua kelompok