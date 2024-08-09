<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Qrcode extends Model
{
   use HasFactory;
   protected $table = 'qrcodes';
   protected $primaryKey = 'id';

   protected $fillable = [
      'user_id',
      'code'
   ];

   protected $hidden = [
      'created_at',
      'updated_at'
   ];

   public function user()
   {
      return $this->hasOne(User::class, 'id', 'qrcode_id');
   }
}
