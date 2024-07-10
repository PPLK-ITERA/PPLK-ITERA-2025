<?php

namespace Database\Seeders;

use App\Models\quiz;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Question = [
            ['quiz_question' => 'What is the capital of France?','gedung_id'=>1],
            ['quiz_question' => 'Who wrote Macbeth?','gedung_id'=>1],
            ['quiz_question' => 'What is the chemical symbol for water?','gedung_id'=>3],
            ['quiz_question' => 'How many continents are there on Earth?','gedung_id'=>4],
            ['quiz_question' => 'What year did the Titanic sink?','gedung_id'=>5],
            ['quiz_question' => 'Who invented Gravity?','gedung_id'=>6],
            ['quiz_question' => 'Do people change ?','gedung_id'=>7],
            ['quiz_question' => 'Where to locate burger ?','gedung_id'=>8],
            ['quiz_question' => 'Some people are crazy ?','gedung_id'=>9],
            ['quiz_question' => 'Blagoba scared you or not ?','gedung_id'=>10],
        ];

        // Insert data into the 'quiz' table
        quiz::query()->insert($Question);
    }
}
