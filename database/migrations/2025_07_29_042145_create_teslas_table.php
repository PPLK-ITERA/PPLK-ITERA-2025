<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('teslas', function (Blueprint $table) {
            $table->id();
            $table->enum('tipe', ['mendatar', 'menurun']);          // mendatar / menurun
            $table->integer('nomor')->unique();        // nomor soal
            $table->text('pertanyaan');    // isi soal (clue)
            $table->text('jawaban');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('teslas');
    }
};
