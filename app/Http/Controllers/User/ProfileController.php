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


      $response = [
         'name' => $user->name,
         'nim' => $user->nim,
         'prodi' => $user->prodi,
         'role' => $user->role,
         'photo_profile_url' => $user->photo_profile_url,
         'linkedin_url' => $user->linkedin_url,
         'instagram_url' => $user->instagram_url,
         'kelompok' => [
            'nama_kelompok' => $user->kelompok ? $user->kelompok->nama_kelompok : null,
            'no_kelompok' => $user->kelompok ? $user->kelompok->no_kelompok : null,
            'daplok' => $user->kelompok ? $user->kelompok->daplok->name : null,
            'mentor' => $user->kelompok ? $user->kelompok->mentor->name : null,
         ],
         'pilar' => $user->pilar,
         'view_count' => $user->view_count,
         'followers_count' => $user->followers_count,
         'followings_count' => $user->followings_count,
         'bio' => $user->bio,
         'qrcode' => $user->qrcode ? $user->qrcode->code : "pplkitera.com",
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
       $user = auth()->user();

        $user = auth()->user();

    $request->validate([
        'instagram_url' => ['nullable', 'string', 'max:120'],
        'linkedin_url' => ['nullable', 'string', 'max:120'],
        'bio' => ['nullable', 'string', 'max:150'],
    ]);

    // Process Instagram URL
    $instagramUrl = $request->input('instagram_url') ?: null; // Convert empty string to null
    if ($instagramUrl) {
        $instagramUrl = trim($instagramUrl);
        // Add https:// if missing
        if (!preg_match('/^https?:\/\//', $instagramUrl)) {
            $instagramUrl = 'https://' . $instagramUrl;
        }
        // Remove query parameters and hash
        $instagramUrl = strtok($instagramUrl, '?');
        $instagramUrl = strtok($instagramUrl, '#');
        
        // Basic validation
        if (!filter_var($instagramUrl, FILTER_VALIDATE_URL)) {
            return redirect()->back()->with('response', [
                'status' => 400,
                'message' => 'URL Instagram tidak valid'
            ]);
        }
    }

    // Process LinkedIn URL
    $linkedinUrl = $request->input('linkedin_url') ?: null; // Convert empty string to null
    if ($linkedinUrl) {
        $linkedinUrl = trim($linkedinUrl);
        // Add https:// if missing
        if (!preg_match('/^https?:\/\//', $linkedinUrl)) {
            $linkedinUrl = 'https://' . $linkedinUrl;
        }
        // Remove query parameters and hash
        $linkedinUrl = strtok($linkedinUrl, '?');
        $linkedinUrl = strtok($linkedinUrl, '#');
        
        // Basic validation
        if (!filter_var($linkedinUrl, FILTER_VALIDATE_URL)) {
            return redirect()->back()->with('response', [
                'status' => 400,
                'message' => 'URL LinkedIn tidak valid'
            ]);
        }
    }

    DB::beginTransaction();
    try {
        $user->update([
            'linkedin_url' => $linkedinUrl,
            'instagram_url' => $instagramUrl,
            'bio' => $request->input('bio') ?: null, // Also handle bio properly
        ]);   

        DB::commit();

        return redirect()->route('myprofile')->with('response', [
            'status' => 200,
            'message' => 'Berhasil mengubah data profile'
        ]);
    } catch (\Throwable $th) {
        DB::rollBack();
        report($th);
        return redirect()->route('myprofile')->with('response', [
            'status' => 500,
            'message' => 'Gagal mengubah data profile'
        ]);
    }
}

   public function updateProfile(Request $request)
   {
      $user = User::findOrFail(auth()->id());

      $request->validate([
         'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
      ]);

      if ($request->hasFile('photo')) {
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
         return redirect()->route('myprofile')->with('response', [
            'status' => 500,
            'message' => 'Gagal mengubah foto profile'
         ]);
      }
      return redirect()->route('myprofile')->with('response', [
         'status' => 200,
         'message' => 'Berhasil mengubah foto profile'
      ]);
   }

   public function resetPassword(Request $request)
   {
      $validated = $request->validate([
         'new_password' => 'required|string|min:8',
         'confirm_new_password' => 'required|string',
      ]);

      if ($validated['new_password'] !== $validated['confirm_new_password']) {
         return redirect()->back()->with('response', [
            'status' => 400,
            'message' => 'Password tidak sama'
         ]);
      }

      $user = User::findOrFail(auth()->id());
      DB::beginTransaction();
      try {
         $user->update([
            'password' => bcrypt($validated['new_password']),
            'isFirstTime' => False
         ]);
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         report($th);
         return redirect()->back()->with('response', [
            'status' => 500,
            'message' => 'Gagal mengubah password'
         ]);
      }
      return redirect()->route('welcome')->with('response', [
         'status' => 200,
         'message' => 'Password berhasil diubah'
      ]);
   }
}