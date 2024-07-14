<?php
//TODO: Remove the feedback and response related
use App\Http\Controllers\PresensiPplkController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ScoreboardController;
use App\Http\Controllers\KelompokController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TugasController;
// use App\Http\Controllers\ResponseController;
// use App\Http\Controllers\FeedbackController;





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

   // Profile
   Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
   Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
   Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

   // Scoreboard
   // melihat list user pada kelompok
   Route::get('/kelompok/{id}/user-id', [KelompokController::class, 'getUserIdsByKelompokId']);
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

   //Middleware only mahasiswa
   Route::middleware(['checkRole:mahasiswa'])->group(function () {
   });

   Route::middleware(['checkRole:dapmen,mahasiswa'])->group(function () {
   });
   Route::middleware(['checkRole:dapmen,Admin'])->group(function () {
      //Presensi PPLK
      Route::get('/presensi', [PresensiPplkController::class, 'getAllPresensi'])->name('presensi.index');
      Route::get('/presensi/kelompok/{tanggal_presensi}', [PresensiPplkController::class, 'getUserPresensiByKelompok']);
   });
   Route::middleware(['checkRole:Admin'])->group(function () {
   });


   // Route::post('/feedback', [FeedbackController::class, 'submit'])->name('feedback.submit');
   // Route::get('/follow', [UserController::class, 'followview']);
   // Route::get('/user/feedback', [FeedbackController::class, 'showUserFeedback'])->name('user.feedback');
   // Route::get('/feedback', [FeedbackController::class, 'index'])->name('feedbacks.index');
   // Route::post('/feedback/respond/{id}', [FeedbackController::class, 'respond'])->name('feedback.respond');
   // Route::get('/admin/feedbacks', [FeedbackController::class, 'showAllFeedbacks'])->name('admin.feedbacks');
   // Route::get('/kelompok/{id}/user-id', [KelompokController::class, 'getUserIdsByKelompokId']);
   // Route::get('/kelompok/{id}/total-score', [KelompokController::class, 'getKelompokScore']);
   // Route::get('/scoreboard/top-scores', [ScoreboardController::class, 'getTopScores']);
});



require __DIR__ . '/auth.php';