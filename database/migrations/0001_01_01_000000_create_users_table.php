<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
   /**
    * Run the migrations.
    */
   public function up(): void
   {
      Schema::create('users', function (Blueprint $table) {
         $table->id();
         $table->string('name');
         $table->string('nim')->nullable();
         $table->string('email')->unique();
         $table->timestamp('email_verified_at')->nullable();
         $table->string('password');
         $table->foreignId('role_id')->default(1);
         $table->boolean('isFirstTime')->default(true);
         $table->rememberToken();
         $table->string('photo_profile_url')->nullable();
         $table->string('linkedin_url')->nullable();
         $table->string('instagram_url')->nullable();
         $table->foreignId('pilar')->nullable();
         $table->foreignId('kelompok_id')->nullable();
         $table->integer('score')->default(0);
         $table->unsignedBigInteger('view_count')->default(0);
         $table->foreignId('prodi_id')->nullable();
         $table->foreignId('penyakit_id')->nullable();
         $table->timestamps();
      });
      Schema::create('sessions', function (Blueprint $table) {
         $table->string('id')->primary();
         $table->foreignId('user_id')->nullable()->index();
         $table->string('ip_address', 45)->nullable();
         $table->text('user_agent')->nullable();
         $table->longText('payload');
         $table->integer('last_activity')->index();
      });
   }

   /**
    * Reverse the migrations.
    */
   public function down(): void
   {
      Schema::dropIfExists('users');
      Schema::dropIfExists('sessions');
   }
}
