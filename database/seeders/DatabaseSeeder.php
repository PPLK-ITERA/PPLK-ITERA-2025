<?php

namespace Database\Seeders;

use App\Models\KartuTugas;
use App\Models\Kelompok;
use App\Models\PengumpulanTugas;
use App\Models\Penyakit;
use App\Models\pilar;
use App\Models\User;
use App\Models\Role;
use App\Models\Tugas;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
   public function run()
   {
      $this->call([
         RoleSeeder::class,
            // KelompokSeeder::class,
         ScoreboardSeeder::class,
            // UserSeeder::class,
         PresensiPplkSeeder::class,
         QuizSeeder::class,
         QuizAnswerSeeder::class,
         GedungSeeder::class,
         UnlockStatusSeeder::class,
         ProdiSeeder::class,
         FAQSeeder::class,
         BookletSeeder::class,
            // TugasSeeder::class,
         AssesmenQuestionSeeder::class,
         AssesmenAnswerSeeder::class,
         PilarSeeder::class,
         // Add more seeders if needed
      ]);

      foreach (range(1, 3) as $kelompok) {
         // Create users and save them to get their IDs
         $daplokUser = User::factory()->create([
            'role_id' => 2, // Assuming role_id 2 is for daplok
            'kelompok_id' => $kelompok
         ]);

         $mentorUser = User::factory()->create([
            'role_id' => 4, // Assuming role_id 4 is for mentor
            'kelompok_id' => $kelompok
         ]);

         // Now create Kelompok using the IDs from the created users
         Kelompok::create([
            'no_kelompok' => $kelompok,
            'nama_kelompok' => 'Kelompok ' . ($kelompok),
            'logo_kelompok' => 'https://picsum.photos/200',
            'daplok_id' => $daplokUser->id,
            'mentor_id' => $mentorUser->id
         ]);
         foreach (range(1, 3) as $user) {
            User::factory()->create([
               'role_id' => 1,
               'kelompok_id' => $kelompok
            ]);
         }
         foreach (range(1, 6) as $hari) {
            $kartuTugas = KartuTugas::create([
               'hari' => $hari,
               'tanggal' => Carbon::now(),
               'kelompok_id' => $kelompok, // Setting to kelompok_id 2
               'poster_url' => null,
               'is_selesai' => false,
            ]);

            // Buat satu Tugas untuk setiap KartuTugas
            $tugas = Tugas::create([
               'kartu_id' => $kartuTugas->id,
               'judul' => 'Sample Task ' . $hari,
               'deskripsi' => 'Complete the task for day ' . $hari,
               'pengumpulan' => 'sosmed',
               'kategori' => 'individu',
               'deadline' => Carbon::now()->addDays(7),
            ]);
         }
      }
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
      $this->call([
         QrcodeSeeder::class,
         PenyakitSeeder::class,
      ]);
   }
}