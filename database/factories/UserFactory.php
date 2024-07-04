<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // password
            'role' => 'maba', // or other roles if needed
            'photo_profile_url' => $this->faker->imageUrl(),
            'linkedin_url' => $this->faker->url(),
            'instagram_url' => $this->faker->url(),
            'pilar' => $this->faker->word,
            'name' => $this->faker->name,
            'nim' => $this->faker->unique()->numerify('##########'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}

