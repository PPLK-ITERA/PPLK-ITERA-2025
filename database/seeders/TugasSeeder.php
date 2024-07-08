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
        // Ambil beberapa user sebagai contoh
        $users = User::pluck('id');

        // Array materi yang tersedia
        $materiOptions = ['materi1', 'materi2', 'materi3'];

        // Buat beberapa data dummy untuk setiap user
        foreach ($users as $userId) {
            for ($i = 0; $i < rand(1, 5); $i++) { // Buat antara 1 hingga 5 tugas untuk setiap user
                Tugas::create([
                    'link' => 'https://example.com/task' . ($i + 1),
                    'user_id' => $userId,
                    'materi' => $materiOptions[array_rand($materiOptions)], // Pilih materi secara acak
                    'tanggal_submit' => Carbon::now()->subDays(rand(1, 30)), // Submit dalam 30 hari terakhir
                ]);
            }
        }
    }
}