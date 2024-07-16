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
      Schema::create('log_cui', function (Blueprint $table) {
         $table->id();
         $table->foreignId('user_cui_id')->constraint('user_cui')->onDelete('cascade');
         $table->enum('status', ['hadir', 'izin', 'tidak hadir']);
         $table->datetime('waktu_izin')->nullable();
         $table->string('ket_izin')->nullable();
         $table->timestamps();
      });
   }

   /**
    * Reverse the migrations.
    */
   public function down(): void
   {
      Schema::dropIfExists('log_cui');
   }
};