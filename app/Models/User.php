<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
   use HasFactory, Notifiable;

   protected $table = 'users';
   protected $primaryKey = 'id';
   /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
   protected $fillable = [
      'name',
      'email',
      'password',
      'photo_profile_url',
      'linkedin_url',
      'instagram_url',
      'kelompok_id',
      'pilar',
      'qrcode_id',
      'prodi_id',
      'score',
      'role',
   ];
   /**
    * The attributes that should be hidden for serialization.
    *
    * @var array<int, string>
    */
   protected $hidden = [
      'password',
      'remember_token',
      'pilar',
      'created_at',
      'updated_at',
   ];
   /**
    * Get the attributes that should be cast.
    *
    * @return array<string, string>
    */
   protected function casts(): array
   {
      return [
         'email_verified_at' => 'datetime',
         'password' => 'hashed',
         'isFirstTime' => 'boolean',
      ];
   }


   public function followers()
   {
      return $this->hasMany(Follow::class, 'followed_user_id');
   }

   public function followings()
   {
      return $this->hasMany(Follow::class, 'following_user_id');
   }

   public function kelompok()
   {
      return $this->belongsTo(Kelompok::class, 'kelompok_id');
   }

   public function role()
   {
      return $this->belongsTo(Role::class, 'role_id');
   }

   public function pilar()
   {
      return $this->hasOne(pilar::class, 'pilar', 'id');
   }
   public function QuizActivity()
   {
      return $this->hasOne(QuizActivity::class, 'user_id', 'id');
   }
   public function qrcode()
   {
      return $this->belongsTo(Qrcode::class, 'qrcode_id', 'id');
   }
   public function prodi()
   {
      return $this->belongsTo(Prodi::class, 'prodi_id', 'id');
   }
   public function penyakit()
   {
      return $this->belongsTo(Penyakit::class, 'penyakit_id', 'id');
   }
}
