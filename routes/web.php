<?php

use App\Http\Controllers\PresensiPplkController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\ScoreboardController;
use App\Http\Controllers\KelompokController;
use App\Http\Controllers\UserController;

Route::get('/top-followers', [UserController::class, 'topFollowers']);
Route::get('/search', [UserController::class, 'search']);
Route::get('/list-maba', [UserController::class, 'listMaba']);
Route::post('/follow/{id}', [UserController::class, 'follow'])->name('follow');
Route::get('/follow', [UserController::class, 'followview']);


Route::get('/', function () {
   // if has auth, redirect to dashboard
   if (auth()->check()) {
      return redirect()->route('dashboard');
   }

   return Inertia::render('Welcome', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
   ]);
})->name('welcome');

Route::get('/dashboard', function () {
   return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/feedback', [FeedbackController::class, 'index'])->name('feedbacks.index');
    Route::get('/user/feedback', [FeedbackController::class, 'showUserFeedback'])->name('user.feedback');
    
    Route::middleware(['checkRole:dapmen,mahasiswa'])->group(function () {
        Route::post('/feedback', [FeedbackController::class, 'submit'])->name('feedback.submit');
    });

    Route::middleware(['checkRole:admin'])->group(function () {
        Route::post('/feedback/respond/{id}', [FeedbackController::class, 'respond'])->name('feedback.respond');
        Route::get('/admin/feedbacks', [FeedbackController::class, 'showAllFeedbacks'])->name('admin.feedbacks');
    });
    Route::get('/kelompok/{id}/user-id', [KelompokController::class, 'getUserIdsByKelompokId']);
    Route::get('/kelompok/{id}/total-score', [KelompokController::class, 'getKelompokScore']);
    Route::get('/scoreboard/top-scores', [ScoreboardController::class, 'getTopScores']);
    Route::get('/getUserPresensiByKelompok/{kelompok_id}/{tanggal_presensi}', [PresensiPplkController::class, 'getUserPresensiByKelompok']);
});

require __DIR__ . '/auth.php';