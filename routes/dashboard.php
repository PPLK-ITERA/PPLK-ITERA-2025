<?php
//dashboard

use App\Http\Controllers\Admin\Dashboard\KelompokController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\BookletController;
use App\Http\Controllers\PoinController;
use App\Http\Controllers\TugasController;
use App\Http\Controllers\User\PresensiPplkController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
   Route::prefix('dashboard')->name('dashboard.')->group(function () {
      // =====================================
      // USER CRUD
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
               Route::get('maba', [UserController::class, 'getUsersMaba'])->name('maba.data');
            });

            // =====================================
            // UPDATE DATA USER
            // =====================================
            Route::put('user/update', [UserController::class, 'update'])->name('update');
         });
      });

      // =====================================
      // Booklet CRUD
      // =====================================
      Route::prefix('booklet')->name('booklet.')->group(function () {
         Route::middleware(['checkRole:Mamet,Admin'])->group(function () {
            Route::get('data', [BookletController::class, 'getAllBooklets'])->name('data');
            Route::get('/', [BookletController::class, 'index'])->name('index');
            Route::get('/store', [BookletController::class, 'store'])->name('store');
            Route::put('/update', [BookletController::class, 'update'])->name('update');
            Route::delete('/delete', [BookletController::class, 'destroy'])->name('destroy');
         });
      });

      Route::middleware(['checkRole:Daplok,Mentor,Admin'])->group(function () {

         // =====================================
         // PRESENSI
         // =====================================
         Route::get('presensi-data', [PresensiPplkController::class, 'getAllPresensi'])->name('dashboard.presensi.data');
         Route::post('presensi/store', [PresensiPplkController::class, 'store'])->name('dashboard.presensi.store');
         Route::post('presensi/izin/{id}', [PresensiPplkController::class, 'izin'])->name('dashboard.presensi.izin');

         // =====================================
         // Generate QR Code untuk poin
         // =====================================
         Route::get('/poin-qrcode/{user_id}', [PoinController::class, 'generateQrCode'])->name('dashboard.poin.qrcode');
      });

      Route::middleware('checkRole:Korlap,Admin')->group(function () {
         Route::get('/poin/{user_id}', [PoinController::class, 'index'])->name('dashboard.poin.index');
         Route::post('/poin-store/{user_id}', [PoinController::class, 'store'])->name('dashboard.poin.store');
         Route::get('/poin-redirect/{code}', [PoinController::class, 'redirect'])->name('dashboard.poin.redirect');
      });



      Route::middleware(['checkRole:Mamet,Admin'])->group(function () {


         Route::get('/tugas/{id}/return', [TugasController::class, 'return'])->name('dashboard.tugas.return');
         Route::get('/tugas-data', [TugasController::class, 'getAllTugas'])->name('dashboard.tugas.data');
         Route::get('/tugas-kelompok/data', [TugasController::class, 'getTugasKelompok'])->name('dashboard.tugas.kelompok.data');
      });

      //Kelompok
      Route::prefix('kelompok')->group(function () {
         Route::get('data', [KelompokController::class, 'index'])->name('dashboard.kelompok.data');
         Route::put('update', [KelompokController::class, 'update'])->name('dashboard.kelompok.update');
      });
   });
});