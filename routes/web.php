<?php
//TODO: Remove the feedback and response related

use App\Http\Controllers\BookletController;
use App\Http\Controllers\PresensiPplkController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ScoreboardController;
use App\Http\Controllers\KelompokController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FAQController;

// use App\Http\Controllers\ResponseController;
// use App\Http\Controllers\FeedbackController;


Route::get('/', function () {
   // if has auth, redirect to dashboard
   if (auth()->check()) {
      return redirect()->route('dashboard');
   }

   return Inertia::render('LandingPage', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
   ]);
})->name('LandingPage');

//Guest Route

// Route::get('/booklets', [BookletController::class, 'index']);
Route::get('/faqs', [FAQController::class, 'index']);
Route::get('/dashboard', function () {
   return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');




//Auth Route
Route::middleware('auth')->group(function () {
   Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
   Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
   Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/ui.php';
