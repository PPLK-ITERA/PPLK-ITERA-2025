<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scoreboard extends Model
{
    use HasFactory;

    protected $table = 'scoreboard';
    protected $primarykey = 'id';

    protected $fillable = [
        'id','kelompok_id'
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];
    
    public function kelompok()
    {
        return $this->belongsTo(Kelompok::class, 'kelompok_id','id');
    }

}
