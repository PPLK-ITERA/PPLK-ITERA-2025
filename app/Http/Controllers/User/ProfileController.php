<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
   public function show()
   {
      $user = User::withCount(['followers', 'followings'])->findOrFail(auth()->id());

      $response = [
         'name' => $user->name,
         'nim' => $user->nim,
         'role' => $user->role,
         'photo_profile_url' => $user->photo_profile_url,
         'linkedin_url' => $user->linkedin_url,
         'instagram_url' => $user->instagram_url,
         'kelompok' => $user->kelompok,
         'pilar' => $user->pilar,
         'view_count' => $user->view_count,
         'followers_count' => $user->followers_count,
         'followings_count' => $user->followings_count,
      ];

      return response()->json($response);
   }
   public function edit()
   {
      $user = User::findOrFail(auth()->id());
      return view('test', compact('user'));
   }
   public function update(Request $request)
   {
      $user = User::findOrFail(auth()->id());
      $request->validate([
         'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
         'linkedinURL' => 'required|url',
         'instaURL' => 'required|url',
      ]);
      DB::beginTransaction();
      try {
         $update = $user->update([
            'photo' => $request->photo->store('profile-photos', 'public'),
            'linkedin_url' => $request->linkedinURL,
            'instagram_url' => $request->instaURL,
         ]);
         DB::commit();
         return response()->json(['message', 'Berhasil mengubah profile']);
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['message', 'Gagal mengubah profile']);
      }
   }
}
