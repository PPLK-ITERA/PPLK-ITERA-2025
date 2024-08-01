<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   /**
    * Run the migrations.
    */
   public function up(): void
   {
      Schema::create('tugas', function (Blueprint $table) {
         $table->id();
         $table->string('link');
         $table->unsignedBigInteger('user_id');
         $table->enum('materi', ['materi1', 'materi2', 'materi3']);
         $table->enum('kategori_tugas', ['individu', 'kelompok']);
         $table->date('tanggal_submit');
         $table->boolean('isReturned')->default(false);
         $table->text('catatan')->nullable();
         $table->timestamps();

         $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
