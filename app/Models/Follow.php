<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follow extends Model
{
   use HasFactory;

   protected $fillable = [
      'following_user_id', 'followed_user_id'
   ];

   protected $hidden = ['created_at', 'updated_at'];

   public function followingUser()
   {
      return $this->belongsTo(User::class, 'following_user_id');
   }

   public function followedUser()
   {
      return $this->belongsTo(User::class, 'followed_user_id');
   }
}