<?php
use App\Http\Controllers\Pilar\AnswerController;
use App\Http\Controllers\Pilar\PilarController;
use App\Http\Controllers\Pilar\QuestionController;
use App\Http\Controllers\Pilar\ResultController;



Route::middleware('auth')->prefix('asesmen')->group(function () {
    abort(404);
    Route::get('/', [QuestionController::class, 'index'])->name('asesmen.index');
    Route::get('/questions', [QuestionController::class, 'getQuestions'])->name('asesmen.question');
    Route::post('/question/{question_id}/answer/{answer_id}', [AnswerController::class, 'store'])->name('asesmen.answer');
    Route::get('/result', [PilarController::class, 'index'])->name('asesmen.result');
});