<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Poster extends Model
{
    use HasFactory;

    protected $table = 'poster';

    protected $hidden = [
        'created_at',
        'updated_at',
        'kelompok_id',
    ];

    protected $fillable = [
        'url_poster',
        'hari',
        'kelompok_id',
        'isReturn'
    ];

    public function kelompok()
    {
        return $this->belongsTo(Kelompok::class);
    }
}
