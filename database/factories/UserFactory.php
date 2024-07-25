<?php

namespace Database\Factories;

use App\Models\Penyakit;
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
         'nim' => $this->faker->unique()->numerify('124##0###'),
         'email' => $this->faker->unique()->safeEmail,
         'password' => bcrypt('password'),
         'prodi_id' => $this->faker->numberBetween(1,41),
         'role_id' => 1,
         'photo_profile_url' => $this->faker->imageUrl(),
         'linkedin_url' => $this->faker->url(),
         'instagram_url' => $this->faker->url(),
         'pilar' => $this->faker->numberBetween(1, 4),
         'penyakit_id' => Penyakit::factory()->create()->id,
         'created_at' => now(),
         'updated_at' => now(),
      ];
   }
}
