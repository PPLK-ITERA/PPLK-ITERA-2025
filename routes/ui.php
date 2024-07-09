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

    Route::get('informasi', function () {
        return Inertia::render('Informasi/Page');
    })->name('informasi');

    Route::get('atribut', function () {
        return Inertia::render('Atribut/Page');
    })->name('atribut');
});

Route::middleware('auth')->group(function () {
    // Route::get('dev', function () {
    //     return Inertia::render('Dev/Page', [
    //         'username' => auth()->user()->name,
    //         'password' => auth()->user()->password
    //     ]);
    // })->name('dev');
});
