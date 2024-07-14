<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('faq', function () {
        return Inertia::render('FAQ/Page');
    })->name('ucup');

    Route::get('dev', function () {
        return Inertia::render('Dev/Page');
    })->name('dev');

    Route::get('scoreboard', function () {
        return Inertia::render('Scoreboard/Page');
    })->name('scoreboard');

    Route::get('relasi', function () {
        return Inertia::render('Relasi/Page');
    })->name('relasi');
    Route::get('informasi/profil', function () {
        return Inertia::render('Informasi/Profil/Page');
    })->name('informasi/profil');

    Route::get('informasi', function () {
        return Inertia::render('Informasi/Page');
    })->name('informasi');

    Route::get('login', function () {
        return Inertia::render('Login/Page');
    })->name('login');

    Route::get('informasi/km', function () {
        return Inertia::render('Informasi/Km/Page');
    })->name('informasi/km');

    Route::get('informasi/ukm', function () {
        return Inertia::render('Informasi/Ukm/Page');
    })->name('informasi/ukm');

    Route::get('informasi/ukm/detail', function () {
        return Inertia::render('Informasi/Ukm/Detail/Page');
    })->name('informasi/ukm/detail');

});

Route::middleware('auth')->group(function () {
    // Route::get('dev', function () {
    //     return Inertia::render('Dev/Page', [
    //         'username' => auth()->user()->name,
    //         'password' => auth()->user()->password
    //     ]);
    // })->name('dev');
});
