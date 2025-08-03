<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Progres extends Model
{
    use HasFactory;

    protected $table = 'progres';

    protected $fillable = [
        'user_id',
        'tanggal',
        'waktu',
        'selesai',
        'jawaban',
        'skor',
    ];

    protected $casts = [
        'tanggal' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class, 'user_id');
    }
}
