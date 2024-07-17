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

   // // Profile
   // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
   // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
   // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

   // Scoreboard
   // melihat list user pada kelompok
   Route::get('/kelompok/{id}/user-id', [KelompokController::class, 'getUserIdsByKelompokId']);
   //melihat top 10
   Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase']);
   //melihat kelompok yang tidak masuk top 10
   Route::get('/scoreboard/kelompok/{id}', [ScoreboardController::class, 'getKelompokScore']);
   //melihat my profile
   Route::get('/myprofile', [ProfileController::class, 'show']);
   Route::get('/myprofile/edit', [ProfileController::class, 'edit']);
   Route::patch('/myprofile/edit', [ProfileController::class, 'update']);



   //Middleware only maba
   Route::middleware(['checkRole:Maba'])->group(function () {
      //Followers
      //top 3 followers
      Route::get('/top-followers', [UserController::class, 'topFollowers']);
      //search maba
      Route::post('/search', [UserController::class, 'search']);
      //seluruh list maba
      Route::get('/list-maba', [UserController::class, 'listMaba']);
      //follow button
      Route::post('/follow/{id}', [UserController::class, 'follow'])->name('follow');
      //get other user profile by id
      Route::get('/profile/{id}', [UserController::class, 'profile'])->name('profile');
   });

   Route::middleware(['checkRole:Dapmen,Admin'])->group(function () {
      //Presensi PPLK
      Route::get('/presensi', [PresensiPplkController::class, 'getAllPresensi'])->name('presensi.index');
      //get Presensi Berdasarkan Kelompok
      Route::get('/presensi/kelompok/{tanggal_presensi}', [PresensiPplkController::class, 'getUserPresensiByKelompok']);
   });
   Route::middleware(['checkRole:Mamet,Admin'])->group(function () {
      //CRUD Booklet
      Route::resource('/booklet', BookletController::class);
   })->prefix('mamet');
   Route::middleware(['checkRole:Admin'])->group(function () {
      //CRUD FAQ
      Route::resource('faqs', FAQController::class);
   })->prefix('admin');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/ui.php';
