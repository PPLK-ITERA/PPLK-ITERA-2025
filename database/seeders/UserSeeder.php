<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\Console\Output\ConsoleOutput;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Path ke file CSV
        $csvPath = base_path("database/csv/AkunMaba.csv");

        if (!file_exists($csvPath)) {
            $this->command->error("File CSV tidak ditemukan di: " . $csvPath);
            return;
        }

        // 1. Hitung total baris (di luar header) untuk progress bar yang akurat
        $totalRows = count(file($csvPath)) - 1;
        $progressBar = $this->command->getOutput()->createProgressBar($totalRows);
        $this->command->info("Memulai seeder untuk Mahasiswa Baru (Maba)...");

        $csvFile = fopen($csvPath, "r");

        $isFirstLine = true;
        $usersBatch = [];
        $batchSize = 500;

        // Memulai progress bar
        $progressBar->start();

        // Membungkus proses dalam transaction untuk memastikan integritas data
        DB::transaction(function () use ($csvFile, &$isFirstLine, &$usersBatch, $batchSize, $progressBar) {
            while (($data = fgetcsv($csvFile, 2000, ";")) !== false) {
                // Lewati baris header
                if ($isFirstLine) {
                    $isFirstLine = false;
                    continue;
                }

                // Validasi jumlah kolom untuk menghindari error
                if (count($data) < 15) {
                    // Log::warning('Skipping invalid row in UserSeeder: ' . implode(';', $data));
                    continue;
                }

                // Kumpulkan data user ke dalam batch
                $usersBatch[] = [
                    "name" => $data[1],
                    "email" => $data[3],
                    "password" => Hash::make($data[4]),
                    "kelompok_id" => $data[11],
                    "prodi_id" => $data[14],
                    "role_id" => 1, // Role untuk Maba
                    "created_at" => now(),
                    "updated_at" => now()
                ];

                // Jika batch sudah mencapai ukuran yang ditentukan, insert ke database
                if (count($usersBatch) >= $batchSize) {
                    User::insert($usersBatch);
                    $progressBar->advance(count($usersBatch)); // Majukan progress bar
                    $usersBatch = []; // Kosongkan batch
                }
            }

            // Insert sisa user yang ada di batch terakhir
            if (!empty($usersBatch)) {
                User::insert($usersBatch);
                $progressBar->advance(count($usersBatch)); // Majukan progress bar untuk sisa data
            }
        });

        fclose($csvFile);

        // Selesaikan progress bar
        $progressBar->finish();

        // Beri baris baru setelah progress bar selesai
        $this->command->info("\nSeeder untuk Mahasiswa Baru (Maba) telah selesai.");
    }
}
