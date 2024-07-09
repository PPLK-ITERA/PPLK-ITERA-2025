<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnlockStatus extends Model
{
    use HasFactory;
    protected $table ='Unlock_Status';
    protected $primaryKey ='id';
    protected $fillable = 'dateOpen';
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function gedung(){
        return $this->hasMany(gedung::class,'gedung_id','id');
    }

    public function kelompok(){
        return $this->hasMany(kelompok::class,'kelompok_id','id');
    }
}

