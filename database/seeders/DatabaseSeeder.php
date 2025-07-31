<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
   public function run()
   {
      $this->call([
         UserSeeder::class,
         AdminSeeder::class,
         RoleSeeder::class,
         KelompokSeeder::class,
         ScoreboardSeeder::class,
        //  PresensiPplkSeeder::class,
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
         TeslaSeeder::class,
         // PengumpulanTugasSeeder::class,
         // Add more seeders if needed
      ]);
   }
}
