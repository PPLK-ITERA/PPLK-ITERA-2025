<?php

use App\Http\Controllers\Auth\AuthenticatedController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('login', function () {
//    if (auth()->check()) {
//       return redirect()->route('dashboard.index');
//    }
//    // return Inertia::render('Login');
// })->name('login');

Route::middleware('guest')->group(function () {
   Route::get('login', [AuthenticatedController::class, 'create'])->name('login');
   Route::post('login', [AuthenticatedController::class, 'store']);
});

Route::middleware('auth')->group(function () {
   Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
      ->name('password.confirm');

   Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

   Route::put('password', [PasswordController::class, 'update'])->name('password.update');

   Route::post('logout', [AuthenticatedController::class, 'destroy'])
      ->name('logout');
});
