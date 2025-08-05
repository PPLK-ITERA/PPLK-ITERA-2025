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
        Schema::create('log_komdis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->text('kesalahan');
            $table->string('kategori')->nullable(); // Kategori pelanggaran
            $table->text('keterangan')->nullable(); // Keterangan tambahan
            $table->enum('status', ['belum diproses', 'proses', 'selesai', 'dibatalkan'])->default('belum diproses');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('log_komdis');
    }
};
