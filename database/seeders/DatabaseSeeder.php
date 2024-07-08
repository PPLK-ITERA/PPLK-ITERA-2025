<?php

namespace Database\Seeders;

use App\Models\pilar;
use App\Models\User;
use App\Models\Role;
use App\Models\Tugas;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
   public function run()
   {
      // Create test user
      User::factory()->create([
         'name' => 'Test User',
         'email' => 'test@example.com',
         'role_id' => 1
      ]);

      // Call other seeders
      $this->call([
         KelompokSeeder::class,
         ScoreboardSeeder::class,
         UserSeeder::class,
         PresensiPplkSeeder::class,
         RoleSeeder::class,
         TugasSeeder::class,
         // Add more seeders if needed
      ]);
      Role::create(
         ['role' => 'Mahasiswa'],
      );
      pilar::create(
         ['pilar_name' => 'mblegedes'],
      );
   }
}