<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
   use HasFactory;

   protected $table = 'materis';
   protected $fillable = ['nama_materi', 'link_materi', 'hari'];
   protected $hidden = ['created_at', 'updated_at'];
}