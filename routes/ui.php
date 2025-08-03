<?php

use App\Http\Controllers\FAQController;
use App\Http\Controllers\MadingController;
use App\Http\Controllers\User\PresensiCuiController;
use App\Http\Controllers\BookletController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\User\PresensiPplkController;
use App\Models\PengumpulanTugas;
use App\Models\Tugas;
use Illuminate\Http\Client\HttpClientException;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpException;

// =====================================
// GAME (Guest)
// =====================================
// Route::get('game', function () {
//    return Inertia::render('Game/Page');
// })->name('game');


// =====================================
// FAKULTAS (Guest)
// =====================================
Route::get('informasi/fakultas', function () {
   return Inertia::render('Informasi/Fakultas/Page');
})->name('informasi/fakultas/Sains');

Route::get('informasi/fakultas/Ftik', function () {
   return Inertia::render('Informasi/Fakultas/Ftik');
})->name('informasi/fakultas/Ftik');

Route::get('informasi/fakultas/Fti', function () {
   return Inertia::render('Informasi/Fakultas/Fti');
})->name('informasi/fakultas/Fti');


// =====================================
// PRODI (Guest)
// =====================================
Route::get('informasi/prodi', function () {
   return Inertia::render('Informasi/Prodi/Page');
})->name('informasi/prodi');

Route::get('informasi/prodi/{prodi}', function (string $prodi) {
   return Inertia::render('Informasi/Prodi/Detail/Page', [
      'prodi' => $prodi
   ]);
})->name('informasi/prodi/{prodi}');


// =====================================
// UPT & UKM (Guest)
// =====================================
Route::get('informasi/upa', function () {
   return Inertia::render('Informasi/Upa/Page');
})->name('informasi/upa');

Route::get('informasi/upa/{nama_upa}', function (string $nama_upa) {
   return Inertia::render('Informasi/Upa/Detail/Page', [
      'nama_upa' => $nama_upa
   ]);
})->name('informasi/upt/{nama_upa}');


// =====================================
// FAQ (Guest)
// =====================================
Route::get('faq', function () {
   return Inertia::render('FAQ/Page');
})->name('faq');


// =====================================
// Ketentuan Atribut (Guest)
// =====================================
Route::get('ketentuan-atribut', function () {
   return Inertia::render('Atribut/Page');
})->name('ketentuan-atribut');


// =====================================
// Dev Team (Guest)
// =====================================
Route::get('dev-team', function () {
   return Inertia::render('Dev/Page');
})->name('dev-team');

Route::get('dev', function () {
   return Inertia::render('Dev/Page');
})->name('dev');
Route::get('developer', function () {
   return Inertia::render('Dev/Page');
})->name('developer');
Route::get('team', function () {
   return Inertia::render('Dev/Page');
})->name('team');
Route::get('devs', function () {
   return Inertia::render('Dev/Page');
})->name('devs');
Route::get('kartatera', function () {
   return Inertia::render('Dev/Page');
})->name('kartatera');
Route::get('imtek', function () {
   return Inertia::render('Dev/Page');
})->name('imtek');
Route::get('admin', function () {
   return Inertia::render('Dev/Page');
})->name('admin');
Route::get('kadiv', function () {
   return Inertia::render('Dev/Page');
})->name('kadiv');
Route::get('wp-admin', function () {
   return Inertia::render('Dev/Page');
})->name('wp-admin');
Route::get('wp-content', function () {
   return Inertia::render('Dev/Page');
})->name('wp-content');
Route::get('wp-json', function () {
   return Inertia::render('Dev/Page');
})->name('wp-json');
Route::get('404', function () {
   return Inertia::render('Dev/Page');
})->name('404');
Route::get('auth', function () {
   return Inertia::render('Dev/Page');
})->name('auth');
Route::get('auth.php', function () {
   return Inertia::render('Dev/Page');
})->name('auth.php');

Route::get('lagu', function () {
   return Inertia::render('Lagu/Page');
})->name('lagu');


// =====================================
// KM ITERA (Guest)
// =====================================
Route::get('informasi/km', function () {
   return Inertia::render('Informasi/Km/Page');
})->name('informasi/km');


// =====================================
// UKM (Guest)
// =====================================
Route::get('informasi/ukm', function () {
   return Inertia::render('Informasi/Ukm/Page');
})->name('informasi/ukm');

Route::get('informasi/ukm/detail', function () {
   return Inertia::render('Informasi/Ukm/Detail/Page');
})->name('informasi/ukm/detail');

Route::get('informasi/ukm/{nama_ukm}', function (string $nama_ukm) {
   return Inertia::render('Informasi/Ukm/Detail/Page', [
      'nama_ukm' => $nama_ukm
   ]);
})->name('informasi/ukm/{nama_ukm}');

Route::get('informasi/pplk', function () {
   return Inertia::render('Informasi/Pplk/Page');
})->name('informasi/pplk');

Route::get('informasi/lppm', function () {
   return Inertia::render('Informasi/Lppm/Page');
})->name('informasi/lppm');

Route::get('informasi/senat', function () {
   return Inertia::render('Informasi/Senat/Page');
})->name('informasi/senat');

Route::get('informasi/divisi', function () {
   return Inertia::render('Informasi/Divisi/Page');
})->name('informasi/divisi');

Route::get('dokumentasi', function () {
   return Inertia::render('Dokumentasi/Page');
})->name('dokumentasi');

Route::get('tesla', function () {
   return Inertia::render('Tesla/Page');
})->name('tesla');

Route::get('petaka', function () {
   return Inertia::render('Petaka/Page');
})->name('petaka');

Route::get('map', function () {
   return Inertia::render('Map/Page');
})->name('map');

Route::get('chekPoint', function () {
   return Inertia::render('ChekPoint/Page');
})->name('chekPoint');



// =====================================
// Booklet (Guest)
// =====================================
Route::get('booklet', [BookletController::class, 'guestIndex'])->name('booklet');


// =====================================
// Materi (Guest)
// =====================================
Route::get('materi', [MateriController::class, 'guestIndex'])->name('materi');

// =====================================
// Maskot (Guest)
// =====================================
Route::get('informasi/maskot', function () {
   // lempar ke 404
   // abort(404);
   return Inertia::render('Maskot/Page');
})->name('informasi/maskot');

Route::middleware('auth')->group(function () {
   // =====================================
   // Profile (Auth)
   // =====================================
   // Route::get('my-profile', function () {
   //    return Inertia::render('Profile/Page');
   // })->name('my-profile');


   // =====================================
   // Dashboard (Auth)
   // =====================================



   // =====================================
   // Dashboard Employee (Auth)
   // =====================================
   Route::get('dashboard/employee', function () {
      return Inertia::render('Dashboard/employee/Page');
   })->name('dashboard/employe');


   // =====================================
   // Dashboard Kanban (Auth)
   // =====================================
   Route::get('dashboard/kanban', function () {
      return Inertia::render('Dashboard/kanban/Page');
   })->name('dashboard/kanban');


   // =====================================
   // Dashboard Profile (Auth)
   // =====================================
   Route::get('dashboard/profile', function () {
      return Inertia::render('Dashboard/profile/Page');
   })->middleware('checkRole:Admin', 'checkRole:Maba')->name('dashboard/profile');


   // =====================================
   // Dashboard User (Auth)
   // =====================================
   // Route::get('dashboard/user', function () {
   //    return Inertia::render('Dashboard/user/Page');
   // })->name('dashboard/user');


   // =====================================
   // Dashboard Atur Maba (Auth)
   // =====================================
   Route::get('dashboard/atur-maba', function () {
      return Inertia::render('Dashboard/atur-maba/Page');
   })->name('dashboard.atur-maba');


   // =====================================
   // Dashboard Atur Dapmen (Auth)
   // =====================================
   Route::get('dashboard/atur-dapmen', function () {
      return Inertia::render('Dashboard/atur-dapmen/Page');
   })->name('dashboard/atur-dapmen');


   // =====================================
   // Dashboard Atur Korlap (Auth)
   // =====================================
   Route::get('dashboard/atur-korlap', function () {
      return Inertia::render('Dashboard/atur-korlap/Page');
   })->name('dashboard/atur-korlap');


   // =====================================
   // Dashboard Atur PJ Prodi (Auth)
   // =====================================
   Route::get('dashboard/atur-pjprodi', function () {
      return Inertia::render('Dashboard/atur-pjprodi/Page');
   })->name('dashboard/atur-pjprodi');


   // =====================================
   // Dashboard Absensi Maba (Auth)
   // =====================================
   Route::get('dashboard/absensi-maba', [PresensiPplkController::class, 'index'])->name('dashboard.absensi-maba');

   Route::get('dashboard/absensi-maba/presensi', function () {
      return Inertia::render('Dashboard/absensi-maba/absensi/Page');
   })->name('dashboard.absensi-maba/presensi');


   // =====================================
   // Dashboard FAQ (Auth)
   // =====================================
   Route::get('dashboard/faq', [
      FAQController::class,
      'index'
   ])->name('dashboard.faq');


   // =====================================
   // Dashboard Booklet (Auth)
   // =====================================
   // Route::get('dashboard/booklet', function () {
   //    return Inertia::render('Dashboard/booklet/Page');
   // })->name('dashboard/booklet');


   // =====================================
   // Dashboard Mading (Auth)
   // =====================================
   Route::get('dashboard/mading', function () {
      return Inertia::render('Dashboard/mading/Page');
   })->name('dashboard/mading');

   Route::get('dashboard/pengumpulan-tugas', function () {
      return Inertia::render('Dashboard/pengumpulan-tugas/Page');
   })->name('dashboard/pengumpulan-tugas');


   // =====================================
   // Dashboard Dapmen Menu (Auth)
   // =====================================
   Route::get('dashboard/informasi-kelompok', function () {
      return Inertia::render('Dashboard/informasi-kelompok/Page');
   })->name('informasi-kelompok');

   // Route::get('dashboard/edit-user/{user_id}', function ($user_id) {
   //    return Inertia::render('Dashboard/informasi-kelompok/detail-maba/Page');
   // })->name('dashboard/edit-user');

   // =====================================
   // Dashboard CUI(Auth)
   // =====================================
   Route::get('dashboard/cui/absensi', [PresensiCuiController::class, 'absensi'])
      ->name('dashboard.cui.absensi');

   Route::get('dashboard/cui/absensi/result', [PresensiCuiController::class, 'result'])
      ->name('dashboard.cui.result');

   Route::get('dashboard/cui', [PresensiCuiController::class, 'index'])
      ->name('dashboard.cui');

   Route::get('dashboard/cui/data', [PresensiCuiController::class, 'getLogBook'])
      ->name('dashboard.cui.data');

   Route::get('dashboard/cui/{name}', [PresensiCuiController::class, 'getMabaByName'])->name('dashboard.cui.detail');

   Route::get('dashboard/cui/izin/{qrcode}', [PresensiCuiController::class, 'indexIzin'])
      ->name('dashboard.cui.izin');




   // =====================================
   // Scoreboard (Auth)
   // =====================================
   Route::get('scoreboard', function () {
      return Inertia::render('Scoreboard/Page');
   })->name('scoreboard');


   // =====================================
   // Relasi (Auth)
   // =====================================
   // Route::get('relasi', function () {
   //    return Inertia::render('Relasi/Page');
   // })->name('relasi');

   // Route::get('relasi/search', function () {
   //    return Inertia::render('Relasi/Search/Page');
   // })->name('relasi/search');

   // Route::get('relasi/profil/{id}', function (int $id) {
   //    return Inertia::render('Relasi/Profil/Page', [
   //       'id' => $id
   //    ]);
   // })->name('relasi/profil');



   // =====================================
   // Game Offline (Auth)
   // =====================================
   Route::get('dashboard/game-offline', function () {
      return Inertia::render('Dashboard/game-offline/Page');
   })->name('dashboard/game-offline');


   // =====================================
   // Mading (Auth)
   // =====================================
   Route::get('mading', function () {
      return Inertia::render('Mading/Page');
   })->name('mading');

   Route::get('mading/pengumpulan/{id}', function (string $id) {
      // TODO: cek apakah tugas hari ini ada atau tidak

      // $pengumpulanTugas = PengumpulanTugas::with([
      //    'tugas',
      //    function ($query) use ($id) {
      //       $query->where('hari', $id);
      //    }
      // ])->where('user_id', auth()->user()->id)->first();

      // $pengumpulanTugas = Tugas::with([
      //    'pengumpulanTugas' => function ($query) {
      //       $query->where('user_id', auth()->user()->id);
      //    }
      // ])->where('hari', $id)->first();

      // $tugasIds = Tugas::all()->pluck('id')->toArray();

      // if (!in_array($id, $tugasIds)) {
      //    return to_route("mading");
      // }

      // if ($pengumpulanTugas && !$pengumpulanTugas->isReturn) {
      //    return to_route("mading");
      // }


      return Inertia::render('Mading/Pengumpulan/Page', [
         'id' => $id
      ]);
   })->name('mading/pengumpulan');

   Route::get('mading/pengumpulan-cover/{hari}', function (string $hari) {
      // abort(404);

      return Inertia::render('Mading/PengumpulanCover/Page', [
         'hari' => $hari
      ]);
   })->name('mading/pengumpulan-cover');

   // =====================================
   // Manage Tugas (Auth)
   // =====================================
   // Route::get('/dashboard/mading', function () {
   //    return Inertia::render('Dashboard/mading/Page');
   // })->name('/dashboard/mading');

   Route::get('/dashboard/mading/detail', function () {
      return Inertia::render('ManageTugas/Detail/Page');
   })->name('/dasboard/mading/detail');

   Route::get('/dashboard/mading/user/{id}', function ($id) {
      return Inertia::render('Dashboard/mading/user/Page', [
         'id' => $id
      ]);
   })->name('/dashboard/mading/user/{id}');

   Route::get('ganti-password', function () {
      return Inertia::render('GantiPassword/Page');
   })->name('ganti-password');


   Route::get('dashboard/create-user', function () {
      return Inertia::render('Dashboard/create-user/Page');
   })->name('dashboard/create-user');
});

