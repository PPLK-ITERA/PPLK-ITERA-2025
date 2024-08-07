<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kelompok;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Output\ConsoleOutput;

class KelompokSeeder extends Seeder
{
   protected $kelompokCount = 0;

   public function run()
   {
      // Import mentors and daplok users
      $mentorIds = $this->importUsers(base_path("database/csv/akunMentor.csv"), 4);
      $daplokIds = $this->importUsers(base_path("database/csv/akunDaplok.csv"), 2);

      // Optionally, you can handle any additional logic with $mentorIds and $daplokIds here
   }

   private function importUsers($filePath, $roleId)
   {
      $csvFile = fopen($filePath, "r");
      $firstline = true;
      $users = [];
      $fileSize = filesize($filePath);
      $totalProcessed = 0;
      $userIds = [];

      while (($data = fgetcsv($csvFile, 2000, ";")) !== FALSE) {
         if (!$firstline) {
            $userId = DB::table('users')->insertGetId([
               "name" => $data[1],
               "email" => $data[3],
               "password" => bcrypt($data[4]),
               "prodi_id" => $data[14],
               "role_id" => $roleId,
            ]);

            $userIds[] = $userId;
            $kelompokId = $this->createOrUpdateKelompok($data, $userId, $roleId);
            $users[] = [
               "id" => $userId,
               "kelompok_id" => $kelompokId,
            ];
            $totalProcessed++;
         } else {
            $firstline = false;
         }

         if (count($users) >= 500) {
            User::upsert($users, ['id'], ['kelompok_id']);
            $users = [];
         }
      }

      if (!empty($users)) {
         User::upsert($users, ['id'], ['kelompok_id']);
      }

      fclose($csvFile);
      return $userIds;
   }

   private function createOrUpdateKelompok($data, $userId, $roleId)
   {
      $kelompok = Kelompok::updateOrCreate(
         ['no_kelompok' => $data[11]],
         [
            'nama_kelompok' => 'Kelompok ' . ++$this->kelompokCount,
            'logo_kelompok' => $data[13] ?? null,
            'daplok_id' => $roleId == 2 ? $userId : null,
            'mentor_id' => $roleId == 4 ? $userId : null,
         ]
      );
      return $kelompok->id;
   }
}
