<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booklet extends Model
{
   protected $table = 'booklets';
   protected $primaryKey = 'id';
   /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
   protected $fillable = [
      'nama_booklet',
      'url_booklet',
      'deadline',
   ];

   /**
    * The attributes that should be hidden for serialization.
    *
    * @var array<int, string>
    */
   protected $hidden = [
      'id', 'created_at', 'updated_at',
   ];
   use HasFactory;
}
