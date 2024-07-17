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
         'name' => $this->faker->name,
         'nim' => $this->faker->unique()->numerify('########'),
         'email' => $this->faker->unique()->safeEmail,
         'password' => bcrypt('password'),
         'role_id' => $this->faker->numberBetween(1, 4),
         'photo_profile_url' => $this->faker->imageUrl(),
         'linkedin_url' => $this->faker->url(),
         'instagram_url' => $this->faker->url(),
         'pilar' => $this->faker->numberBetween(1, 4),
         'penyakit_id' => $this->faker->numberBetween(1, 4),
         'created_at' => now(),
         'updated_at' => now(),
      ];
   }
}
