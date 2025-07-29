<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeslaController;

// BACKEND API ROUTES (CRUD)
Route::prefix('api/tesla')->group(function () {
    Route::get('/', [TeslaController::class, 'adminIndex']);
    Route::get('/{id}', [TeslaController::class, 'show']);
    Route::post('/', [TeslaController::class, 'store']);
    Route::put('/{id}', [TeslaController::class, 'update']);
    Route::delete('/{id}', [TeslaController::class, 'destroy']);
});

// FRONTEND ROUTES (UI)
Route::get('api/get-tesla', [TeslaController::class, 'showTTS']);
Route::post('api/tesla/jawab/{nomor}', [TeslaController::class, 'cekJawaban']);

Route::middleware('auth')->get('/tesla', function () {
    return Inertia\Inertia::render('Tesla/Page');
})->name('admin.tesla');

// (Opsional) Route inertia admin UI
Route::middleware(['auth', 'checkRole:Admin'])->get('/admin/tesla-ui', function () {
    return Inertia\Inertia::render('Tesla/AdminPage');
})->name('admin.tesla.ui');
