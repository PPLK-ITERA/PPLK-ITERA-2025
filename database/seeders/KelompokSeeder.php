<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kelompok;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class KelompokSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create dummy data for Kelompok
        $kelompok1 = Kelompok::create([
            'user_id' => 1,
            'score_id' => 1,
            'linkedin_url' => 'https://linkedin.com/kelompok1',
            'photo_profile_url' => 'https://example.com/photo1.jpg',
            'password' => Hash::make('password'),
        ]);

        $kelompok2 = Kelompok::create([
            'user_id' => 2,
            'score_id' => 2,
            'linkedin_url' => 'https://linkedin.com/kelompok2',
            'photo_profile_url' => 'https://example.com/photo2.jpg',
            'password' => Hash::make('password'),
        ]);

        // Add more Kelompok as needed
    }
}
