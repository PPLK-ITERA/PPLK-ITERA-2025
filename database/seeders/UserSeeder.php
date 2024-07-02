<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Create admin user if not exists
        User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        // Create dapmen user if not exists
        User::firstOrCreate(
            ['email' => 'dapmen@example.com'],
            [
                'name' => 'Dapmen User',
                'password' => Hash::make('password'),
                'role' => 'dapmen',
            ]
        );

        // Create mahasiswa user if not exists
        User::firstOrCreate(
            ['email' => 'mahasiswa@example.com'],
            [
                'name' => 'Mahasiswa User',
                'password' => Hash::make('password'),
                'role' => 'mahasiswa',
            ]
        );
    }
}
