<?php

use App\Http\Controllers\MadingController;
use App\Http\Controllers\ScoreboardController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\RelasiController;
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
   Route::get('/csrf-token', function (Request $request) {
      return response()->json(['csrfToken' => csrf_token()]);
   })->name("csrf");

   Route::get("/mading-preview", function () {
      return view("mading-preview");
   })->name("mading.preview");


   // Scoreboard
   // melihat top 10
   Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase'])->name('scoreboard.top-score');
   //melihat kelompok yang tidak masuk top 10 berdasarkan id kelompok
   Route::get('/scoreboard/kelompok', [ScoreboardController::class, 'getKelompokScore'])->name('scoreboard.kelompok');

   // Route::middleware(['checkRole:Maba'])->group(function () {
   Route::get('/relasi', [RelasiController::class, 'index'])->name('relasi.index');
   Route::get('/relasi/index/topfollowers', [RelasiController::class, 'topFollowers'])->name('relasi.index.topfollowers');
   Route::get('/relasi/index/sort', [RelasiController::class, 'sort'])->name('relasi.index.sort');
   Route::get('/relasi/data', [RelasiController::class, 'getProfiles'])->name('relasi.index.search'); // search JSON

   Route::get('/relasi/search', [RelasiController::class, 'searchIndex'])->name('relasi.search'); // search page
   Route::get('/relasi/follow/{id}', [RelasiController::class, 'follow'])->name('relasi.follow');
   Route::get('/relasi/profil/{id}', [RelasiController::class, 'profile'])->name('relasi.profil');
   // });

   //melihat my profile
   Route::get('/myprofile', [ProfileController::class, 'show'])->name('myprofile');
   Route::get('/myprofile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
   Route::put('/myprofile', [ProfileController::class, 'update'])->name('profile.update');
   Route::put('/myprofileupload', [ProfileController::class, 'updateProfile'])->name('profile.update.profile');

   Route::prefix('mading')->name('mading.')->group(function () {
      Route::get('/card', [MadingController::class, 'getCard'])->name('card');
      Route::get('/tugas/{id}', [MadingController::class, 'getTugas'])->name('tugas');
      Route::post('/store', [MadingController::class, 'storeTugas'])->name('store');
   });
});

require __DIR__ . '/auth.php';
require __DIR__ . '/ui.php';
require __DIR__ . '/game.php';
require __DIR__ . '/guest.php';
// require __DIR__ . '/relasi.php';
require __DIR__ . '/dashboard.php';
require __DIR__ . '/cui.php';
require __DIR__ . '/csrf.php';
require __DIR__ . '/asesmen.php';
