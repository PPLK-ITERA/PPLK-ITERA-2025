<?php

namespace Database\Seeders;

use App\Models\Kelompok;
use App\Models\Role;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = base_path("database/csv/akun_maba.csv");
        $csvMaba = fopen($csvFile, "r");

        if (!$csvMaba) {
            echo "Error: Cannot open CSV file\n";
            return;
        }

        // Start time for measuring duration
        $startTime = microtime(true);

        $firstline = true;
        $users = [];
        $fileSize = filesize($csvFile); // Fix: Use correct file
        $totalProcessed = 0;
        $skippedRows = 0;

        echo "Starting import from akun_maba.csv...\n";

        while (($data = fgetcsv($csvMaba, 2000, ";")) !== FALSE) {
            $currentPos = ftell($csvMaba);
            
            if (!$firstline) {
                // Validate row has minimum required columns
                if (count($data) < 15) {
                    echo "Skipping invalid row " . ($totalProcessed + 1) . " with only " . count($data) . " columns\n";
                    $skippedRows++;
                    continue;
                }

                // Validate and clean data
                $name = trim($data[1] ?? '');
                $email = trim($data[3] ?? '');
                $password = trim($data[4] ?? '');
                $kelompok_id = trim($data[11] ?? '');
                $prodi_id = trim($data[14] ?? '');

                // Skip if essential fields are empty
                if (empty($name) || empty($email) || empty($password)) {
                    echo "Skipping row " . ($totalProcessed + 1) . " - missing essential data\n";
                    $skippedRows++;
                    continue;
                }

                // Convert empty strings to null for integer fields
                $kelompok_id = empty($kelompok_id) ? null : (int)$kelompok_id;
                $prodi_id = empty($prodi_id) ? null : (int)$prodi_id;

                $users[] = [
                    "name" => $name,
                    "email" => $email,
                    "password" => bcrypt($password),
                    "kelompok_id" => $kelompok_id,
                    "prodi_id" => $prodi_id,
                    "role_id" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ];
                $totalProcessed++;
            } else {
                $firstline = false;
            }

            // Batch insert every 500 records
            if (count($users) >= 500) {
                try {
                    DB::transaction(function () use ($users) {
                        User::insert($users);
                    });
                    echo "Inserted batch of " . count($users) . " users\n";
                } catch (\Exception $e) {
                    echo "Error inserting batch: " . $e->getMessage() . "\n";
                    // You might want to handle this differently
                }
                $users = [];
            }

            // Progress output every 100 records
            if ($totalProcessed % 100 == 0 && $totalProcessed > 0) {
                $progress = ($currentPos / $fileSize) * 100;
                echo "Progress: " . number_format($progress, 2) . "% - Processed: {$totalProcessed} rows\n";
            }
        }

        // Insert any remaining users
        if (!empty($users)) {
            try {
                DB::transaction(function () use ($users) {
                    User::insert($users);
                });
                echo "Inserted final batch of " . count($users) . " users\n";
            } catch (\Exception $e) {
                echo "Error inserting final batch: " . $e->getMessage() . "\n";
            }
        }

        fclose($csvMaba);

        // Calculate and display elapsed time
        $endTime = microtime(true);
        $elapsedTime = $endTime - $startTime;
        
        echo "\n=== Import Summary ===\n";
        echo "Total processed: {$totalProcessed} users\n";
        echo "Skipped rows: {$skippedRows}\n";
        echo "Import completed in " . number_format($elapsedTime, 2) . " seconds.\n";
    }
}