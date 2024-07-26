<?php

use App\Http\Controllers\Game\GameController;
use App\Http\Controllers\Game\QuizAnswerController;
use App\Http\Controllers\Game\QuizController;
use App\Http\Controllers\Game\UnlockStatusController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
});
//SEMENTARA DIKELUARIN DARI AUTH
Route::prefix('api')->group(function () {
   Route::get('kelompok/score', [GameController::class, 'getScoreKelompok']);
   Route::get('user/score', [GameController::class, 'getUserScore']);

   //Route game
   //mengambil pertanyaan berdasarkan geddung yang terbuka
   Route::get('/gedung/{gedungId}/question', [QuizController::class, 'getAll']);
   //jawab kuis
   Route::post('/quiz/{question_id}/answer/{id}', [QuizAnswerController::class, 'storeAnswer']);
   Route::get('/test', [QuizAnswerController::class, 'test']);
   //mengambil pertanyaan berdasarkan geddung yang terbuka sebanyak 5 dari 10 soal
   Route::get('/pertanyaan/{gedung_id}', [QuizController::class, 'getQuestionsByGedung']);
   //check kuis
   Route::post('check-answers/{id}', [QuizAnswerController::class, 'checkAnswers']);
   Route::get('/test', [QuizAnswerController::class, 'test']);
   //membuka status gedung
   Route::get('/unlock-gedung', [UnlockStatusController::class, 'unlockGedung']);
   //melihat gedung yang terbuka dan tertutup
   Route::get('/gedung', [UnlockStatusController::class, 'getGedungAvailable']);
   //score user
   Route::get('/user/score', [UserController::class, 'viewScore'])->middleware('auth');
   //Melihat score kelompok user
   Route::get('/kelompok-score', [UserController::class, 'getKelompokScore']);
});
