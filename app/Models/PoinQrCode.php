<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PoinQrCode extends Model
{
   use HasFactory;
   protected $table = 'poin_qrcodes';
   protected $primaryKey = 'id';

   protected $fillable = [
      'code',
      'user_id',
      'expired_at'
   ];

   protected $hidden = [
      'created_at',
      'updated_at'
   ];

   protected $casts = [
      'expired_at' => 'datetime',
   ];
   public function user()
   {
      return $this->belongsTo(User::class, 'user_id', 'id');
   }
}
