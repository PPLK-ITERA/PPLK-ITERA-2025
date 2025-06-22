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
        Schema::create('poster', function (Blueprint $table) {
            $table->id();
            $table->string('url_poster')->nullable();
            $table->foreignId('kelompok_id')->constrained('kelompok')->onDelete('cascade');
            $table->enum('hari', [0, 1, 2, 3, 4, 5]);
            $table->boolean('isReturn')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('poster');
    }
};
