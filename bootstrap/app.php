<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

return Application::configure(basePath: dirname(__DIR__))
   ->withRouting(
      web: __DIR__ . '/../routes/web.php',
      commands: __DIR__ . '/../routes/console.php',
      health: '/up',
   )
   ->withMiddleware(function (Middleware $middleware) {
      $middleware->web(append: [
         \App\Http\Middleware\HandleInertiaRequests::class,
         \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
      ]);
      $middleware->alias(['checkRole' => \App\Http\Middleware\RoleMiddleware::class,]);
      $middleware->validateCsrfTokens(except: ['api/*']);
      //
   })
   ->withExceptions(function (Exceptions $exceptions) {
      $exceptions->render(function (HttpException $e, Request $request) {
         return Inertia::render('Error', ['status' => $e->getStatusCode()])
            ->toResponse($request)
            ->setStatusCode($e->getStatusCode());
      });
   })->create();
