<?php

use App\Http\Controllers\AssesmenController;
use App\Http\Controllers\Pilar\AnswerController;
use App\Http\Controllers\Pilar\PilarController;
use App\Http\Controllers\Pilar\QuestionController;
use App\Http\Controllers\Pilar\ResultController;
use App\Http\Controllers\User\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
   // if has auth, redirect to dashboard
   // if (auth()->check()) {
   //    return redirect()->route('dashboard');
   // }

   return Inertia::render('LandingPage', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
   ]);
})->name('welcome');


//Auth Route
Route::middleware('auth')->group(function () {


   // Scoreboard
   //melihat top 10
   // Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase']);
   // //melihat kelompok yang tidak masuk top 10 berdasarkan id kelompok
   // Route::get('/scoreboard/kelompok/{id}', [ScoreboardController::class, 'getKelompokScore']);


   //melihat my profile
   Route::get('/myprofile', [ProfileController::class, 'show'])->name('myprofile');
   Route::get('/myprofile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
   Route::put('/myprofile', [ProfileController::class, 'update'])->name('profile.update');
   Route::put('/myprofileupload', [ProfileController::class, 'updateProfile'])->name('profile.update.profile');

   // //melihat top 10
   // Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase']);
   // //melihat kelompok yang tidak masuk top 10
   // Route::get('/scoreboard/kelompok/{id}', [ScoreboardController::class, 'getKelompokScore']);

   // // Tugas
   // Route::get('/tugas/create', [TugasController::class, 'create'])->name('tugas.create');
   // Route::post('/tugas', [TugasController::class, 'store'])->name('tugas.store');
   // Route::get('/tugas/{id}/edit', [TugasController::class, 'edit'])->name('tugas.edit');
   // Route::put('/tugas/{id}', [TugasController::class, 'update'])->name('tugas.update');
   // Route::delete('/tugas/{id}', [TugasController::class, 'destroy'])->name('tugas.destroy');
   // Route::get('/tugas', [TugasController::class, 'index'])->name('tugas.index');
   // Route::get('/tugas/{id}', [TugasController::class, 'show'])->name('tugas.show');
   //Assesmen Route
   Route::get('/questions', [QuestionController::class, 'index'])->name('assesmen.question');
   Route::get('/question/{question_id}/answer/{answer_id}', [AnswerController::class, 'store'])->name('assesmen.answer');
   Route::get('/result', [PilarController::class, 'index'])->name('assesmen.result');
   Route::get('/result/reset', [ResultController::class, 'reset'])->name('assesmen.reset');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/ui.php';
require __DIR__ . '/game.php';
require __DIR__ . '/guest.php';
require __DIR__ . '/relasi.php';
require __DIR__ . '/dashboard.php';
require __DIR__ . '/cui.php';