<?php

namespace Database\Seeders;

use App\Models\Tugas;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PengumpulanTugasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::where('role_id', 1)->get();
        $tugass = Tugas::all();
        foreach ($tugass as $tugas) {
            foreach ($users as $user) {
                if ($tugas->id != 2) {
                    $tugas->pengumpulanTugas()->create([
                        'jawaban' => 'Jawaban Tugas',
                        'user_id' => $user->id,
                    ]);
                }
            }
        }
    }
}
