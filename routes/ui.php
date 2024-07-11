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

    Route::get('scoreboard', function () {
        return Inertia::render('Scoreboard/Page');
    })->name('scoreboard');

    Route::get('relasi', function () {
        return Inertia::render('Relasi/Page');
    })->name('relasi');

    Route::get('login', function () {
        return Inertia::render('Login/Page');
    })->name('login');

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
});

Route::middleware('auth')->group(function () {
    // Route::get('dev', function () {
    //     return Inertia::render('Dev/Page', [
    //         'username' => auth()->user()->name,
    //         'password' => auth()->user()->password
    //     ]);
    // })->name('dev');
});
