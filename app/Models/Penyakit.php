<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penyakit extends Model
{
    use HasFactory;

    protected $table = 'penyakit';
    protected $primaryKey = 'id';

    protected $fillable =[
        'pita' , 'ket_penyakit'
    ];

    protected $hidden = [
        'id', 'created_at', 'updated_at',
     ];

     public function UserCui(){
        return $this->hasOne(UserCui::class);
    }
}
