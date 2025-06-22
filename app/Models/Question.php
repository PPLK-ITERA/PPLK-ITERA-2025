<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'teks_pertanyaan',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'sifat',
        'created_at',
        'updated_at'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'teks_pertanyaan' => 'string',
        ];
    }
    public function Pilar()
    {
        return $this->hasOne(Pilar::class, 'id', 'pilar_id');
    }
    public function Answers()
    {
        return $this->hasMany(Answer::class, 'question_id', 'id');
    }
}
