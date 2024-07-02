<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelompok extends Model
{
    use HasFactory;

    protected $table = 'kelompok';
    protected $primarykey = 'id';
    protected $fillable = [
        'id','user_id','score_id','linkedin_url',
        'photo_profile_url','password'
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function scoreboard()
    {
        return $this->hasOne(Scoreboard::class,'score_id','id');
    }



}
