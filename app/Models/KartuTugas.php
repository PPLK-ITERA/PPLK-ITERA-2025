<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KartuTugas extends Model
{
    use HasFactory;

    protected $table = 'kartu_tugas';

    protected $fillable = [
        'hari',
        'tanggal',
        'poster_url',
        'status',
        'is_selesai',
        'kelompok_id'
    ];

    public function kelompok()
    {
        return $this->belongsTo(Kelompok::class);
    }

    public function tugas()
    {
        return $this->hasMany(Tugas::class, 'kartu_id');
    }
}