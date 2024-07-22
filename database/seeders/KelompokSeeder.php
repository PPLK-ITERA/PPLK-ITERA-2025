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
      $kelompokData = [];
      $userData = [];
      $output = new ConsoleOutput();
      $totalUsers = 5 * 5;
      $progress = new ProgressBar($output, $totalUsers);
      $progress->start();

      DB::beginTransaction();
      try {
         for ($i = 1; $i <= 5; $i++) {
            $kelompokData[] = [
               'no_kelompok' => $i,
               'nama_kelompok' => 'Kelompok ' . $i,
            ];

            for ($j = 1; $j <= 5; $j++) {
               $userData[] = User::factory()->make([
                  'kelompok_id' => $i,
               ])->toArray();
               $progress->advance();
            }

            if ($i % 10 == 0 || $i == 140) {
               Kelompok::insert($kelompokData);
               User::insert($userData);

               $kelompokData = [];
               $userData = [];
            }
         }
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         throw $e;
      }
      $progress->finish();
   }
}
