<?php

namespace Database\Seeders;

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
   }
}