<?php

use App\Http\Controllers\ExchangeRateController;
use App\Http\Controllers\GetCurrenciesController;
use App\Http\Controllers\GetStartNewsController;
use App\Http\Controllers\SendFeedbackController;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function(){
    // Ambos os middleware //
    Route::post('/send_feedback', SendFeedbackController::class)->name('send_feedback');

    Route::middleware('guest')->group(function() {
        Route::get('/get_currencies', GetCurrenciesController::class)->name('get_currencies');
        Route::get('/exchange_rate', ExchangeRateController::class)->name('exchange_rate');
        Route::post('/get_start_news', GetStartNewsController::class)->name('get_start_news');
    });


    Route::middleware('auth:sanctum')->group(function (){
        // Ainda não sei que tipo de funcionalidade vai precisar que o usuário esteja autenticado //
        // Provavelmente apenas autenticaçaõ e permissões //
    });

});


