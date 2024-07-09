<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class gedung extends Model
{
    use HasFactory;
    protected $table ='gedung';
    protected $primaryKey ='id';
    protected $fillable = 'nama_gedung';
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function UnlockStatus(){
        return $this->hasOne(UnlockStatus::class,'gedung_id','id');
    }
}
