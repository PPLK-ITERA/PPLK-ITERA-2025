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
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
   public function show()
   {
      $user = User::withCount(['followers', 'followings'])->findOrFail(auth()->id());
      $code = $user->qrcode->code;
      $response = [
         'name' => $user->name,
         'nim' => $user->nim,
         'prodi' => $user->prodi,
         'role' => $user->role,
         'photo_profile_url' => $user->photo_profile_url,
         'linkedin_url' => $user->linkedin_url,
         'instagram_url' => $user->instagram_url,
         'kelompok' => [
            'nama_kelompok' => $user->kelompok->nama_kelompok,
            'no_kelompok' => $user->kelompok->no_kelompok,
            'daplok' => $user->kelompok->daplok->name,
            'mentor' => $user->kelompok->mentor->name,
         ],
         'pilar' => $user->pilar,
         'view_count' => $user->view_count,
         'followers_count' => $user->followers_count,
         'followings_count' => $user->followings_count,
         'bio' => $user->bio,
         'qrcode' => $code,
      ];

      return Inertia::render('Profile/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Berhasil melihat profile',
            'data' => $response
         ]
      ]);
   }
   public function update(Request $request)
   {
      $user = auth()->user(); // More direct and readable
      $validated = $request->validate([
         'linkedinURL' => 'required|url',
         'instagramURL' => 'required|url',
         'bio' => 'required|string', // Assuming a reasonable max length for bio
      ]);

      DB::beginTransaction();
      try {
         $user->update([
            'linkedin_url' => $validated['linkedinURL'],
            'instagram_url' => $validated['instagramURL'],
            'bio' => $validated['bio'],
         ]);

         DB::commit();
         return redirect()->route('myprofile')->with('success', 'Profile successfully updated.');
      } catch (\Throwable $th) {
         DB::rollBack();
         report($th); // Ensure that the error is logged
         return redirect()->route('myprofile')->with('error', 'Failed to update profile.');
      }
   }

   public function updateProfile(Request $request)
   {
      $user = User::findOrFail(auth()->id());


      $request->validate([
         'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      ]);

      if ($request->hasFile('sphoto')) {
         $storagePath = substr($user->photo_profile_url, strlen('/storage/'));
         if (Storage::disk('public')->exists($storagePath)) {
            Storage::disk('public')->delete($storagePath);
         }
         $path = $request->file('photo')->store('images/profilePhoto', 'public');
         $path_image = '/storage/' . $path;
      } else {
         $path_image = $user->photo_profile_url;
      }

      DB::beginTransaction();
      try {
         $user->update([
            'photo_profile_url' => $path_image
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('myprofile')->with('error', 'Failed to update profile.');
      }
      return redirect()->route('myprofile')->with('success', 'Profile updated successfully.');
   }
}