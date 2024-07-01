<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'tanggal_kuis',
        'sifa1_score',
        'sifat2_score',
        'sifat3_score',
        'sifat4_score',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'tanggal_kuis' => 'datetime',
            'sifat1_score' => 'integer',
            'sifat2_score' => 'integer',
            'sifat3_score' => 'integer',
            'sifat4_score' => 'integer',
        ];
    }
    public function User()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
