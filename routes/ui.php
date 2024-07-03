<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('faq', function(){
        return Inertia::render('FAQ');
    })->name('faq');
});

Route::middleware('auth')->group(function () {
    
});
