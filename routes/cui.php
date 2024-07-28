<?php

use App\Http\Controllers\User\PresensiCuiController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
   Route::prefix('cui')->group(function () {
      Route::post('qrcode/scan', [PresensiCuiController::class, 'QRScan'])->name('cui.scan');
      Route::get('status/{code}', [PresensiCuiController::class, 'status'])->name('cui.status');
      Route::get('izin/{code}')->name('cui.izinform');
      Route::post('izin/{code}', [PresensiCuiController::class, 'storeIzin'])->name('cui.izin');
      Route::patch('izin/{code}/destroy', [PresensiCuiController::class, 'destroyIzin'])->name('cui.destroy');
      Route::get('logbook', [PresensiCuiController::class, 'getLogbookData'])->name('cui.logbook');
   });
});