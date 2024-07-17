<?php

namespace Database\Seeders;

use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QrcodeSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      $n = User::count();
      for ($i = 0; $i < $n; $i++) {
         Qrcode::create([
            'user_id' => $i + 1,
            'code' => str()->random(10)
         ]);
      }
   }
}
