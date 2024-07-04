<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Follow;
use App\Models\User;

class FollowSeeder extends Seeder
{
    public function run()
    {
        // Create some users first
        $users = User::factory()->count(50)->create();

        // Create follows
        foreach ($users as $user) {
            // Give each user a random number of followers
            $numberOfFollowers = rand(0, 20);

            for ($i = 0; $i < $numberOfFollowers; $i++) {
                Follow::factory()->create([
                    'following_user_id' => $users->random()->id,
                    'followed_user_id' => $user->id,
                ]);
            }
        }
    }
}

