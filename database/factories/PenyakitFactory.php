<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Penyakit>
 */
class PenyakitFactory extends Factory
{
   /**
    * Define the model's default state.
    *
    * @return array<string, mixed>
    */
   public function definition(): array
   {
      return [
         'pita' => $this->faker->randomElement(['hijau', 'kuning', 'merah']),
         'ket_penyakit' => $this->faker->word,
      ];
   }
}
