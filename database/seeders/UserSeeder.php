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
      User::create([
         'name' => 'User One',
         'email' => 'user1@example.com',
         'password' => bcrypt('password'),
         'photo_profile_url' => 'profile1.png',
         'linkedin_url' => 'https://linkedin.com/user1',
         'instagram_url' => 'https://instagram.com/user1',
         'kelompok_id' => 1,
         'pilar' => 1,
         'score' => 80,
         'qrcode_id' => 1,
      ]);

      User::create([
         'name' => 'User Two',
         'email' => 'user2@example.com',
         'password' => bcrypt('password'),
         'photo_profile_url' => 'profile2.png',
         'linkedin_url' => 'https://linkedin.com/user2',
         'instagram_url' => 'https://instagram.com/user2',
         'kelompok_id' => 1,
         'pilar' => 1,
         'score' => 70,
         'role_id'  => 1,
         'qrcode_id' => 2,
      ]);

      User::create([
         'name' => 'User Three',
         'email' => 'user3@example.com',
         'password' => bcrypt('password'),
         'photo_profile_url' => 'profile3.png',
         'linkedin_url' => 'https://linkedin.com/user3',
         'instagram_url' => 'https://instagram.com/user3',
         'kelompok_id' => 2,
         'pilar' => 1,
         'score' => 90,
         'role_id'  => 1,
         'qrcode_id' => 3,

      ]);


      User::create([
         'name' => 'User four',
         'email' => 'user4@example.com',
         'password' => bcrypt('password'),
         'photo_profile_url' => 'profile4.png',
         'linkedin_url' => 'https://linkedin.com/user4',
         'instagram_url' => 'https://instagram.com/user4',
         'kelompok_id' => 2,
         'pilar' => 1,
         'score' => 200,
         'role_id'  => 1,
         'qrcode_id' => 4,
      ]);


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