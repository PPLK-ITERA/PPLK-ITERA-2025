<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeslaSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('teslas')->truncate();
        // Tambahkan seeder untuk tabel day
        DB::table('day')->truncate();

        $data = [
            [
                'tipe' => 'mendatar',
                'nomor' => 1,
                'pertanyaan' => 'Perwakilan dari suatu institusi?',
                'jawaban' => 'duta',
                'start_row' => 1,
                'start_col' => 1,
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 2,
                'pertanyaan' => 'Seseorang yang menjadi panutan?',
                'jawaban' => 'role model',
                'start_row' => 1,
                'start_col' => 3,
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 3,
                'pertanyaan' => 'Sikap saling menghargai perbedaan?',
                'jawaban' => 'toleransi',
                'start_row' => 3,
                'start_col' => 5,
            ],
            [
                'tipe' => 'mendatar',
                'nomor' => 4,
                'pertanyaan' => 'Sikap menghormati orang lain?',
                'jawaban' => 'sopan',
                'start_row' => 4,
                'start_col' => 2,
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 5,
                'pertanyaan' => 'Tepat waktu dan taat aturan?',
                'jawaban' => 'disiplin',
                'start_row' => 5,
                'start_col' => 7,
            ],
            [
                'tipe' => 'mendatar',
                'nomor' => 6,
                'pertanyaan' => 'Konsisten antara pikiran perkataan dan perbuatan?',
                'jawaban' => 'integritas',
                'start_row' => 6,
                'start_col' => 4,
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 7,
                'pertanyaan' => 'Kemampuan untuk bekerja sama dengan orang lain?',
                'jawaban' => 'kolaboratif',
                'start_row' => 7,
                'start_col' => 9,
            ],
            [
                'tipe' => 'mendatar',
                'nomor' => 8,
                'pertanyaan' => 'Sikap yang selalu ingin belajar dan berkembang?',
                'jawaban' => 'proaktif',
                'start_row' => 8,
                'start_col' => 6,
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 9,
                'pertanyaan' => 'Kemampuan untuk mengatasi masalah dengan baik?',
                'jawaban' => 'problem solving',
                'start_row' => 9,
                'start_col' => 11,
            ],
            [
                'tipe' => 'mendatar',
                'nomor' => 10,
                'pertanyaan' => 'Sikap yang selalu optimis dan positif?',
                'jawaban' => 'optimisme',
                'start_row' => 10,
                'start_col' => 8,
            ],
        ];

        foreach ($data as $item) {
            DB::table('teslas')->insert([
                'tipe' => $item['tipe'],
                'nomor' => $item['nomor'],
                'pertanyaan' => $item['pertanyaan'],
                'jawaban' => $item['jawaban'],
                'start_row' => $item['start_row'],
                'start_col' => $item['start_col'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Seeder untuk tabel day (DAY 1)
        DB::table('day')->insert([
            'change_day' => 'DAY 1',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
