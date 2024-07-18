<?php

namespace Database\Seeders;

use App\Models\Penyakit;
use App\Models\pilar;
use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
   public function run()
   {
      $this->call([
         KelompokSeeder::class,
         ScoreboardSeeder::class,
         UserSeeder::class,
         PresensiPplkSeeder::class,
         RoleSeeder::class,
         QrcodeSeeder::class,
         ProdiSeeder::class,
         FAQSeeder::class,
         BookletSeeder::class,
         QrcodeSeeder::class,
         PenyakitSeeder::class,
         // Add more seeders if needed
      ]);
   }
}
