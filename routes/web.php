<?php
//TODO: Remove the feedback and response related
use App\Http\Controllers\PresensiPplkController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QrcodeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ScoreboardController;
use App\Http\Controllers\KelompokController;
use App\Http\Controllers\PresensiCuiController;
use App\Http\Controllers\UserController;
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

   // Profile

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

   // Scoreboard
   // melihat list user pada kelompok
   Route::get('/kelompok/{id}/user-id', [KelompokController::class, 'getUserIdsByKelompokId']);
   //melihat top 10
   Route::get('/scoreboard/top-score', [ScoreboardController::class, 'getTotalScoresFromDatabase']);
   //melihat kelompok yang tidak masuk top 10
   Route::get('/scoreboard/kelompok/{id}', [ScoreboardController::class, 'getKelompokScore']);

   //Presensi CUI
   Route::group(['prefix' => 'cui'], function () {
      Route::post('qrcode/scan', [PresensiCuiController::class, 'QRScan'])->name('cui.scan');
      Route::get('status/{code}', [PresensiCuiController::class, 'status'])->name('cui.status');
      Route::get('izin/{code}')->name('cui.izinform');
      Route::patch('izin/{code}', [PresensiCuiController::class, 'storeIzin'])->name('cui.izin');
      Route::patch('izin/{code}/destroy', [PresensiCuiController::class, 'destroyIzin'])->name('cui.destroy');
   });;

   //Middleware only maba
   Route::middleware(['checkRole:maba'])->group(function () {
      //Followers
      //top 3 followers
      Route::get('/top-followers', [UserController::class, 'topFollowers']);
      //search maba
      Route::post('/search', [UserController::class, 'search']);
      //seluruh list maba
      Route::get('/list-maba', [UserController::class, 'listMaba']);
      //follow button
      Route::post('/follow/{id}', [UserController::class, 'follow'])->name('follow');
   });

   Route::middleware(['checkRole:dapmen,mahasiswa'])->group(function () {
   });
   Route::middleware(['checkRole:dapmen,Admin'])->group(function () {
      //Presensi PPLK
      Route::get('/presensi', [PresensiPplkController::class, 'getAllPresensi'])->name('presensi.index');
      Route::get('/presensi/kelompok/{tanggal_presensi}', [PresensiPplkController::class, 'getUserPresensiByKelompok']);
      Route::get('/presensi/{prodi_id}/{tanggal_presensi}', [PresensiPplkController::class, 'getUserPresensiByProdi']);
   });
   Route::middleware(['checkRole:Admin'])->group(function () {
   });

   // Route::post('/storepresensi', [PresensiPplkController::class,'store'])->name('presensi.store');
   // Route::get('/generateQrcode', [QrcodeController::class, 'generateQrCode']);
});
require __DIR__ . '/auth.php';
require __DIR__ . '/ui.php';
