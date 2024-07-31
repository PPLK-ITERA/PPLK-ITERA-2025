<?php

Route::middleware('auth')->get('/csrf-token', function (Request $request) {
    return response()->json(['csrfToken' => csrf_token()]);
})->name("csrf");