<?php

namespace Database\Seeders;

use App\Models\QuizAnswer;
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
            // Jawaban untuk pertanyaan 1
            ['teks_jawaban' => 'Paris', 'question_id' => 1, 'is_correct' => 1],
            ['teks_jawaban' => 'London', 'question_id' => 1, 'is_correct' => 0],
            ['teks_jawaban' => 'Rome', 'question_id' => 1, 'is_correct' => 0],
            ['teks_jawaban' => 'Berlin', 'question_id' => 1, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 2
            ['teks_jawaban' => 'William Shakespeare', 'question_id' => 2, 'is_correct' => 1],
            ['teks_jawaban' => 'Charles Dickens', 'question_id' => 2, 'is_correct' => 0],
            ['teks_jawaban' => 'Mark Twain', 'question_id' => 2, 'is_correct' => 0],
            ['teks_jawaban' => 'Jane Austen', 'question_id' => 2, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 3
            ['teks_jawaban' => 'H2O', 'question_id' => 3, 'is_correct' => 1],
            ['teks_jawaban' => 'H2O2', 'question_id' => 3, 'is_correct' => 0],
            ['teks_jawaban' => 'CO2', 'question_id' => 3, 'is_correct' => 0],
            ['teks_jawaban' => 'O2', 'question_id' => 3, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 4
            ['teks_jawaban' => 'Seven', 'question_id' => 4, 'is_correct' => 1],
            ['teks_jawaban' => 'Six', 'question_id' => 4, 'is_correct' => 0],
            ['teks_jawaban' => 'Eight', 'question_id' => 4, 'is_correct' => 0],
            ['teks_jawaban' => 'Five', 'question_id' => 4, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 5
            ['teks_jawaban' => '1912', 'question_id' => 5, 'is_correct' => 1],
            ['teks_jawaban' => '1905', 'question_id' => 5, 'is_correct' => 0],
            ['teks_jawaban' => '1915', 'question_id' => 5, 'is_correct' => 0],
            ['teks_jawaban' => '1920', 'question_id' => 5, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 6
            ['teks_jawaban' => 'Leonardo da Vinci', 'question_id' => 6, 'is_correct' => 1],
            ['teks_jawaban' => 'Vincent van Gogh', 'question_id' => 6, 'is_correct' => 0],
            ['teks_jawaban' => 'Pablo Picasso', 'question_id' => 6, 'is_correct' => 0],
            ['teks_jawaban' => 'Claude Monet', 'question_id' => 6, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 7
            ['teks_jawaban' => 'Mercury', 'question_id' => 7, 'is_correct' => 1],
            ['teks_jawaban' => 'Mars', 'question_id' => 7, 'is_correct' => 0],
            ['teks_jawaban' => 'Earth', 'question_id' => 7, 'is_correct' => 0],
            ['teks_jawaban' => 'Venus', 'question_id' => 7, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 8
            ['teks_jawaban' => 'Pacific', 'question_id' => 8, 'is_correct' => 1],
            ['teks_jawaban' => 'Atlantic', 'question_id' => 8, 'is_correct' => 0],
            ['teks_jawaban' => 'Indian', 'question_id' => 8, 'is_correct' => 0],
            ['teks_jawaban' => 'Arctic', 'question_id' => 8, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 9
            ['teks_jawaban' => 'George Washington', 'question_id' => 9, 'is_correct' => 1],
            ['teks_jawaban' => 'Thomas Jefferson', 'question_id' => 9, 'is_correct' => 0],
            ['teks_jawaban' => 'Abraham Lincoln', 'question_id' => 9, 'is_correct' => 0],
            ['teks_jawaban' => 'John Adams', 'question_id' => 9, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 10
            ['teks_jawaban' => 'Tokyo', 'question_id' => 10, 'is_correct' => 1],
            ['teks_jawaban' => 'Kyoto', 'question_id' => 10, 'is_correct' => 0],
            ['teks_jawaban' => 'Osaka', 'question_id' => 10, 'is_correct' => 0],
            ['teks_jawaban' => 'Nagoya', 'question_id' => 10, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 11
            ['teks_jawaban' => 'Au', 'question_id' => 11, 'is_correct' => 1],
            ['teks_jawaban' => 'Ag', 'question_id' => 11, 'is_correct' => 0],
            ['teks_jawaban' => 'Fe', 'question_id' => 11, 'is_correct' => 0],
            ['teks_jawaban' => 'Hg', 'question_id' => 11, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 12
            ['teks_jawaban' => 'Jane Austen', 'question_id' => 12, 'is_correct' => 1],
            ['teks_jawaban' => 'Emily Bronte', 'question_id' => 12, 'is_correct' => 0],
            ['teks_jawaban' => 'Charlotte Bronte', 'question_id' => 12, 'is_correct' => 0],
            ['teks_jawaban' => 'Mary Shelley', 'question_id' => 12, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 13
            ['teks_jawaban' => 'Sahara', 'question_id' => 13, 'is_correct' => 1],
            ['teks_jawaban' => 'Gobi', 'question_id' => 13, 'is_correct' => 0],
            ['teks_jawaban' => 'Kalahari', 'question_id' => 13, 'is_correct' => 0],
            ['teks_jawaban' => 'Arabian', 'question_id' => 13, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 14
            ['teks_jawaban' => '1945', 'question_id' => 14, 'is_correct' => 1],
            ['teks_jawaban' => '1939', 'question_id' => 14, 'is_correct' => 0],
            ['teks_jawaban' => '1941', 'question_id' => 14, 'is_correct' => 0],
            ['teks_jawaban' => '1943', 'question_id' => 14, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 15
            ['teks_jawaban' => 'Mount Everest', 'question_id' => 15, 'is_correct' => 1],
            ['teks_jawaban' => 'K2', 'question_id' => 15, 'is_correct' => 0],
            ['teks_jawaban' => 'Kangchenjunga', 'question_id' => 15, 'is_correct' => 0],
            ['teks_jawaban' => 'Lhotse', 'question_id' => 15, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 16
            ['teks_jawaban' => 'Alexander Fleming', 'question_id' => 16, 'is_correct' => 1],
            ['teks_jawaban' => 'Louis Pasteur', 'question_id' => 16, 'is_correct' => 0],
            ['teks_jawaban' => 'Robert Koch', 'question_id' => 16, 'is_correct' => 0],
            ['teks_jawaban' => 'Edward Jenner', 'question_id' => 16, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 17
            ['teks_jawaban' => 'Nile', 'question_id' => 17, 'is_correct' => 1],
            ['teks_jawaban' => 'Amazon', 'question_id' => 17, 'is_correct' => 0],
            ['teks_jawaban' => 'Yangtze', 'question_id' => 17, 'is_correct' => 0],
            ['teks_jawaban' => 'Mississippi', 'question_id' => 17, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 18
            ['teks_jawaban' => 'Charles Babbage', 'question_id' => 18, 'is_correct' => 1],
            ['teks_jawaban' => 'Alan Turing', 'question_id' => 18, 'is_correct' => 0],
            ['teks_jawaban' => 'John von Neumann', 'question_id' => 18, 'is_correct' => 0],
            ['teks_jawaban' => 'Blaise Pascal', 'question_id' => 18, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 19
            ['teks_jawaban' => 'Rome', 'question_id' => 19, 'is_correct' => 1],
            ['teks_jawaban' => 'Milan', 'question_id' => 19, 'is_correct' => 0],
            ['teks_jawaban' => 'Naples', 'question_id' => 19, 'is_correct' => 0],
            ['teks_jawaban' => 'Turin', 'question_id' => 19, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 20
            ['teks_jawaban' => '299,792 km/s', 'question_id' => 20, 'is_correct' => 1],
            ['teks_jawaban' => '150,000 km/s', 'question_id' => 20, 'is_correct' => 0],
            ['teks_jawaban' => '300,000 km/s', 'question_id' => 20, 'is_correct' => 0],
            ['teks_jawaban' => '250,000 km/s', 'question_id' => 20, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 21
            ['teks_jawaban' => 'George Orwell', 'question_id' => 21, 'is_correct' => 1],
            ['teks_jawaban' => 'Aldous Huxley', 'question_id' => 21, 'is_correct' => 0],
            ['teks_jawaban' => 'Ray Bradbury', 'question_id' => 21, 'is_correct' => 0],
            ['teks_jawaban' => 'Kurt Vonnegut', 'question_id' => 21, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 22
            ['teks_jawaban' => 'Ottawa', 'question_id' => 22, 'is_correct' => 1],
            ['teks_jawaban' => 'Toronto', 'question_id' => 22, 'is_correct' => 0],
            ['teks_jawaban' => 'Vancouver', 'question_id' => 22, 'is_correct' => 0],
            ['teks_jawaban' => 'Montreal', 'question_id' => 22, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 23
            ['teks_jawaban' => 'O2', 'question_id' => 23, 'is_correct' => 1],
            ['teks_jawaban' => 'O3', 'question_id' => 23, 'is_correct' => 0],
            ['teks_jawaban' => 'H2O', 'question_id' => 23, 'is_correct' => 0],
            ['teks_jawaban' => 'CO2', 'question_id' => 23, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 24
            ['teks_jawaban' => 'Neil Armstrong', 'question_id' => 24, 'is_correct' => 1],
            ['teks_jawaban' => 'Buzz Aldrin', 'question_id' => 24, 'is_correct' => 0],
            ['teks_jawaban' => 'Michael Collins', 'question_id' => 24, 'is_correct' => 0],
            ['teks_jawaban' => 'Yuri Gagarin', 'question_id' => 24, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 25
            ['teks_jawaban' => 'Canberra', 'question_id' => 25, 'is_correct' => 1],
            ['teks_jawaban' => 'Sydney', 'question_id' => 25, 'is_correct' => 0],
            ['teks_jawaban' => 'Melbourne', 'question_id' => 25, 'is_correct' => 0],
            ['teks_jawaban' => 'Brisbane', 'question_id' => 25, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 26
            ['teks_jawaban' => 'Vatican City', 'question_id' => 26, 'is_correct' => 1],
            ['teks_jawaban' => 'Monaco', 'question_id' => 26, 'is_correct' => 0],
            ['teks_jawaban' => 'San Marino', 'question_id' => 26, 'is_correct' => 0],
            ['teks_jawaban' => 'Liechtenstein', 'question_id' => 26, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 27
            ['teks_jawaban' => 'Harper Lee', 'question_id' => 27, 'is_correct' => 1],
            ['teks_jawaban' => 'Mark Twain', 'question_id' => 27, 'is_correct' => 0],
            ['teks_jawaban' => 'J.D. Salinger', 'question_id' => 27, 'is_correct' => 0],
            ['teks_jawaban' => 'F. Scott Fitzgerald', 'question_id' => 27, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 28
            ['teks_jawaban' => 'Beijing', 'question_id' => 28, 'is_correct' => 1],
            ['teks_jawaban' => 'Shanghai', 'question_id' => 28, 'is_correct' => 0],
            ['teks_jawaban' => 'Guangzhou', 'question_id' => 28, 'is_correct' => 0],
            ['teks_jawaban' => 'Shenzhen', 'question_id' => 28, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 29
            ['teks_jawaban' => 'Diamond', 'question_id' => 29, 'is_correct' => 1],
            ['teks_jawaban' => 'Gold', 'question_id' => 29, 'is_correct' => 0],
            ['teks_jawaban' => 'Iron', 'question_id' => 29, 'is_correct' => 0],
            ['teks_jawaban' => 'Silver', 'question_id' => 29, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 30
            ['teks_jawaban' => 'Marie Curie', 'question_id' => 30, 'is_correct' => 1],
            ['teks_jawaban' => 'Rosalind Franklin', 'question_id' => 30, 'is_correct' => 0],
            ['teks_jawaban' => 'Ada Lovelace', 'question_id' => 30, 'is_correct' => 0],
            ['teks_jawaban' => 'Lise Meitner', 'question_id' => 30, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 31
            ['teks_jawaban' => 'Berlin', 'question_id' => 31, 'is_correct' => 1],
            ['teks_jawaban' => 'Munich', 'question_id' => 31, 'is_correct' => 0],
            ['teks_jawaban' => 'Frankfurt', 'question_id' => 31, 'is_correct' => 0],
            ['teks_jawaban' => 'Hamburg', 'question_id' => 31, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 32
            ['teks_jawaban' => 'Homer', 'question_id' => 32, 'is_correct' => 1],
            ['teks_jawaban' => 'Virgil', 'question_id' => 32, 'is_correct' => 0],
            ['teks_jawaban' => 'Dante', 'question_id' => 32, 'is_correct' => 0],
            ['teks_jawaban' => 'Sophocles', 'question_id' => 32, 'is_correct' => 0],

            // Jawaban untuk pertanyaan 33
            ['teks_jawaban' => 'Jupiter', 'question_id' => 33, 'is_correct' => 1],
            ['teks_jawaban' => 'Saturn', 'question_id' => 33, 'is_correct' => 0],
            ['teks_jawaban' => 'Uranus', 'question_id' => 33, 'is_correct' => 0],
            ['teks_jawaban' => 'Neptune', 'question_id' => 33, 'is_correct' => 0],
        ];
        QuizAnswer::query()->insert($answers);
    }
}
