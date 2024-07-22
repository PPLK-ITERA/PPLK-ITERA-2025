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
         RoleSeeder::class,
         KelompokSeeder::class,
         ScoreboardSeeder::class,
         UserSeeder::class,
         PresensiPplkSeeder::class,
         QrcodeSeeder::class,
         ProdiSeeder::class,
         FAQSeeder::class,
         BookletSeeder::class,
         PenyakitSeeder::class,
         // Add more seeders if needed
      ]);
   }
}
