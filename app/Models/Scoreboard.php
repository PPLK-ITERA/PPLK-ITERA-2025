<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scoreboard extends Model
{
    use HasFactory;

    protected $table = 'scoreboard';
    protected $primaryKey = 'id';
    protected $fillable =[
        'kelompok_id','total_score'
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function kelompok(){
        return $this->hasOne(Kelompok::class,'kelompok_id','id');
    }
}
