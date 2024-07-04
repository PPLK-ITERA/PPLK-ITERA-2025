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
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->foreignId('role')->default(1);
            $table->boolean('isFirstTime')->default(true);
            $table->rememberToken();
            $table->string('photo_profile_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('instagram_url')->nullable();
            $table->foreignId('pilar')->nullable();
            $table->foreignId('kelompok_id')->nullable();
            $table->integer('score')->default(0);
          $table->unsignedBigInteger('view_count')->default(0);
            $table->timestamps();
        });

   public function down()
   {
      Schema::dropIfExists('users');
   }
}
