<?php

namespace Database\Seeders;

use App\Models\Qrcode;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QrcodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Qrcode::create([
            'code' => str()->random(10)
        ]);
        Qrcode::create([
            'code' => str()->random(10)
        ]);
        Qrcode::create([
            'code' => str()->random(10)
        ]);
        Qrcode::create([
            'code' => str()->random(10)
        ]);
    }
}
