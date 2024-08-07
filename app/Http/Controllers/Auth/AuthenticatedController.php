<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedController extends Controller
{
   /**
    * Display the login view.
    */
   public function create(): Response
   {
      // if has auth, redirect to dashboard
      if (Auth::check()) {
         return redirect()->intended(route('welcome', absolute: false));
      }

      return Inertia::render('Login/Page', [
         'canResetPassword' => Route::has('password.request'),
         'status' => session('status'),
      ]);
   }

   /**
    * Handle an incoming authentication request.
    */
   public function store(LoginRequest $request): RedirectResponse
   {
      $request->authenticate();

      $request->session()->regenerate();

      if (Auth::user()->isFirstTime == 1) {
         return redirect()->intended(route('ganti-password', absolute: false));
      }

      return redirect()->intended(route('welcome', absolute: false));
   }

   /**
    * Destroy an authenticated session.
    */
   public function destroy(Request $request): RedirectResponse
   {
      Auth::guard('web')->logout();

      $request->session()->invalidate();

      $request->session()->regenerateToken();

      return redirect('/');
   }
}
