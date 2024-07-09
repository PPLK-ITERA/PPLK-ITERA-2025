<?php

namespace Database\Seeders;

use App\Models\quiz_answer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuizAnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $answers = [
            ['teks_jawaban' => 'Paris', 'question_id' => 1, 'nilai_jawaban' => 1],
            ['teks_jawaban' => 'London', 'question_id' => 1, 'nilai_jawaban' => 0],
            ['teks_jawaban' => 'William Shakespeare', 'question_id' => 2, 'nilai_jawaban' => 1],
            ['teks_jawaban' => 'Charles Dickens', 'question_id' => 2, 'nilai_jawaban' => 0],
            ['teks_jawaban' => 'H2O', 'question_id' => 3, 'nilai_jawaban' => 1],
            ['teks_jawaban' => 'H2O2', 'question_id' => 3, 'nilai_jawaban' => 0],
            ['teks_jawaban' => 'Seven', 'question_id' => 4, 'nilai_jawaban' => 1],
            ['teks_jawaban' => 'Six', 'question_id' => 4, 'nilai_jawaban' => 0],
            ['teks_jawaban' => '1912', 'question_id' => 5, 'nilai_jawaban' => 1],
            ['teks_jawaban' => '1905', 'question_id' => 5, 'nilai_jawaban' => 0],
        ];
        quiz_answer::query()->insert($answers);
    }
}
