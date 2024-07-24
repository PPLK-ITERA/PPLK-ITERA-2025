<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      Role::insert([
         ['role' => 'Maba'],
         ['role' => 'Daplok'],
         ['role' => 'Admin'],
         ['role' => 'Mentor'],
         ['role' => 'Pjprodi'],
         ['role' => 'Korlap'],
         ['role' => 'Mamet'],
         ['role' => 'CustomerService'],
      ]);
   }
}