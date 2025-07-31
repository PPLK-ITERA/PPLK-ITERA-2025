<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeslaSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('teslas')->truncate(); // Pastikan data lama dihapus

        $data = [
            [
                'tipe' => 'mendatar',
                'nomor' => 1,
                'pertanyaan' => 'Perwakilan dari suatu institusi?',
                'jawaban' => 'duta',
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 2,
                'pertanyaan' => 'Seseorang yang menjadi panutan?',
                'jawaban' => 'role model',
            ],
            [
                'tipe' => 'mendatar',
                'nomor' => 3,
                'pertanyaan' => 'Sikap saling menghargai perbedaan?',
                'jawaban' => 'toleransi',
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 4,
                'pertanyaan' => 'Sikap menghormati orang lain?',
                'jawaban' => 'sopan',
            ],
            [
                'tipe' => 'mendatar',
                'nomor' => 5,
                'pertanyaan' => 'Tepat waktu dan taat aturan?',
                'jawaban' => 'disiplin',
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 6,
                'pertanyaan' => 'Konsisten antara pikiran perkataan dan perbuatan?',
                'jawaban' => 'integritas',
            ],
            [
                'tipe' => 'mendatar',
                'nomor' => 7,
                'pertanyaan' => 'Sikap yang selalu ingin belajar dan berkembang?',
                'jawaban' => 'proaktif',
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 8,
                'pertanyaan' => 'Kemampuan untuk bekerja sama dengan orang lain?',
                'jawaban' => 'kolaboratif',
            ],
            [
                'tipe' => 'mendatar',
                'nomor' => 9,
                'pertanyaan' => 'Sikap yang selalu optimis dan positif?',
                'jawaban' => 'optimisme',
            ],
            [
                'tipe' => 'menurun',
                'nomor' => 10,
                'pertanyaan' => 'Kemampuan untuk mengatasi masalah dengan baik?',
                'jawaban' => 'problem solving',
            ],
        ];

        foreach ($data as $item) {
            DB::table('teslas')->insert([
                'tipe' => $item['tipe'],
                'nomor' => $item['nomor'],
                'pertanyaan' => $item['pertanyaan'],
                'jawaban' => $item['jawaban'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
