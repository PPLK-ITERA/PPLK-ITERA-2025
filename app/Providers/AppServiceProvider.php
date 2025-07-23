<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Http\JsonResponse;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResponse::macro('formatted', function () {
            $this->setEncodingOptions(JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            return $this;
        });
    }
}
