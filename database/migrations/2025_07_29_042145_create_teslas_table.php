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
            // Tambahkan kolom start_row dan start_col agar sesuai kebutuhan frontend
            $table->integer('start_row')->nullable();
            $table->integer('start_col')->nullable();
            $table->timestamps();
        });

        // Migration untuk tabel day
        Schema::create('day', function (Blueprint $table) {
            $table->id();
            $table->string('change_day'); // ubah dari integer ke string
            $table->timestamps();
        });

        // Migration untuk tabel progres
        Schema::create('progres', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); // User yang menyimpan progres
            $table->dateTime('tanggal'); // Tanggal
            $table->integer('waktu');    // Waktu (dalam detik)
            $table->integer('selesai');  // Selesai (dalam persen)
            $table->string('jawaban');   // Jawaban (format: 5/10)
            $table->integer('skor');     // Skor
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('teslas');
        Schema::dropIfExists('day');
        Schema::dropIfExists('progres');
    }
};
