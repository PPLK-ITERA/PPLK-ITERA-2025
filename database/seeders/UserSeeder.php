<?php

namespace Database\Seeders;

use App\Models\Kelompok;
use App\Models\Role;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {

      $groups = Kelompok::all();
      foreach ($groups as $group) {
         User::factory()->count(1)->create([
            'kelompok_id' => $group->id,
            'isKetua' => true,
         ]);
         User::factory()->count(5)->create([
            'kelompok_id' => $group->id,
         ]);
      }

      //Role Generate
      $roles = Role::all();
      foreach ($roles as $role) {
         $roleModel = Role::where('role', $role['role'])->first();

         User::firstOrCreate(
            ['email' => strtolower($role['role']) . '@kartatera.com'],  // Unique email for each role
            [
               'name' => $role['role'] . ' User',
               'password' => bcrypt('password'),  // Example password
               'role_id' => $roleModel->id,
            ]
         );
      }
   }
}
