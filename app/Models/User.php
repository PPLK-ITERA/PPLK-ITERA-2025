<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
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
        'id',
        'name',
        'email',
        'password',
        'photo_profile_url',
        'linkedin_url',
        'instagram_url',
        'kelompok_id',
        'pilar',
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
    public function kelompok(){
        return $this->hasOne(Kelompok::class,'kelompok_id','id');
    }
    public function role(){
        return $this->hasOne(Role::class);
    }

    public function pilar(){
        return $this->hasOne(pilar::class,'pilar','id');
    }
}
