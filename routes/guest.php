<?php
// All routes

use App\Http\Controllers\BookletController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\MateriController;
use Illuminate\Support\Facades\Route;

Route::get('faq', [FAQController::class, 'guestIndex'])->name('faq.guestIndex');