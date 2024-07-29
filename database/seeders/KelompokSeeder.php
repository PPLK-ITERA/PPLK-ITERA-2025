<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kelompok;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Output\ConsoleOutput;

class KelompokSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      for ($i = 0; $i < 10; $i++) {
         // Create users and save them to get their IDs
         $daplokUser = User::factory()->create([
            'role_id' => 2, // Assuming role_id 2 is for daplok
            'kelompok_id' => $i + 1
         ]);

         $mentorUser = User::factory()->create([
            'role_id' => 4, // Assuming role_id 4 is for mentor
            'kelompok_id' => $i + 1
         ]);

         // Now create Kelompok using the IDs from the created users
         Kelompok::create([
            'no_kelompok' => $i + 1,
            'nama_kelompok' => 'Kelompok ' . ($i + 1),
            'logo_kelompok' => 'kelompok' . ($i + 1) . '.png',
            'daplok_id' => $daplokUser->id,
            'mentor_id' => $mentorUser->id
         ]);
      }
   }
}
