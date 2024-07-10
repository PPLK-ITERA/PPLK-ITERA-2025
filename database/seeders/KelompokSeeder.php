<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kelompok;

class KelompokSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      $kelompoks = [
         ['no_kelompok' => '1', 'nama_kelompok' => 'Kelompok 1', 'logo_kelompok' => 'logo1.png'],
         ['no_kelompok' => '2', 'nama_kelompok' => 'Kelompok 2', 'logo_kelompok' => 'logo2.png'],
         ['no_kelompok' => '3', 'nama_kelompok' => 'Kelompok 3', 'logo_kelompok' => 'logo3.png'],
         ['no_kelompok' => '4', 'nama_kelompok' => 'Kelompok 4', 'logo_kelompok' => 'logo4.png'],
         ['no_kelompok' => '5', 'nama_kelompok' => 'Kelompok 5', 'logo_kelompok' => 'logo5.png'],
     ];

     Kelompok::query()->insert($kelompoks);
   }
}
