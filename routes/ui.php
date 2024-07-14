<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('faq', function () {
        return Inertia::render('FAQ/Page');
    })->name('faq');

    Route::get('ketentuan-atribut', function () {
        return Inertia::render('Atribut/Page');
    })->name('ketentuan-atribut');

    Route::get('dev', function () {
        return Inertia::render('Dev/Page');
    })->name('dev');

    Route::get('scoreboard', function () {
        return Inertia::render('Scoreboard/Page');
    })->name('scoreboard');

    Route::get('relasi', function () {
        return Inertia::render('Relasi/Page');
    })->name('relasi');

    Route::get('relasi/profil', function () {
        return Inertia::render('Relasi/Profil/Page');
    })->name('relasi/profil');

    Route::get('relasi/search', function () {
        return Inertia::render('Relasi/Search/Page');
    })->name('relasi/search');

    Route::get('informasi/km', function () {
        return Inertia::render('Informasi/Km/Page');
    })->name('informasi/km');

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

    Route::get('login', function () {
        return Inertia::render('Login/Page');
    })->name('login');

    Route::get('booklet', function () {
        return Inertia::render('Booklet/Page');
    })->name('booklet');

    Route::get('maskot', function () {
        return Inertia::render('Maskot/Page');
    })->name('maskot');

    Route::get('informasi/profil', function () {
        return Inertia::render('Informasi/Profil/Page');
    })->name('informasi/profil');

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
    })->name('dashboard/profile');

    Route::get('dashboard/user', function () {
        return Inertia::render('Dashboard/user/Page');
    })->name('dashboard/user');

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

    Route::get('dashboard/faq', function () {
        return Inertia::render('Dashboard/faq/Page');
    })->name('dashboard/faq');

    Route::get('dashboard/booklet', function () {
        return Inertia::render('Dashboard/booklet/Page');
    })->name('dashboard/booklet');

    Route::get('dashboard/mading', function () {
        return Inertia::render('Dashboard/mading/Page');
    })->name('dashboard/mading');
});

Route::middleware('auth')->group(function () {
    // Route::get('dev', function () {
    //     return Inertia::render('Dev/Page', [
    //         'username' => auth()->user()->name,
    //         'password' => auth()->user()->password
    //     ]);
    // })->name('dev');
});
