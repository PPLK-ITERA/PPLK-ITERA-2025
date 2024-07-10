<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class UserCui extends Model
{
    use HasFactory;
    protected $table ='usercui';
    protected $primaryKey = 'id';

    protected $fillable =[
        'name' , 'nim' , 'email' , 'penyakit_id' , 'qrcode_id' ,'status' ,'log_id'
    ];

    protected $hidden = [
        'id', 'created_at', 'updated_at',
     ];

    public function penyakit(){
        return $this->belongsTo(Penyakit::class , 'penyakit_id');
    }

    public function log_id(){
        return $this->belongsTo(LogId::class, 'log_id');
    }
}
