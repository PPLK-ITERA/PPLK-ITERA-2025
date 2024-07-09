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
            ['quiz_question' => 'What is the capital of France?'],
            ['quiz_question' => 'Who wrote Macbeth?'],
            ['quiz_question' => 'What is the chemical symbol for water?'],
            ['quiz_question' => 'How many continents are there on Earth?'],
            ['quiz_question' => 'What year did the Titanic sink?'],
            ['quiz_question' => 'Who invented Gravity?'],
            ['quiz_question' => 'Do people change ?'],
            ['quiz_question' => 'Where to locate burger ?'],
            ['quiz_question' => 'Some people are crazy ?'],
            ['quiz_question' => 'Blagoba scared you or not ?'],
        ];

        // Insert data into the 'quiz' table
        quiz::query()->insert($Question);
    }
}
