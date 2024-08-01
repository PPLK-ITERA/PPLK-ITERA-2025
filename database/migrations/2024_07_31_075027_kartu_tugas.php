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
        Schema::create('kartu_tugas', function (Blueprint $table) {
            $table->id();
            $table->integer("hari");
            $table->date("tanggal");
            $table->foreignId("kelompok_id");
            $table->string("poster_url")->nullable();
            $table->boolean("is_selesai")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kartu_tugas');
    }
};