<?php
//dashboard

use App\Http\Controllers\Admin\Dashboard\DashboardController;
use App\Http\Controllers\Admin\Dashboard\KelompokController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\TugasController;
use App\Http\Controllers\BookletController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\PoinController;
use App\Http\Controllers\ScoreboardController;
use App\Http\Controllers\User\PresensiPplkController;
use App\Http\Controllers\DokumentasiController;
use App\Http\Controllers\LogKomdisController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
   Route::prefix('dashboard')->name('dashboard.')->middleware('checkRole:Daplok,Mentor,Admin,Pjprodi,Mamet,CustomerService,Korlap')->group(function () {
      Route::get('/', [DashboardController::class, 'index'])->name('index');
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
         Route::middleware(['checkRole:CustomerService,Admin'])->group(function () {
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
            Route::post('store', [UserController::class, 'store'])->name('store');
         });
         Route::middleware('checkRole:Admin')->group(function () {
            Route::delete('delete', [UserController::class, 'destroy'])->name('destroy');
         });


         // =====================================
         // Daplok Mentor Role
         // =====================================
         Route::middleware(['checkRole:Daplok,Mentor,CustomerService,Admin,Mamet'])->group(function () {
            // =====================================
            // USER DATA MABA
            // =====================================
            Route::prefix('data')->name('data.')->group(function () {
               Route::get('maba', [UserController::class, 'getUsersMaba'])->name('maba');
               Route::get('prodi', [UserController::class, 'getProdis'])->name('prodi');
               Route::get('kelompok', [UserController::class, 'getKelompok'])->name('kelompok');
            });

            // =====================================
            // UPDATE DATA USER
            // =====================================
            Route::get('edit/{id}', [UserController::class, 'edit'])->name('edit');
            Route::put('update', [UserController::class, 'update'])->name('update');
            Route::put('edit-foto', [UserController::class, 'editFoto'])->name('edit-foto');
            Route::put('edit-profil', [UserController::class, 'editProfil'])->name('edit-profil');
            Route::put('edit-sosmed', [UserController::class, 'editSosmed'])->name('edit-sosmed');
            Route::put('edit-password', [UserController::class, 'editPassword'])->name('edit-password');
            Route::put('edit-sertif', [UserController::class, 'editSertif'])->name('edit-sertif');
         });
      });
      // ========================================
      // KOMDIS
      // ========================================
      Route::prefix('komdis')->name('komdis.')->middleware('checkRole:Korlap,Admin')->group(function () {
         Route::get('/', [LogKomdisController::class, 'index'])->name('index');
         Route::get('/scanner', [LogKomdisController::class, 'scanner'])->name('scanner'); // TAMBAH INI
         Route::get('/create', [LogKomdisController::class, 'create'])->name('create');
         Route::post('/store', [LogKomdisController::class, 'store'])->name('store');
         Route::get('/edit/{logKomdis}', [LogKomdisController::class, 'edit'])->name('edit');
         Route::put('/update/{logKomdis}', [LogKomdisController::class, 'update'])->name('update');
         Route::delete('/destroy/{logKomdis}', [LogKomdisController::class, 'destroy'])->name('destroy');
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

      // ========================================
      
      // ========================================
      // TAMBAHAN BARU: DOKUMENTASI KEGIATAN 5 HARI   
      // ========================================
   Route::prefix('dokumentasi')->name('dokumentasi.')->group(function () {
   // =====================================
   // User all role - Read-Only
   // =====================================
      // Hanya bisa melihat daftar dan detail dokumentasi (read-only)
      Route::get('/view', [DokumentasiController::class, 'index'])->name('view.index');
      Route::get('/view/{dokumentasi}', [DokumentasiController::class, 'show'])->name('view.show');

      // =====================================
      //  Admin Role - Akses Penuh
      // =====================================
      Route::middleware(['checkRole:Admin'])->group(function () {
         // Route untuk menampilkan daftar dokumentasi
         Route::get('/', [DokumentasiController::class, 'index'])->name('index');
         // Route untuk menampilkan form tambah dokumentasi baru
         Route::get('/create', [DokumentasiController::class, 'create'])->name('create');
         // Route untuk menyimpan dokumentasi baru ke database
         Route::post('/store', [DokumentasiController::class, 'store'])->name('store');
         // Route khusus untuk menghapus foto individual (AJAX support)
         Route::delete('/foto/{fotoDokumentasi}', [DokumentasiController::class, 'deleteFoto'])->name('foto.destroy');
         // Route untuk menampilkan detail dokumentasi spesifik
         Route::get('/{dokumentasi}', [DokumentasiController::class, 'show'])->name('show');
         // Route untuk menampilkan form edit dokumentasi
         Route::get('/{dokumentasi}/edit', [DokumentasiController::class, 'edit'])->name('edit');
         // Route untuk mengupdate dokumentasi yang sudah ada
         Route::put('/{dokumentasi}', [DokumentasiController::class, 'update'])->name('update');
         // Route untuk menghapus dokumentasi (beserta foto-fotonya)
         Route::delete('/{dokumentasi}', [DokumentasiController::class, 'destroy'])->name('destroy');
   });
   });


      // =====================================
      // Materi
      // =====================================
      Route::prefix('materi')->name('materi.')->group(function () {
         Route::middleware(['checkRole:Mamet,Admin'])->group(function () {
            Route::get('data', [MateriController::class, 'getAllMateris'])->name('data');
            Route::get('/', [MateriController::class, 'index'])->name('index');
            Route::post('/store', [MateriController::class, 'store'])->name('store');
            Route::put('/update', [MateriController::class, 'update'])->name('update');
            Route::delete('/delete', [MateriController::class, 'destroy'])->name('destroy');
         });
      });

      // =====================================
      // Presensi
      // =====================================
      Route::prefix('presensi')->name('presensi.')->group(function () {
         // =====================================
         // PRESENSI
         // =====================================
         Route::middleware(['checkRole:Daplok,Mentor,Pjprodi,Admin'])->group(function () {
            Route::get('data/{date}', [PresensiPplkController::class, 'getAllPresensi'])->name('data');
            Route::post('store', [PresensiPplkController::class, 'store'])->name('absen');
            Route::post('izin/{id}', [PresensiPplkController::class, 'updateKehadiran'])->name('izin');
            Route::post('scan', [PresensiPplkController::class, 'QRScan'])->name('scan');
            Route::get('count', [PresensiPplkController::class, 'dataHadir'])->name('count');
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
            Route::middleware('throttle:5,2')->group(function () {
               Route::get('/qrcode/{user_id}', [PoinController::class, 'generateQrCode'])->name('qrcode');
            });
            Route::get('score', [ScoreboardController::class, 'score'])->name('score');
         });
         // =====================================
         // Korlap Role
         // ====================================
         Route::middleware(['checkRole:Korlap,Admin'])->group(function () {
            Route::get('index', [PoinController::class, 'index'])->name('index');
            Route::post('store', [PoinController::class, 'store'])->name('store');
            
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
            Route::get('data/all/{tugas_id}/{no_kelompok}/{status}', [TugasController::class, 'getAllTugas'])->name('data');
            Route::post('/addTugas', [TugasController::class, 'addTugas'])->name('addTugas');
         });
         Route::middleware(['checkRole:Daplok,Mentor,Admin,Mamet'])->group(function () {
            Route::put('/return', [TugasController::class, 'returnTugas'])->name('return');
            Route::put('/return-poster', [TugasController::class, 'returnPoster'])->name('return-poster');

            // =====================================
            // Data
            // =====================================
            Route::prefix('data')->name('data.')->group(function () {
               Route::get('/judulTugas', [TugasController::class, 'getJudulTugas'])->name('judulTugas');
               Route::get('/user/{id}', [TugasController::class, 'getTugasUser'])->name('user');
               Route::get('/kelompok', [TugasController::class, 'getTugasKelompok'])->name('kelompok');
               Route::get('/poster', [TugasController::class, 'getPoster'])->name('poster');
            });
         });
      });

      // =====================================
      // Kelompok
      // =====================================
      Route::prefix('kelompok')->name('kelompok.')->middleware('checkRole:Daplok,Mentor,Admin')->group(function () {
         // Route::get('data', [KelompokController::class, 'index'])->name('data');
         Route::put('update', [KelompokController::class, 'update'])->name('update');
         Route::get('data', [KelompokController::class, 'getKelompok'])->name('data');
         Route::put('set-ketua', [UserController::class, 'setKetua'])->name('set-ketua');
      });

      // =====================================
      // FAQ
      // =====================================
      Route::prefix('faq')->name('faq.')->middleware('checkRole:CustomerService,Admin')->group(function () {
         Route::get('/data', [FAQController::class, 'getAllFAQ'])->name('data');
         Route::post('/', [FAQController::class, 'store'])->name('store');
         Route::put('/', [FAQController::class, 'update'])->name('update');
         Route::delete('/', [FAQController::class, 'destroy'])->name('destroy');
      });
   });
});
