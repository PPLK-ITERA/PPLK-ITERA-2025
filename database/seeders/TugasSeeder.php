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
        $users = User::pluck('id')->toArray();
        $materiOptions = ['materi1', 'materi2', 'materi3'];
        $kategoriOptions = ['individu', 'kelompok'];

        Tugas::insert([
            [
                'link' => 'https://example.com/task1',
                'user_id' => $users[0],
                'materi' => $materiOptions[0],
                'tanggal_submit' => Carbon::now()->subDays(5),
                'kategori_tugas' => $kategoriOptions[0],
            ],
            [
                'link' => 'https://example.com/task2',
                'user_id' => $users[1],
                'materi' => $materiOptions[1],
                'tanggal_submit' => Carbon::now()->subDays(10),
                'kategori_tugas' => $kategoriOptions[1],
            ],
            [
                'link' => 'https://example.com/task3',
                'user_id' => $users[2],
                'materi' => $materiOptions[2],
                'tanggal_submit' => Carbon::now()->subDays(15),
                'kategori_tugas' => $kategoriOptions[0],
            ],
            // Tambahkan lebih banyak data sesuai kebutuhan
        ]);
    }
}


// tambahin kolom tabel untuk ketua kelompok