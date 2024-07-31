<?php

namespace Database\Seeders;

use App\Models\Quiz;
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
            // Gedung 1
            ['quiz_question' => 'What is the capital of France?', 'gedung_id' => 1],
            ['quiz_question' => 'What is the largest city in France?', 'gedung_id' => 1],
            ['quiz_question' => 'What is the official language of France?', 'gedung_id' => 1],
            ['quiz_question' => 'What is the currency of France?', 'gedung_id' => 1],
            ['quiz_question' => 'What is the population of France?', 'gedung_id' => 1],
            ['quiz_question' => 'What is the national anthem of France?', 'gedung_id' => 1],
            ['quiz_question' => 'Who was the first President of France?', 'gedung_id' => 1],
            ['quiz_question' => 'What is the highest mountain in France?', 'gedung_id' => 1],
            ['quiz_question' => 'What is the national animal of France?', 'gedung_id' => 1],
            ['quiz_question' => 'What is the national flower of France?', 'gedung_id' => 1],
            
            // Gedung 2
            ['quiz_question' => 'Who wrote Macbeth?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote Hamlet?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote Romeo and Juliet?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote Othello?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote Julius Caesar?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote King Lear?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote The Tempest?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote Much Ado About Nothing?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote A Midsummer Night\'s Dream?', 'gedung_id' => 2],
            ['quiz_question' => 'Who wrote The Merchant of Venice?', 'gedung_id' => 2],
        
            // Gedung 3
            ['quiz_question' => 'What is the chemical symbol for water?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for gold?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for silver?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for iron?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for oxygen?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for hydrogen?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for nitrogen?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for carbon?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for sodium?', 'gedung_id' => 3],
            ['quiz_question' => 'What is the chemical symbol for potassium?', 'gedung_id' => 3],
        
            // Gedung 4
            ['quiz_question' => 'How many continents are there on Earth?', 'gedung_id' => 4],
            ['quiz_question' => 'What is the largest continent?', 'gedung_id' => 4],
            ['quiz_question' => 'What is the smallest continent?', 'gedung_id' => 4],
            ['quiz_question' => 'What is the most populous continent?', 'gedung_id' => 4],
            ['quiz_question' => 'What is the least populous continent?', 'gedung_id' => 4],
            ['quiz_question' => 'Which continent has the most countries?', 'gedung_id' => 4],
            ['quiz_question' => 'Which continent is the coldest?', 'gedung_id' => 4],
            ['quiz_question' => 'Which continent is the hottest?', 'gedung_id' => 4],
            ['quiz_question' => 'Which continent is the wettest?', 'gedung_id' => 4],
            ['quiz_question' => 'Which continent is the driest?', 'gedung_id' => 4],
        
            // Gedung 5
            ['quiz_question' => 'What year did the Titanic sink?', 'gedung_id' => 5],
            ['quiz_question' => 'What year did World War I start?', 'gedung_id' => 5],
            ['quiz_question' => 'What year did World War II end?', 'gedung_id' => 5],
            ['quiz_question' => 'What year did the Berlin Wall fall?', 'gedung_id' => 5],
            ['quiz_question' => 'What year did man land on the moon?', 'gedung_id' => 5],
            ['quiz_question' => 'What year was the Declaration of Independence signed?', 'gedung_id' => 5],
            ['quiz_question' => 'What year was the first iPhone released?', 'gedung_id' => 5],
            ['quiz_question' => 'What year did the Soviet Union collapse?', 'gedung_id' => 5],
            ['quiz_question' => 'What year did Nelson Mandela become president?', 'gedung_id' => 5],
            ['quiz_question' => 'What year did the internet become publicly available?', 'gedung_id' => 5],
        
            // Gedung 6
            ['quiz_question' => 'Who painted the Mona Lisa?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted The Last Supper?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted The Starry Night?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted Girl with a Pearl Earring?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted The Persistence of Memory?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted The Scream?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted The Night Watch?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted The Birth of Venus?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted Guernica?', 'gedung_id' => 6],
            ['quiz_question' => 'Who painted The Kiss?', 'gedung_id' => 6],
        
            // Gedung 7
            ['quiz_question' => 'What is the smallest planet in our solar system?', 'gedung_id' => 7],
            ['quiz_question' => 'What is the largest planet in our solar system?', 'gedung_id' => 7],
            ['quiz_question' => 'What is the closest planet to the sun?', 'gedung_id' => 7],
            ['quiz_question' => 'What is the farthest planet from the sun?', 'gedung_id' => 7],
            ['quiz_question' => 'What planet is known as the Red Planet?', 'gedung_id' => 7],
            ['quiz_question' => 'What planet is known as the Blue Planet?', 'gedung_id' => 7],
            ['quiz_question' => 'What planet has the most moons?', 'gedung_id' => 7],
            ['quiz_question' => 'What planet has rings around it?', 'gedung_id' => 7],
            ['quiz_question' => 'What planet is known for its Great Red Spot?', 'gedung_id' => 7],
            ['quiz_question' => 'What planet is closest in size to Earth?', 'gedung_id' => 7],
        
            // Gedung 8
            ['quiz_question' => 'What is the largest ocean on Earth?', 'gedung_id' => 8],
            ['quiz_question' => 'What is the smallest ocean on Earth?', 'gedung_id' => 8],
            ['quiz_question' => 'What ocean is known as the Southern Ocean?', 'gedung_id' => 8],
            ['quiz_question' => 'What ocean is located between Africa and Australia?', 'gedung_id' => 8],
            ['quiz_question' => 'What ocean is located between North America and Europe?', 'gedung_id' => 8],
            ['quiz_question' => 'What ocean is located between Asia and Australia?', 'gedung_id' => 8],
            ['quiz_question' => 'What ocean is known for the Mariana Trench?', 'gedung_id' => 8],
            ['quiz_question' => 'What ocean is the Arctic Ocean connected to?', 'gedung_id' => 8],
            ['quiz_question' => 'What ocean has the Great Barrier Reef?', 'gedung_id' => 8],
            ['quiz_question' => 'What ocean is the coldest?', 'gedung_id' => 8],
        
            // Gedung 9
            ['quiz_question' => 'Who was the first President of the United States?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the 16th President of the United States?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the 44th President of the United States?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the first President to live in the White House?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the first President to be impeached?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the youngest President to be elected?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the oldest President to be elected?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the first President to be assassinated?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the only President to resign?', 'gedung_id' => 9],
            ['quiz_question' => 'Who was the President during the Civil War?', 'gedung_id' => 9],
        
            // Gedung 10
            ['quiz_question' => 'What is the capital of Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'What is the largest city in Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'What is the official language of Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'What is the currency of Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'What is the population of Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'What is the national anthem of Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'Who is the current Emperor of Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'What is the highest mountain in Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'What is the national animal of Japan?', 'gedung_id' => 10],
            ['quiz_question' => 'What is the national flower of Japan?', 'gedung_id' => 10],
        
            // Gedung 11
            ['quiz_question' => 'What is the chemical symbol for gold?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for silver?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for iron?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for oxygen?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for hydrogen?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for nitrogen?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for carbon?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for sodium?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for potassium?', 'gedung_id' => 11],
            ['quiz_question' => 'What is the chemical symbol for chlorine?', 'gedung_id' => 11],
        
            // Gedung 12
            ['quiz_question' => 'Who wrote "Pride and Prejudice"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "Sense and Sensibility"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "Emma"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "Mansfield Park"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "Northanger Abbey"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "Persuasion"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "Lady Susan"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "Sanditon"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "The Watsons"?', 'gedung_id' => 12],
            ['quiz_question' => 'Who wrote "Love and Freindship"?', 'gedung_id' => 12],
        
            // Gedung 13
            ['quiz_question' => 'What is the largest desert in the world?', 'gedung_id' => 13],
            ['quiz_question' => 'What is the smallest desert in the world?', 'gedung_id' => 13],
            ['quiz_question' => 'What is the hottest desert in the world?', 'gedung_id' => 13],
            ['quiz_question' => 'What is the coldest desert in the world?', 'gedung_id' => 13],
            ['quiz_question' => 'What is the driest desert in the world?', 'gedung_id' => 13],
            ['quiz_question' => 'What is the wettest desert in the world?', 'gedung_id' => 13],
            ['quiz_question' => 'What desert is known as the "Great Sandy Desert"?', 'gedung_id' => 13],
            ['quiz_question' => 'What desert is located in Africa?', 'gedung_id' => 13],
            ['quiz_question' => 'What desert is located in Asia?', 'gedung_id' => 13],
            ['quiz_question' => 'What desert is located in North America?', 'gedung_id' => 13],
        
            // Gedung 14
            ['quiz_question' => 'What year did World War II end?', 'gedung_id' => 14],
            ['quiz_question' => 'What year did World War I start?', 'gedung_id' => 14],
            ['quiz_question' => 'What year did the Berlin Wall fall?', 'gedung_id' => 14],
            ['quiz_question' => 'What year did man land on the moon?', 'gedung_id' => 14],
            ['quiz_question' => 'What year was the Declaration of Independence signed?', 'gedung_id' => 14],
            ['quiz_question' => 'What year was the first iPhone released?', 'gedung_id' => 14],
            ['quiz_question' => 'What year did the Soviet Union collapse?', 'gedung_id' => 14],
            ['quiz_question' => 'What year did Nelson Mandela become president?', 'gedung_id' => 14],
            ['quiz_question' => 'What year did the internet become publicly available?', 'gedung_id' => 14],
            ['quiz_question' => 'What year did the Titanic sink?', 'gedung_id' => 14],
        
            // Gedung 15
            ['quiz_question' => 'What is the tallest mountain in the world?', 'gedung_id' => 15],
            ['quiz_question' => 'What is the second tallest mountain in the world?', 'gedung_id' => 15],
            ['quiz_question' => 'What is the tallest mountain in North America?', 'gedung_id' => 15],
            ['quiz_question' => 'What is the tallest mountain in South America?', 'gedung_id' => 15],
            ['quiz_question' => 'What is the tallest mountain in Europe?', 'gedung_id' => 15],
            ['quiz_question' => 'What is the tallest mountain in Africa?', 'gedung_id' => 15],
            ['quiz_question' => 'What is the tallest mountain in Australia?', 'gedung_id' => 15],
            ['quiz_question' => 'What is the tallest mountain in Antarctica?', 'gedung_id' => 15],
            ['quiz_question' => 'What is the tallest mountain under the ocean?', 'gedung_id' => 15],
            ['quiz_question' => 'What mountain range is Mount Everest in?', 'gedung_id' => 15],
        
            // Gedung 16
            ['quiz_question' => 'Who discovered penicillin?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered gravity?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered electricity?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered the structure of DNA?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered the electron?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered radioactivity?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered the neutron?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered the proton?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered the cell?', 'gedung_id' => 16],
            ['quiz_question' => 'Who discovered oxygen?', 'gedung_id' => 16],
        
            // Gedung 17
            ['quiz_question' => 'What is the longest river in the world?', 'gedung_id' => 17],
            ['quiz_question' => 'What is the second longest river in the world?', 'gedung_id' => 17],
            ['quiz_question' => 'What is the longest river in North America?', 'gedung_id' => 17],
            ['quiz_question' => 'What is the longest river in South America?', 'gedung_id' => 17],
            ['quiz_question' => 'What is the longest river in Europe?', 'gedung_id' => 17],
            ['quiz_question' => 'What is the longest river in Africa?', 'gedung_id' => 17],
            ['quiz_question' => 'What is the longest river in Asia?', 'gedung_id' => 17],
            ['quiz_question' => 'What is the longest river in Australia?', 'gedung_id' => 17],
            ['quiz_question' => 'What is the longest river in Antarctica?', 'gedung_id' => 17],
            ['quiz_question' => 'What river is known as the "Father of Waters"?', 'gedung_id' => 17],
        
            // Gedung 18
            ['quiz_question' => 'Who is known as the Father of Computers?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Physics?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Chemistry?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Medicine?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Biology?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Mathematics?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Astronomy?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Genetics?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Geology?', 'gedung_id' => 18],
            ['quiz_question' => 'Who is known as the Father of Economics?', 'gedung_id' => 18],
        
            // Gedung 19
            ['quiz_question' => 'What is the capital of Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'What is the largest city in Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'What is the official language of Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'What is the currency of Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'What is the population of Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'What is the national anthem of Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'Who is the current President of Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'What is the highest mountain in Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'What is the national animal of Italy?', 'gedung_id' => 19],
            ['quiz_question' => 'What is the national flower of Italy?', 'gedung_id' => 19],
        
            // Gedung 20
            ['quiz_question' => 'What is the speed of light?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of sound?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of a cheetah?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of an airplane?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of a bullet?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of a train?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of a car?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of a ship?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of a bicycle?', 'gedung_id' => 20],
            ['quiz_question' => 'What is the speed of a snail?', 'gedung_id' => 20],
        
            // Gedung 21
            ['quiz_question' => 'Who wrote "1984"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "Animal Farm"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "Brave New World"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "Fahrenheit 451"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "The Catcher in the Rye"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "To Kill a Mockingbird"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "The Great Gatsby"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "Moby Dick"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "Pride and Prejudice"?', 'gedung_id' => 21],
            ['quiz_question' => 'Who wrote "Jane Eyre"?', 'gedung_id' => 21],
        
            // Gedung 22
            ['quiz_question' => 'What is the capital of Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'What is the largest city in Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'What is the official language of Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'What is the currency of Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'What is the population of Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'What is the national anthem of Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'Who is the current Prime Minister of Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'What is the highest mountain in Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'What is the national animal of Canada?', 'gedung_id' => 22],
            ['quiz_question' => 'What is the national flower of Canada?', 'gedung_id' => 22],
        
            // Gedung 23
            ['quiz_question' => 'What is the chemical symbol for oxygen?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for hydrogen?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for nitrogen?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for carbon?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for sodium?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for potassium?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for chlorine?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for calcium?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for magnesium?', 'gedung_id' => 23],
            ['quiz_question' => 'What is the chemical symbol for sulfur?', 'gedung_id' => 23],
        
            // Gedung 24
            ['quiz_question' => 'Who was the first man to walk on the moon?', 'gedung_id' => 24],
            ['quiz_question' => 'Who was the second man to walk on the moon?', 'gedung_id' => 24],
            ['quiz_question' => 'What year did the moon landing occur?', 'gedung_id' => 24],
            ['quiz_question' => 'What was the name of the mission that landed the first man on the moon?', 'gedung_id' => 24],
            ['quiz_question' => 'What was the name of the lunar module that landed on the moon?', 'gedung_id' => 24],
            ['quiz_question' => 'Who was the commander of the Apollo 11 mission?', 'gedung_id' => 24],
            ['quiz_question' => 'Who was the lunar module pilot of the Apollo 11 mission?', 'gedung_id' => 24],
            ['quiz_question' => 'Who was the command module pilot of the Apollo 11 mission?', 'gedung_id' => 24],
            ['quiz_question' => 'What was the name of the command module of the Apollo 11 mission?', 'gedung_id' => 24],
            ['quiz_question' => 'What was the name of the rocket that launched the Apollo 11 mission?', 'gedung_id' => 24],
        
            // Gedung 25
            ['quiz_question' => 'What is the capital of Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'What is the largest city in Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'What is the official language of Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'What is the currency of Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'What is the population of Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'What is the national anthem of Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'Who is the current Prime Minister of Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'What is the highest mountain in Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'What is the national animal of Australia?', 'gedung_id' => 25],
            ['quiz_question' => 'What is the national flower of Australia?', 'gedung_id' => 25],
        
            // Gedung 26
            ['quiz_question' => 'What is the smallest country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the largest country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the most populous country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the least populous country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the richest country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the poorest country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the most visited country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the least visited country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the oldest country in the world?', 'gedung_id' => 26],
            ['quiz_question' => 'What is the newest country in the world?', 'gedung_id' => 26],
        
            // Gedung 27
            ['quiz_question' => 'Who wrote "To Kill a Mockingbird"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "Go Set a Watchman"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "The Catcher in the Rye"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "Nine Stories"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "Franny and Zooey"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "Raise High the Roof Beam, Carpenters and Seymour: An Introduction"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "The Great Gatsby"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "This Side of Paradise"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "The Beautiful and Damned"?', 'gedung_id' => 27],
            ['quiz_question' => 'Who wrote "Tender Is the Night"?', 'gedung_id' => 27],
        
            // Gedung 28
            ['quiz_question' => 'What is the capital of China?', 'gedung_id' => 28],
            ['quiz_question' => 'What is the largest city in China?', 'gedung_id' => 28],
            ['quiz_question' => 'What is the official language of China?', 'gedung_id' => 28],
            ['quiz_question' => 'What is the currency of China?', 'gedung_id' => 28],
            ['quiz_question' => 'What is the population of China?', 'gedung_id' => 28],
            ['quiz_question' => 'What is the national anthem of China?', 'gedung_id' => 28],
            ['quiz_question' => 'Who is the current President of China?', 'gedung_id' => 28],
            ['quiz_question' => 'What is the highest mountain in China?', 'gedung_id' => 28],
            ['quiz_question' => 'What is the national animal of China?', 'gedung_id' => 28],
            ['quiz_question' => 'What is the national flower of China?', 'gedung_id' => 28],
        
            // Gedung 29
            ['quiz_question' => 'What is the hardest natural substance on Earth?', 'gedung_id' => 29],
            ['quiz_question' => 'What is the softest natural substance on Earth?', 'gedung_id' => 29],
            ['quiz_question' => 'What is the most abundant element on Earth?', 'gedung_id' => 29],
            ['quiz_question' => 'What is the rarest element on Earth?', 'gedung_id' => 29],
            ['quiz_question' => 'What is the heaviest element on Earth?', 'gedung_id' => 29],
            ['quiz_question' => 'What is the lightest element on Earth?', 'gedung_id' => 29],
            ['quiz_question' => 'What is the most reactive element on Earth?', 'gedung_id' => 29],
            ['quiz_question' => 'What is the least reactive element on Earth?', 'gedung_id' => 29],
            ['quiz_question' => 'What element has the highest melting point?', 'gedung_id' => 29],
            ['quiz_question' => 'What element has the lowest melting point?', 'gedung_id' => 29],
        
            // Gedung 30
            ['quiz_question' => 'Who was the first woman to win a Nobel Prize?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to fly solo across the Atlantic Ocean?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to climb Mount Everest?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to run a marathon?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to go to space?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to become a doctor?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to become a lawyer?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to win an Olympic gold medal?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to be elected to the U.S. Congress?', 'gedung_id' => 30],
            ['quiz_question' => 'Who was the first woman to be elected Prime Minister?', 'gedung_id' => 30],
        
            // Gedung 31
            ['quiz_question' => 'What is the capital of Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'What is the largest city in Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'What is the official language of Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'What is the currency of Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'What is the population of Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'What is the national anthem of Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'Who is the current Chancellor of Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'What is the highest mountain in Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'What is the national animal of Germany?', 'gedung_id' => 31],
            ['quiz_question' => 'What is the national flower of Germany?', 'gedung_id' => 31],
        
            // Gedung 32
            ['quiz_question' => 'Who wrote "The Odyssey"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "The Iliad"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "The Aeneid"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "The Divine Comedy"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "The Canterbury Tales"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "Paradise Lost"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "Beowulf"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "The Faerie Queene"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "The Epic of Gilgamesh"?', 'gedung_id' => 32],
            ['quiz_question' => 'Who wrote "The Song of Roland"?', 'gedung_id' => 32],
        
            // Gedung 33
            ['quiz_question' => 'What is the largest planet in our solar system?', 'gedung_id' => 33],
            ['quiz_question' => 'What is the smallest planet in our solar system?', 'gedung_id' => 33],
            ['quiz_question' => 'What is the closest planet to the sun?', 'gedung_id' => 33],
            ['quiz_question' => 'What is the farthest planet from the sun?', 'gedung_id' => 33],
            ['quiz_question' => 'What planet is known as the Red Planet?', 'gedung_id' => 33],
            ['quiz_question' => 'What planet is known as the Blue Planet?', 'gedung_id' => 33],
            ['quiz_question' => 'What planet has the most moons?', 'gedung_id' => 33],
            ['quiz_question' => 'What planet has rings around it?', 'gedung_id' => 33],
            ['quiz_question' => 'What planet is known for its Great Red Spot?', 'gedung_id' => 33],
            ['quiz_question' => 'What planet is closest in size to Earth?', 'gedung_id' => 33],
        ];

        // Insert data into the 'quiz' table
        Quiz::query()->insert($Question);
    }
}
