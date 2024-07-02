<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'email', 'password', 'role', 'photo_profile_url', 'linkedin_url', 'instagram_url', 'pilar', 'view_count'
    ];

    public function followers()
    {
        return $this->hasMany(Follow::class, 'followed_user_id');
    }

    public function followings()
    {
        return $this->hasMany(Follow::class, 'following_user_id');
    }
}

