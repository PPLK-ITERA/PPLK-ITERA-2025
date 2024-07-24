<?php

use App\Http\Controllers\Admin\Dashboard\KelompokController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\BookletController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\Game\GameController;
use App\Http\Controllers\QuizAnswerController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\UnlockStatusController;
use App\Http\Controllers\User\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ScoreboardController;
use App\Http\Controllers\User\KelompokController;
use App\Http\Controllers\User\PresensiCuiController;
use App\Http\Controllers\User\PresensiPplkController;
use App\Http\Controllers\User\RelasiController;

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

// All routes
Route::get('faq', [FAQController::class, 'guestIndex'])->name('faq.guestIndex');
Route::get('booklets', [BookletController::class, 'guestIndex'])->name('booklets.guestIndex');

//Auth Route
Route::middleware('auth')->group(function () {

   // Profile

   // // Profile
   // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
   // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
   // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

   // Scoreboard
   //melihat top 10
   Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase']);
   //melihat kelompok yang tidak masuk top 10 berdasarkan id kelompok
   Route::get('/scoreboard/kelompok/{id}', [ScoreboardController::class, 'getKelompokScore']);
   //melihat my profile
   Route::get('/myprofile', [ProfileController::class, 'show'])->name('my-profile');
   Route::get('/myprofile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
   Route::patch('/myprofile/edit', [ProfileController::class, 'update'])->name('profile.update');

   //dashboard
   Route::prefix('dashboard')->group(function () {
      Route::prefix('user')->group(function () {
         Route::resource('/', UserController::class)->names('user');
      });

      Route::resource('booklet', BookletController::class)->names('booklet');
      Route::resource('faq', FAQController::class)->names('faq');

      // Route::prefix('kelompok')->group(function () {
      //    Route::resource('/', UserKelompokController::class)->names('kelompok');
      // });
   });

   //Presensi CUI
   Route::prefix('cui')->group(function () {
      Route::post('qrcode/scan', [PresensiCuiController::class, 'QRScan'])->name('cui.scan');
      Route::get('status/{code}', [PresensiCuiController::class, 'status'])->name('cui.status');
      Route::get('izin/{code}')->name('cui.izinform');
      Route::patch('izin/{code}', [PresensiCuiController::class, 'storeIzin'])->name('cui.izin');
      Route::patch('izin/{code}/destroy', [PresensiCuiController::class, 'destroyIzin'])->name('cui.destroy');
      Route::get('logbook', [PresensiCuiController::class, 'getLogbookData'])->name('cui.logbook');
   });

   //Presensi PPLK
   Route::prefix('presensi')->group(function () {
      //Presensi PPLK
      Route::middleware(['checkRole:Dapmen,Admin'])->group(function () {
         Route::get('/', [PresensiPplkController::class, 'getAllPresensi'])->name('presensi.index');
         Route::get('/kelompok/{tanggal_presensi}', [PresensiPplkController::class, 'getUserPresensiByKelompok']);
      });
      Route::middleware(['checkRole:Pjprodi,Admin'])->group(function () {
         Route::get('/{prodi_id}/{tanggal_presensi}', [PresensiPplkController::class, 'getUserPresensiByProdi']);
      });
   });





   //Route game
   //mengambil pertanyaan berdasarkan geddung yang terbuka
   Route::get('/gedung/{gedungId}/question', [QuizController::class, 'getAll']);
   //jawab kuis
   Route::post('/quiz/{question_id}/answer/{id}', [QuizAnswerController::class, 'storeAnswer']);
   Route::get('/test', [QuizAnswerController::class, 'test']);
   //membuka status gedung
   Route::get('/unlock-gedung', [UnlockStatusController::class, 'unlockGedung']);
   //score user
   Route::get('/user/score', [UserController::class, 'viewScore'])->middleware('auth');



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


   // Route::middleware(['checkRole:Admin'])->group(function () {
   //    //CRUD FAQ
   //    Route::resource('faqs', FAQController::class);
   // })->prefix('admin');

   // Scoreboard
   // melihat list user pada kelompok
   Route::get('/kelompok/{id}/user-id', [KelompokController::class, 'getUserIdsByKelompokId']);
   //melihat top 10
   Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase']);
   //melihat kelompok yang tidak masuk top 10
   Route::get('/scoreboard/kelompok/{id}', [ScoreboardController::class, 'getKelompokScore']);


   //Middleware only maba
   Route::middleware(['checkRole:maba'])->group(function () {
      //Followers
      //top 3 followers
      Route::get('/top-followers', [RelasiController::class, 'topFollowers']);
      //search maba
      Route::post('/search', [RelasiController::class, 'search']);
      //seluruh list maba
      Route::get('/list-maba', [RelasiController::class, 'listMaba']);
      //follow button
      Route::post('/follow/{id}', [RelasiController::class, 'follow'])->name('follow');
   });

   Route::middleware(['checkRole:dapmen,Admin'])->group(function () {
      //Presensi PPLK
      Route::get('/presensi', [PresensiPplkController::class, 'getAllPresensi'])->name('presensi.index');
      Route::get('/presensi/kelompok/{tanggal_presensi}', [PresensiPplkController::class, 'getUserPresensiByKelompok']);
   });

   Route::prefix('api')->group(function () {
      Route::get('kelompok/score', [GameController::class, 'getScoreKelompok']);
      Route::get('user/score', [GameController::class, 'getUserScore']);
   });
});

require __DIR__ . '/auth.php';
require __DIR__ . '/ui.php';
require __DIR__ . '/game.php';