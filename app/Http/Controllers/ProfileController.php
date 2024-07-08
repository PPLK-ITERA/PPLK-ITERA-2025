<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
   public function show()
   {
      $user = User::withCount(['followers', 'followings'])->findOrFail(auth()->id());
      return response()->json($user);
   }
   public function edit()
   {
      $user = User::findOrFail(auth()->id());
      return response()->json(['message', 'Berhasil mengubah profile']);
   }
}