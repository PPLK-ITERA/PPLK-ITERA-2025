<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnlockStatus extends Model
{
    use HasFactory;
    protected $table ='unlock_status';
    protected $primaryKey ='id';
    protected $fillable = [
        'user_id',
        'gedung_id',
        'dateOpen'
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function gedung(){
        return $this->hasMany(gedung::class,'gedung_id','id');
    }

    public function user(){
        return $this->hasMany(User::class,'user_id','id');
    }
}

