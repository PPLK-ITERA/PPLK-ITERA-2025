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
      return Inertia::render(
         'Dashboard/user/Page'
      );
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
         'name' => 'required|string|max:120|regex:/^[\pL\s\-]+$/u|alpha:ascii',
         'email' => 'required|email',
         'password' => 'required|string|max:120',
         'role_id' => 'required|number|default:1',
         'nim' => 'required|string|max:9',
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

    // Menampilkan profil pengguna
   //  public function profile($id)
   //  {
   //      $user = User::withCount(['followers', 'followings'])->findOrFail($id);

   //      // Increment view count
   //      $user->increment('view_count');

   //      return Inertia::render('Relasi/Profil/Page', [
   //          'response' => [
   //              'status' => 200,
   //              'message' => 'Profile retrieved successfully',
   //              'data' => [
   //                  'name' => $user->name,
   //                  'nim' => $user->nim,
   //                  'photo_profile_url' => $user->photo_profile_url,
   //                  'linkedin_url' => $user->linkedin_url,
   //                  'instagram_url' => $user->instagram_url,
   //                  'pilar' => $user->pilar,
   //                  'view_count' => $user->view_count,
   //                  'followers_count' => $user->followers_count,
   //                  'followings_count' => $user->followings_count,
   //              ]
   //          ]
   //      ]);
   //  }

}

