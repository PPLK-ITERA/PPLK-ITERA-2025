<?php

namespace Database\Seeders;

use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class QrcodeSeeder extends Seeder
{
   /**
    * Run the database seeds.
    *
    * @return void
    */
   public function run()
   {
      $users = User::all();
      foreach ($users as $user) {
         Qrcode::create([
            'user_id' => $user->id,
            'code' => Str::random(10),
         ]);
      }
   }
}
