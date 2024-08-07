<?php

namespace Database\Seeders;

use App\Models\Kelompok;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /// create kelompok 999
        $kelompok = new Kelompok(
            [
                'nama_kelompok' => 'xX_Kartatera_Xx',
                'no_kelompok' => 999,
            ]
        );

        $csvMaba = fopen(base_path("database/csv/AkunKartatera.csv"), "r");

        // Start time for measuring duration
        $startTime = microtime(true);

        $firstline = true;
        $users = [];
        $fileSize = filesize(base_path("database/csv/AkunKartatera.csv"));
        $processedBytes = 0;
        $totalProcessed = 0;  // Count total lines processed for progress calculation

        while (($data = fgetcsv($csvMaba, 2000, ",")) !== FALSE) {
            $currentPos = ftell($csvMaba);  // Current position in the file after reading a line
            if (!$firstline) {
                $users[] = [
                    "name" => $data[1],
                    "email" => $data[3],
                    "password" => bcrypt($data[4]),
                    "kelompok_id" => $data[11],
                    "prodi_id" => $data[14],
                    "role_id" => $data[16],
                    "created_at" => now(),
                    "updated_at" => now()
                ];
                $totalProcessed++;
            } else {
                $firstline = false;
            }

            // Batch insert and reset the users array every 500 records
            if (count($users) >= 500) {
                DB::transaction(function () use ($users) {
                    User::insert($users);
                });
                $users = [];
            }

            // Progress output every 500 records
            if ($totalProcessed % 500 == 0) {
                $progress = ($currentPos / $fileSize) * 100;
                echo "Progress: " . number_format($progress, 2) . "%\r";
            }
        }

        // Insert any remaining users
        if (!empty($users)) {
            DB::transaction(function () use ($users) {
                User::insert($users);
            });
        }

        fclose($csvMaba);

        // Calculate and display elapsed time
        $endTime = microtime(true);
        $elapsedTime = $endTime - $startTime;
        echo "\nImport completed in " . number_format($elapsedTime, 2) . " seconds.\n";

    }
}
