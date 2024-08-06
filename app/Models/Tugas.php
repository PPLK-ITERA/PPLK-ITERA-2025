<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
   use HasFactory;

   protected $fillable = [
      'link',
      'user_id',
      'materi',
      'tanggal_submit',
      'kategori_tugas',
      'isReturned',
      'catatan',
   ];

   protected $hidden = [
      'created_at', 'updated_at'
   ];

   public function user()
   {
      return $this->belongsTo(User::class);
   }
   public function returnTugas($catatan = null)
   {
      $this->isReturned = true;

      if (!is_null($catatan)) {
         $this->catatan = $catatan;
      }

      $this->save();
   }

   public function pengumpulanTugas()
   {
      return $this->hasOne(PengumpulanTugas::class, 'tugas_id', 'id');
   }
}
