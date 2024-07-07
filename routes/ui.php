<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('faq', function () {
        return Inertia::render('FAQ/Page');
    })->name('faq');

    Route::get('dev', function () {
        return Inertia::render('Dev/Page');
    })->name('dev');

    Route::get('informasi/profil', function () {
        return Inertia::render('Informasi/Profil/Page');
    })->name('informasi/profil');

    Route::get('scoreboard', function () {
        return Inertia::render('Scoreboard/Page');
    })->name('scoreboard');

    Route::get('relasi', function () {
        return Inertia::render('Relasi/Page');
    })->name('relasi');
});

Route::middleware('auth')->group(function () {
    // Route::get('dev', function () {
    //     return Inertia::render('Dev/Page', [
    //         'username' => auth()->user()->name,
    //         'password' => auth()->user()->password
    //     ]);
    // })->name('dev');
});
