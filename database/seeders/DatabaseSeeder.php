<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
   public function run()
   {
      $this->call([
         AdminSeeder::class,
         RoleSeeder::class,
         BookletSeeder::class,
         KelompokSeeder::class,
         UserSeeder::class,
         QrcodeSeeder::class,
         ProdiSeeder::class,
         PenyakitSeeder::class,
         FAQSeeder::class,
         ScoreboardSeeder::class,
         QuizSeeder::class,
         QuizAnswerSeeder::class,
         GedungSeeder::class,
         UnlockStatusSeeder::class,
         TugasSeeder::class,
         AssesmenQuestionSeeder::class,
         AssesmenAnswerSeeder::class,
         TeslaSeeder::class,

         // PengumpulanTugasSeeder::class,
         // Add more seeders if needed
      ]);
   }
}
