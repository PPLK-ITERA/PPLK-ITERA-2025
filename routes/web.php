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
         Route::post('/follow/{id}', [UserController::class, 'follow'])->name('follow.maba');
         //get other user profile by id
         Route::get('/profile/{id}', [UserController::class, 'profile'])->name('profile');
      });


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

   });

   require __DIR__ . '/auth.php';
   require __DIR__ . '/ui.php';
   require __DIR__ . '/game.php';
   require __DIR__ . '/guest.php';
   require __DIR__ . '/relasi.php';
   require __DIR__ . '/dashboard.php';
