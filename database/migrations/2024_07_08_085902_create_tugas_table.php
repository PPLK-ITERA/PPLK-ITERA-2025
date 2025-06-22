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
         $table->enum('hari', [0, 1, 2, 3, 4, 5]);
         $table->enum('tipe_link', ['instagram', 'tiktok', 'drive', 'linkedin']);
         $table->enum('kategori', ['individu', 'kelompok']);
         $table->date('deadline');
         $table->timestamps();
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