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
         Kelompok::create([
            'no_kelompok' => $i + 1,
            'nama_kelompok' => 'Kelompok ' . ($i + 1),
            'logo_kelompok' => 'kelompok' . ($i + 1) . '.png',
         ]);
      }
   }
}
