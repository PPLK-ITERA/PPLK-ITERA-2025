<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foto_dokumentasi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dokumentasi_id')
                  ->constrained('dokumentasi')
                  ->onDelete('cascade')
                  ->comment('Foreign key ke tabel dokumentasi');
            $table->string('nama_file')->comment('Nama asli file foto');
            $table->string('path_file')->comment('Path penyimpanan foto di server');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foto_dokumentasi');
    }
};