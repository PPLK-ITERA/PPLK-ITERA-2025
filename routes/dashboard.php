<?php
//dashboard

use App\Http\Controllers\Admin\Dashboard\KelompokController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\BookletController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\PoinController;
use App\Http\Controllers\TugasController;
use App\Http\Controllers\User\PresensiPplkController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
   Route::prefix('dashboard')->name('dashboard.')->group(function () {

      // =====================================
      // USER
      // =====================================
      Route::prefix('user')->name('user.')->group(function () {
         // =====================================
         // All Role
         // =====================================
         Route::get('/', [UserController::class, 'index'])->name('index');

         // =====================================
         // Admin Role
         // =====================================
         Route::middleware(['checkRole:Admin'])->group(function () {
            // =====================================
            // USER DATA EXCEPT MABA
            // =====================================
            Route::prefix('data')->name('data.')->group(function () {
               Route::get('all', [UserController::class, 'getUsers'])->name('all');
               Route::get('dapmen', [UserController::class, 'getUsersDapmen'])->name('dapmen');
               Route::get('pjprodi', [UserController::class, 'getUsersPjprodi'])->name('pjprodi');
               Route::get('korlap', [UserController::class, 'getUsersKorlap'])->name('korlap');
               Route::get('mamet', [UserController::class, 'getUsersMamet'])->name('mamet');
            });

            // =====================================
            // CRUD USER
            // =====================================
            Route::get('store', [UserController::class, 'store'])->name('store');
            Route::delete('delete', [UserController::class, 'delete'])->name('destroy');
         });

         // =====================================
         // Daplok Mentor Role
         // =====================================
         Route::middleware(['checkRole:Daplok,Mentor,Admin'])->group(function () {
            // =====================================
            // USER DATA MABA
            // =====================================
            Route::prefix('data')->name('data.')->group(function () {
               Route::get('maba', [UserController::class, 'getUsersMaba'])->name('maba');
            });

            // =====================================
            // UPDATE DATA USER
            // =====================================
            Route::put('user/update', [UserController::class, 'update'])->name('update');
         });
      });

      // =====================================
      // Booklet
      // =====================================
      Route::prefix('booklet')->name('booklet.')->group(function () {
         Route::middleware(['checkRole:Mamet,Admin'])->group(function () {
            Route::get('data', [BookletController::class, 'getAllBooklets'])->name('data');
            Route::get('/', [BookletController::class, 'index'])->name('index');
            Route::post('/store', [BookletController::class, 'store'])->name('store');
            Route::put('/update', [BookletController::class, 'update'])->name('update');
            Route::delete('/delete', [BookletController::class, 'destroy'])->name('destroy');
         });
      });

      // =====================================
      // Presensi
      // =====================================
      Route::prefix('presensi')->name('presensi.')->group(function () {
         // =====================================
         // PRESENSI
         // =====================================
         Route::middleware(['checkRole:Daplok,Mentor,PjProdi,Admin'])->group(function () {
            Route::get('data', [PresensiPplkController::class, 'getAllPresensi'])->name('data');
            Route::post('store', [PresensiPplkController::class, 'store'])->name('absen');
            Route::post('izin/{id}', [PresensiPplkController::class, 'izin'])->name('izin');
            Route::post('scan', [PresensiPplkController::class, 'QRScan'])->name('scan');
         });
      });

      // =====================================
      // Poin Offline
      // =====================================
      Route::prefix('poin')->name('poin.')->group(function () {
         // =====================================
         // Dapmen Role
         // =====================================
         Route::middleware(['checkRole:Daplok,Mentor,Admin'])->group(function () {
            // =====================================
            // Generate QR Code untuk poin
            // =====================================
            Route::get('/qrcode/{user_id}', [PoinController::class, 'generateQrCode'])->name('qrcode');
         });
         // =====================================
         // Korlap Role
         // ====================================
         Route::middleware('checkRole:Korlap,Admin')->group(function () {
            Route::get('index/{user_id}', [PoinController::class, 'index'])->name('index');
            Route::post('/store/{user_id}', [PoinController::class, 'store'])->name('dashboard.poin.store');
         });
      });

      // =====================================
      // Tugas
      // =====================================
      Route::prefix('tugas')->name('tugas.')->group(function () {
         // =====================================
         // Mamet Role
         // =====================================
         Route::middleware(['checkRole:Mamet,Admin'])->group(function () {
            Route::get('/return/{id}', [TugasController::class, 'return'])->name('return');

            // =====================================
            // Data
            // =====================================
            Route::prefix('data')->name('data.')->group(function () {
               Route::get('/all', [TugasController::class, 'getAllTugas'])->name('all');
               Route::get('/individu', [TugasController::class, 'getTugasIndividu'])->name('individu');
               Route::get('/kelompok', [TugasController::class, 'getTugasKelompok'])->name('kelompok');
            });
         });
      });

      // =====================================
      // Kelompok
      // =====================================
      Route::prefix('kelompok')->name('kelompok.')->group(function () {
         Route::get('data', [KelompokController::class, 'index'])->name('data');
         Route::put('update', [KelompokController::class, 'update'])->name('update');
      });

      // =====================================
      // FAQ
      // =====================================
      Route::prefix('faq')->name('faq.')->group(function () {
         Route::get('/data', [FAQController::class, 'getAllFAQ'])->name('data');
         Route::post('/', [FAQController::class, 'store'])->name('store');
         Route::put('/', [FAQController::class, 'update'])->name('update');
         Route::delete('/', [FAQController::class, 'destroy'])->name('destroy');
      });
   });
});