<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      User::factory()->count(10)->create();


      // Create admin user if not exists
      User::firstOrCreate(
         ['email' => 'admin@example.com'],
         [
            'name' => 'Admin User',
            'password' => bcrypt('password'),
            'role_id' => 1,
         ]
      );

      // Create dapmen user if not exists
      User::firstOrCreate(
         ['email' => 'dapmen@example.com'],
         [
            'name' => 'Dapmen User',
            'password' => bcrypt('password'),
            'role_id' => 1,
         ]
      );

      // Create mahasiswa user if not exists
      User::firstOrCreate(
         ['email' => 'mahasiswa@example.com'],
         [
            'name' => 'Mahasiswa User',
            'password' => bcrypt('password'),
            'role_id' => 1,
         ]
      );
   }
}
