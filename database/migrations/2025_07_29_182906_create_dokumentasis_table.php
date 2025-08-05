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
        Schema::create('dokumentasi', function (Blueprint $table) {
            $table->id();
            $table->integer('hari_ke')->unique()->comment('Nomor hari kegiatan (1-5)');
            $table->string('judul')->nullable()->comment('Judul dokumentasi hari ini');
            $table->text('deskripsi')->nullable()->comment('Deskripsi detail kegiatan');
            $table->string('link_gdrive')->nullable()->comment('Link Google Drive');
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
        Schema::dropIfExists('dokumentasi');
    }
};