<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;

    protected $fillable =[
        'link',
        'user_id',
        'materi',
        'tanggal_submit',
        'kategori_tugas',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
