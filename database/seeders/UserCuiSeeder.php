<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserCui;

class UserCuiSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      UserCui::create([
         'nama' => 'Stevanus Cahya',
         'nim' => '123334422',
         'email' => 'ehehehe@xyz.com',
         'penyakit_id' => 1,
         'qrcode_id' => 1,
         'status' => 'maba',
      ]);
      UserCui::create([
         'nama' => 'Kobo Kanaeru',
         'nim' => '1233422',
         'email' => 'pawang@hujan.com',
         'penyakit_id' => 2,
         'qrcode_id' => 2,
         'status' => 'maba',
      ]);
      UserCui::create([
         'nama' => 'Windah Batubara',
         'nim' => '123332322',
         'email' => 'bocil@teori.com',
         'penyakit_id' => 3,
         'qrcode_id' => 3,
         'status' => 'maba',
      ]);
   }
}