<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kelompok;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class KelompokSeeder extends Seeder
{
    protected $kelompokCount = 0;

    public function run()
    {
        // Import mentors and daplok users
        $users = $this->importUsers([
            'mentor' => base_path("database/csv/AkunMentor.csv"),
            'daplok' => base_path("database/csv/AkunDaplok.csv"),
        ]);

        // Optionally, you can handle any additional logic with $users here
    }

    private function importUsers($paths)
    {
        $users = [];
        foreach ($paths as $role => $path) {
            $csvFile = fopen($path, "r");
            $firstline = true;
            $roleId = ($role == 'mentor' ? 4 : 2);

            while (($data = fgetcsv($csvFile, 2000, ";")) !== FALSE) {
                if (!$firstline) {
                    $userId = DB::table('users')->insertGetId([
                        "name" => $data[1],
                        "email" => $data[3],
                        "password" => bcrypt($data[4]),
                        "prodi_id" => $data[14],
                        "role_id" => $roleId,
                    ]);

                    $kelompokId = $this->createOrUpdateKelompok($data, $userId, $role);
                    $users[] = [
                        "id" => $userId,
                        "kelompok_id" => $kelompokId,
                        "name" => $data[1],
                        "email" => $data[3],
                        "password" => bcrypt($data[4]),
                    ];
                } else {
                    $firstline = false;
                }
            }

            fclose($csvFile);
        }

        if (!empty($users)) {
            User::upsert($users, ['id'], ['kelompok_id', 'name', 'email', 'password']);
        }

        return $users;
    }

    private function createOrUpdateKelompok($data, $userId, $role)
    {
        $kelompok = Kelompok::firstOrCreate(
            ['no_kelompok' => $data[11]],
            ['nama_kelompok' => 'Kelompok ' . ++$this->kelompokCount]
        );

        if ($role == 'mentor') {
            $kelompok->mentor_id = $userId;
        } elseif ($role == 'daplok') {
            $kelompok->daplok_id = $userId;
        }

        $kelompok->save();
        return $kelompok->id;
    }
}
