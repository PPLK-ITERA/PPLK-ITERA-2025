<?php

use App\Http\Controllers\Game\GameController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
   Route::prefix('api')->group(function () {
      Route::get('kelompok/score', [GameController::class, 'getScoreKelompok']);
      Route::get('user/score', [GameController::class, 'getUserScore']);
   });
});
