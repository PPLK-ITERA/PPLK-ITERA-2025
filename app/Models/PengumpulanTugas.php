<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PengumpulanTugas extends Model
{
   use HasFactory;

   protected $table = 'pengumpulan_tugas';

   protected $fillable = [
      'jawaban',
      'isReturn',
      'catatan',
      'status',
      'user_id',
      'tugas_id'
   ];
   protected $hidden = [
      'user_id', 'tugas_id', 'created_at', 'updated_at'
   ];

   public function tugas()
   {
      return $this->belongsTo(Tugas::class);
   }

   public function user()
   {
      return $this->belongsTo(User::class);
   }
}
