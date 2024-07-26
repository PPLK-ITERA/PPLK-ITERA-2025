<?php
// All routes

use App\Http\Controllers\BookletController;
use App\Http\Controllers\FAQController;
use Illuminate\Support\Facades\Route;

Route::get('faq', [FAQController::class, 'guestIndex'])->name('faq.guestIndex');
Route::get('booklets', [BookletController::class, 'guestIndex'])->name('booklets.guestIndex');