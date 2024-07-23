<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogCui extends Model
{
    use HasFactory;

    protected $table = 'log_cui';
    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id', 'status' , 'waktu_izin' , 'ket_izin'
    ];

    protected $hidden = [
        'id', 'created_at', 'updated_at',
    ];

    public function UserCui(){
        return $this->hasOne(UserCui::class);
    }
}
