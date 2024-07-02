<?php

namespace Database\Factories;

use App\Models\FAQ;
use Illuminate\Database\Eloquent\Factories\Factory;

class FAQFactory extends Factory
{
    protected $model = FAQ::class;

    public function definition()
    {
        return [
            'teks_pertanyaan' => $this->faker->sentence,
            'teks_jawaban' => $this->faker->paragraph,
        ];
    }
}
