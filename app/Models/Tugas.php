<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
   use HasFactory;

   protected $table = 'tugas';

   protected $hidden = [
      'created_at',
      'updated_at',
   ];

   protected $fillable = [
      'judul',
      'deskripsi',
      'hari',
      'tipe_link',
      'kategori',
      'deadline',
   ];

   public function pengumpulanTugas()
   {
      return $this->hasMany(PengumpulanTugas::class, 'tugas_id', 'id');
   }
}