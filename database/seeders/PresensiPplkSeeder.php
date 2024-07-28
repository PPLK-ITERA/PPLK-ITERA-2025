<?php

namespace Database\Seeders;

use App\Models\PresensiPplk;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PresensiPplkSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      // Ini untuk kebutuhan tes

      PresensiPplk::create([
         'user_id' => 4,
         'kehadiran' => 'Hadir',
      ]);
      PresensiPplk::create([
         'user_id' => 2,
         'kehadiran' => 'Hadir',
      ]);
      PresensiPplk::create([
         'user_id' => 3,
         'kehadiran' => 'Hadir',
      ]);
      PresensiPplk::create([
         'user_id' => 5,
         'kehadiran' => 'Hadir',
         'tanggal_presensi' => Carbon::yesterday(),
      ]);
      PresensiPplk::create([
         'user_id' => 5,
         'kehadiran' => 'Hadir',
      ]);

      // Tambahkan data presensi sesuai kebutuhan
   }
}
