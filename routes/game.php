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
   Route::get('kelompok/score/{id}', [GameController::class, 'getScoreKelompok']);//ini done
   Route::get('user/score/{id}', [GameController::class, 'getUserScore']);//ini done
   //admin membuka gedung
   Route::post('unlockgedungadmin/{id}', [UnlockStatusController::class, 'unlockGedungForMaba']);
   //Route game
   //mengambil pertanyaan berdasarkan geddung yang terbuka
   // Route::get('/gedung/{gedungId}/question', [QuizController::class, 'getAll']);
   //jawab kuis
   Route::post('/quiz/{question_id}/answer/{id}', [QuizAnswerController::class, 'storeAnswer']);
   Route::get('/test', [QuizAnswerController::class, 'test']);
   //mengambil pertanyaan berdasarkan geddung yang terbuka sebanyak 5 dari 10 soal
   Route::get('/pertanyaan/{gedung_id}/{id}', [QuizController::class, 'getQuestionsByGedung']);//ini done
   //check kuis
   Route::post('check-answers/{id}', [QuizAnswerController::class, 'checkAnswers']);
   Route::get('/test', [QuizAnswerController::class, 'test']);
   //membuka status gedung
   // Route::get('/unlock-gedung/{id}', [UnlockStatusController::class, 'unlockGedung']);//ini done
   //melihat gedung yang terbuka dan tertutup
   Route::get('/gedung/{id}', [UnlockStatusController::class, 'getGedungAvailable']);//ini done
   // //score user
   // Route::get('/user/score', [UserController::class, 'viewScore'])->middleware('auth');
   // //Melihat score kelompok user
   // Route::get('/kelompok-score', [UserController::class, 'getKelompokScore']);
});
