<?php

use App\Http\Controllers\Admin\Dashboard\KelompokController;
use App\Http\Controllers\BookletController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\Game\GameController;
use App\Http\Controllers\PoinController;
use App\Http\Controllers\QuizAnswerController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\UnlockStatusController;
use App\Http\Controllers\User\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ScoreboardController;
use App\Http\Controllers\User\PresensiCuiController;
use App\Http\Controllers\User\PresensiPplkController;
use App\Http\Controllers\User\RelasiController;
use App\Http\Controllers\TugasController;
use App\Http\Controllers\Admin\UserController;

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
   Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase']);
   //melihat kelompok yang tidak masuk top 10 berdasarkan id kelompok
   Route::get('/scoreboard/kelompok/{id}', [ScoreboardController::class, 'getKelompokScore']);
   //melihat my profile
   Route::get('/myprofile', [ProfileController::class, 'show'])->name('my-profile');
   Route::get('/myprofile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
   Route::patch('/myprofile/edit', [ProfileController::class, 'update'])->name('profile.update');

   //dashboard
   Route::prefix('dashboard')->group(function () {
      //User
      Route::middleware(['checkRole:Admin'])->group(function () {
         Route::get('user/data', [UserController::class, 'getUsers'])->name('user.data');
         Route::get('user/dapmen/data', [UserController::class, 'getUsersDapmen'])->name('user.dapmen.data');
         Route::get('user/pjprodi/data', [UserController::class, 'getUsersPjprodi'])->name('user.pjprodi.data');
         Route::get('user/korlap/data', [UserController::class, 'getUsersKorlap'])->name('user.korlap.data');
         Route::get('user/mamet/data', [UserController::class, 'getUsersMamet'])->name('user.mamet.data');

         //CRUD
         Route::get('user/store', [UserController::class, 'store'])->name('dashboard.user.store');
         Route::put('user/update', [UserController::class, 'update'])->name('dashboard.user.update');
         Route::delete('user/delete', [UserController::class, 'delete'])->name('dashboard.user.destroy');
      });

      Route::middleware(['checkRole:Daplok,Mentor,Admin'])->group(function () {
         Route::get('user/maba/data', [UserController::class, 'getUsersMaba'])->name('user.maba.data');
      });

      Route::middleware('checkRole:Korlap,Admin')->group(function () {
         Route::get('/poin/{user_id}', [PoinController::class, 'index'])->name('poin.index');
         Route::post('/poin-store/{user_id}', [PoinController::class, 'store'])->name('poin.store');
         Route::get('/poin-redirect/{code}', [PoinController::class, 'redirect'])->name('poin.redirect');
      });

      Route::get('/poin-qrcode/{user_id}', [PoinController::class, 'generateQrCode'])->name('poin.qrcode')->middleware('checkRole:Dapmen');

      Route::middleware(['checkRole:Mamet,Admin'])->group(function () {
         Route::get('booklet', [BookletController::class, 'index'])->name('dashboard.booklet.index');
         Route::get('booklet/data', [BookletController::class, 'getAllBooklets'])->name('dashboard.booklet.data');
         Route::get('booklet', [BookletController::class, 'store'])->name('dashboard.booklet.store');
         Route::put('booklet', [BookletController::class, 'update'])->name('dashboard.booklet.update');
         Route::delete('booklet', [BookletController::class, 'destroy'])->name('dashboard.booklet.destroy');
      });

      //Kelompok
      Route::prefix('kelompok')->group(function () {
         Route::get('data', [KelompokController::class, 'index'])->name('dashboard.kelompok.data');
         Route::put('update', [KelompokController::class, 'update'])->name('dashboard.kelompok.update');
      });
   });

   //Presensi CUI
   Route::prefix('cui')->group(function () {
      Route::post('qrcode/scan', [PresensiCuiController::class, 'QRScan'])->name('cui.scan');
      Route::get('status/{code}', [PresensiCuiController::class, 'status'])->name('cui.status');
      Route::get('izin/{code}')->name('cui.izinform');
      Route::post('izin/{code}', [PresensiCuiController::class, 'storeIzin'])->name('cui.izin');
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
   // Route::post('/storepresensi', [PresensiPplkController::class, 'store'])->name('presensi.store');
   // Route::get('/generateQrcode', [QrcodeController::class, 'generateQrCode']);

   //Booklet
   Route::middleware(['checkRole:Mamet,Admin'])->group(function () {
      //CRUD Booklet
      // Route::resource('/booklet', BookletController::class);
   })->prefix('mamet');




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

   // Scoreboard
   // melihat list user pada kelompok
   // Route::get('/kelompok/{id}/user-id', [KelompokController::class, 'getUserIdsByKelompokId']);
   //melihat top 10
   Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase']);
   //melihat kelompok yang tidak masuk top 10
   Route::get('/scoreboard/kelompok/{id}', [ScoreboardController::class, 'getKelompokScore']);

   // Tugas
   Route::get('/tugas/create', [TugasController::class, 'create'])->name('tugas.create');
   Route::post('/tugas', [TugasController::class, 'store'])->name('tugas.store');
   Route::get('/tugas/{id}/edit', [TugasController::class, 'edit'])->name('tugas.edit');
   Route::put('/tugas/{id}', [TugasController::class, 'update'])->name('tugas.update');
   Route::delete('/tugas/{id}', [TugasController::class, 'destroy'])->name('tugas.destroy');
   Route::get('/tugas', [TugasController::class, 'index'])->name('tugas.index');
   Route::get('/tugas/{id}', [TugasController::class, 'show'])->name('tugas.show');
   Route::get('/tugas/{id}/return', [TugasController::class, 'return'])->name('tugas.return');

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
});

require __DIR__ . '/auth.php';
require __DIR__ . '/ui.php';
require __DIR__ . '/game.php';
require __DIR__ . '/guest.php';
