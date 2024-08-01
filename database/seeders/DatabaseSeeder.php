<?php

namespace Database\Seeders;

use App\Models\KartuTugas;
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
         KelompokSeeder::class,
         ScoreboardSeeder::class,
         UserSeeder::class,
         PresensiPplkSeeder::class,
         QuizSeeder::class,
         QuizAnswerSeeder::class,
         GedungSeeder::class,
         UnlockStatusSeeder::class,
         QrcodeSeeder::class,
         ProdiSeeder::class,
         FAQSeeder::class,
         BookletSeeder::class,
         PenyakitSeeder::class,
         TugasSeeder::class,
         AssesmenQuestionSeeder::class,
         AssesmenAnswerSeeder::class,
         PilarSeeder::class,
         // Add more seeders if needed
      ]);

      foreach (range(1, 6) as $hari) {
         $kartuTugas = KartuTugas::create([
            'hari' => $hari,
            'tanggal' => Carbon::now(),
            'kelompok_id' => 2, // Setting to kelompok_id 2
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

         // Buat PengumpulanTugas untuk setiap user dan tugas
         foreach (range(27, 32) as $userId) {
            PengumpulanTugas::create([
               'user_id' => $userId,
               'tugas_id' => $tugas->id,
               'jawaban' => 'Here is my task submission for day ' . $hari,
               'isReturn' => false,
               'tanggal_submit' => Carbon::now(),
            ]);
         }
      }
   }


}