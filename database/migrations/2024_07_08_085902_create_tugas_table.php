<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
   /**
    * Run the migrations.
    */
   public function up(): void
   {
      Schema::create('tugas', function (Blueprint $table) {
         $table->id();
         $table->string('judul');
         $table->string('deskripsi');
         $table->enum('pengumpulan', ['sosmed', 'drive']);
         $table->enum('kategori', ['individu', 'kelompok']);
         $table->date('deadline');
         $table->timestamps();
         $table->foreignId('kartu_id');
      });
   }

   /**
    * Reverse the migrations.
    */
   public function down(): void
   {
      Schema::dropIfExists('tugas');
   }
};