<?php

use App\Http\Controllers\BookletController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('faq', function () {
//    return Inertia::render('FAQ/Page');
// })->name('faq');

Route::get('ketentuan-atribut', function () {
   return Inertia::render('Atribut/Page');
})->name('ketentuan-atribut');

Route::get('dev-team', function () {
   return Inertia::render('Dev/Page');
})->name('dev-team');

Route::get('informasi/km', function () {
   return Inertia::render('Informasi/Km/Page');
})->name('informasi/km');

Route::get('informasi/ukm', function () {
   return Inertia::render('Informasi/Ukm/Page');
})->name('informasi/ukm');

Route::get('informasi/ukm/{nama_ukm}', function (string $nama_ukm) {
   return Inertia::render('Informasi/Ukm/Detail/Page', [
      'nama_ukm' => $nama_ukm
   ]);
})->name('informasi/ukm/{nama_ukm}');

Route::get('informasi/upt', function () {
   return Inertia::render('Informasi/Upt/Page');
})->name('informasi/upt');

Route::get('informasi/upt/{nama_upt}', function (string $nama_upt) {
   return Inertia::render('Informasi/Upt/Detail/Page', [
      'nama_upt' => $nama_upt
   ]);
})->name('informasi/upt/{nama_ukm}');

Route::get('informasi/pplk', function () {
   return Inertia::render('Informasi/Pplk/Page');
})->name('informasi/pplk');

// Route::get('booklet', [BookletController::class, 'index'])->name('booklet');

Route::get('informasi/maskot', function () {
   return Inertia::render('Maskot/Page');
})->name('informasi/maskot');

Route::get('informasi/profil', function () {
   return Inertia::render('Informasi/Profil/Page');
})->name('informasi/profil');

Route::get('informasi/fakultas', function () {
   return Inertia::render('Informasi/Fakultas/Page');
})->name('informasi/fakultas/Sains');

Route::get('informasi/fakultas/Ftik', function () {
   return Inertia::render('Informasi/Fakultas/Ftik');
})->name('informasi/fakultas/Ftik');

Route::get('informasi/fakultas/Fti', function () {
   return Inertia::render('Informasi/Fakultas/Fti');
})->name('informasi/fakultas/Fti');

Route::get('informasi/prodi', function () {
   return Inertia::render('Informasi/Prodi/Page');
})->name('informasi/prodi');

Route::get('informasi/prodi/detail', function () {
   return Inertia::render('Informasi/Prodi/Detail/Page');
})->name('informasi/prodi/detail');

Route::middleware('auth')->group(function () {
   Route::get('profile', function () {
      return Inertia::render('Profile/Page');
   })->name('my-profile');

   Route::get('dashboard', function () {
      return Inertia::render('Dashboard/Page');
   })->name('dashboard');

   Route::get('dashboard/employee', function () {
      return Inertia::render('Dashboard/employee/Page');
   })->name('dashboard/employe');

   Route::get('dashboard/kanban', function () {
      return Inertia::render('Dashboard/kanban/Page');
   })->name('dashboard/kanban');

   Route::get('dashboard/profile', function () {
      return Inertia::render('Dashboard/profile/Page');
   })->middleware('checkRole:Admin', 'checkRole:Maba')->name('dashboard/profile');

   // Route::get('dashboard/user', function () {
   //    return Inertia::render('Dashboard/user/Page');
   // })->name('dashboard/user');

   Route::get('dashboard/atur-maba', function () {
      return Inertia::render('Dashboard/atur-maba/Page');
   })->name('dashboard/atur-maba');

   Route::get('dashboard/atur-dapmen', function () {
      return Inertia::render('Dashboard/atur-dapmen/Page');
   })->name('dashboard/atur-dapmen');

   Route::get('dashboard/atur-korlap', function () {
      return Inertia::render('Dashboard/atur-korlap/Page');
   })->name('dashboard/atur-korlap');

   Route::get('dashboard/atur-pjprodi', function () {
      return Inertia::render('Dashboard/atur-pjprodi/Page');
   })->name('dashboard/atur-pjprodi');

   Route::get('dashboard/absensi-maba', function () {
      return Inertia::render('Dashboard/absensi-maba/Page');
   })->name('dashboard/absensi-maba');

   // Route::get('dashboard/faq', function () {
   //    return Inertia::render('Dashboard/faq/Page');
   // })->name('dashboard/faq');

   // Route::get('dashboard/booklet', function () {
   //    return Inertia::render('Dashboard/booklet/Page');
   // })->name('dashboard/booklet');

   Route::get('dashboard/mading', function () {
      return Inertia::render('Dashboard/mading/Page');
   })->name('dashboard/mading');

   Route::get('scoreboard', function () {
      return Inertia::render('Scoreboard/Page');
   })->name('scoreboard');

   Route::get('relasi', function () {
      return Inertia::render('Relasi/Page');
   })->name('relasi');

   Route::get('relasi/search', function () {
      return Inertia::render('Relasi/Search/Page');
   })->name('relasi/search');

   Route::get('relasi/profil', function () {
      return Inertia::render('Relasi/Profil/Page');
   })->name('relasi/profil');
});
