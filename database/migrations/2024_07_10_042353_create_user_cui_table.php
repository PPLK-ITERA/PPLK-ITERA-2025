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
      Schema::create('user_cui', function (Blueprint $table) {
         $table->id();
         $table->string('nama');
         $table->string('nim')->unique();
         $table->string('email')->unique();
         $table->foreignId('penyakit_id');
         $table->foreignId('qrcode_id')->unique();
         $table->enum('status', ['hadir', 'izin', 'tidak hadir'])->default('tidak hadir');
         $table->timestamps();
      });
   }

   /**
    * Reverse the migrations.
    */
   public function down(): void
   {
      Schema::dropIfExists('user_cui');
   }
};