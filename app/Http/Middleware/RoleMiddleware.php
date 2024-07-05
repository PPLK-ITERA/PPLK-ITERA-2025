<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
   /**
    * Handle an incoming request.
    *
    * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
    */
   public function handle(Request $request, Closure $next,  ...$roles): Response
   {
      if (!Auth::check()) {
         return redirect()->route('login');
      }

      foreach ($roles as $role) {
         if ($request->user()->role->role == $role) {
            return $next($request);
         }
      }
      abort(403, 'Unauthorized action.');
   }
}