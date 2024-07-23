<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
   }

   /**
    * Show the form for creating a new resource.
    */
   public function create()
   {
      //
   }

   /**
    * Store a newly created resource in storage.
    */
   public function store(Request $request)
   {
      $validated = $request->validate([
         'name' => 'required|string',
         'email' => 'required|email',
         'password' => 'required|string',
         'role_id' => 'required|number|default:1',
         'nim' => 'required|string',
         'photo_profile_url' => 'string',
         'linkedin_url' => 'string',
         'instagram_url' => 'string',
         'kelompok_id' => 'integer',
         'pilar_id' => 'integer',
         'view_count' => 'integer|default:0',
         'followers_count' => 'integer|default:0',
         'followings_count' => 'integer|default:0',
      ]);

      DB::beginTransaction();
      try {
         $user = User::create($validated);
         DB::commit();
         return Inertia::view(
            'Dashboard/user/Page',
            [
               'response' => [
                  'status' => 201,
                  'message' => 'Berhasil menambahkan user',
                  'data' => $user
               ]
            ]
         );
      } catch (\Throwable $th) {
         DB::rollBack();
         return Inertia::view(
            'Dashboard/user/Page',
            [
               'response' => [
                  'status' => 500,
                  'message' => 'Gagal menambahkan user',
               ]
            ]
         );
      }
   }

   /**
    * Display the specified resource.
    */
   public function show(string $id)
   {
      $user = User::withCount(['followers', 'followings'])->findOrFail($id);

      // Increment view count
      $user->increment('view_count');
      // Return only the specified attributes
      $response = [
         'name' => $user->name,
         'nim' => $user->nim,
         'photo_profile_url' => $user->photo_profile_url,
         'linkedin_url' => $user->linkedin_url,
         'instagram_url' => $user->instagram_url,
         'pilar' => $user->pilar,
         'view_count' => $user->view_count,
         'followers_count' => $user->followers_count,
         'followings_count' => $user->followings_count,
      ];

      return Inertia::view(
         'Dashboard/user/Page',
         [
            'response' => [
               'status' => 200,
               'message' => 'Berhasil mendapatkan data',
               'data' => $response
            ]
         ]
      );
   }

   /**
    * Show the form for editing the specified resource.
    */
   public function edit(string $id)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    */
   public function update(Request $request, string $id)
   {
      $validated = $request->validate([
         'name' => 'required|string',
         'email' => 'required|email',
         'password' => 'required|string',
         'role_id' => 'required|number|default:1',
         'nim' => 'required|string',
         'photo_profile_url' => 'string',
         'linkedin_url' => 'string',
         'instagram_url' => 'string',
         'kelompok_id' => 'integer',
         'pilar_id' => 'integer',
         'view_count' => 'integer|default:0',
         'followers_count' => 'integer|default:0',
         'followings_count' => 'integer|default:0',
      ]);
      DB::beginTransaction();
      try {
         $user = User::find($id);
         if (!$user) {
            return Inertia::view(
               'Dashboard/user/Page',
               [
                  'response' => [
                     'status' => 404,
                     'message' => 'User not found',
                  ]
               ]
            );
         }
         $user->update($validated);
         DB::commit();
         return Inertia::view(
            'Dashboard/user/Page',
            [
               'response' => [
                  'status' => 201,
                  'message' => 'Berhasil mengubah user',
                  'data' => $user
               ]
            ]
         );
      } catch (\Throwable $th) {
         DB::rollBack();
         return Inertia::view(
            'Dashboard/user/Page',
            [
               'response' => [
                  'status' => 500,
                  'message' => 'Gagal mengubah user',
               ]
            ]
         );
      }
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(string $id)
   {
      $user = User::find($id);
      if (!$user) {
         return Inertia::view(
            'Dashboard/user/Page',
            [
               'response' => [
                  'status' => 404,
                  'message' => 'User not found',
               ]
            ]
         );
      }
      DB::beginTransaction();
      try {
         $user->delete();
         DB::commit();
         return Inertia::view(
            'Dashboard/user/Page',
            [
               'response' => [
                  'status' => 200,
                  'message' => 'Berhasil menghapus user',
               ]
            ]
         );
      } catch (\Throwable $th) {
         DB::rollBack();
         return Inertia::view(
            'Dashboard/user/Page',
            [
               'response' => [
                  'status' => 500,
                  'message' => 'Gagal menghapus user',
               ]
            ]
         );
      }
   }
}
