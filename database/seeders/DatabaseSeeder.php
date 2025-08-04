<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
   public function run()
   {
      $this->call([
         RoleSeeder::class,
         BookletSeeder::class,
         KelompokSeeder::class,
         UserSeeder::class,
         QrcodeSeeder::class,
         ProdiSeeder::class,
         PenyakitSeeder::class,
         // PilarSeeder::class,
         FAQSeeder::class,
         ScoreboardSeeder::class,
         // PresensiPplkSeeder::class,
         QuizSeeder::class,
         QuizAnswerSeeder::class,
         GedungSeeder::class,
         UnlockStatusSeeder::class,
         TugasSeeder::class,
         AssesmenQuestionSeeder::class,
         AssesmenAnswerSeeder::class,
         // PengumpulanTugasSeeder::class,
         // Add more seeders if needed
      ]);
   }
}