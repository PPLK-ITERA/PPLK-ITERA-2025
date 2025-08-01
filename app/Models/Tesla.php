<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tesla extends Model
{
    protected $table = 'teslas';

    protected $fillable = [
        'nomor',
        'tipe',
        'pertanyaan',
        'jawaban',
        'start_row',
        'start_col',
    ];
}
