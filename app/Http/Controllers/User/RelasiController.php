<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Follow;
use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RelasiController extends Controller
{
   // Menampilkan top 3 follower
   public function topFollowers()
   {
      $users = User::select('name', 'nim', 'is_ketua_kelompok')
         ->withCount('followers')
         ->orderBy('followers_count', 'desc')
         ->take(3)
         ->get();

      return Inertia::render('Relasi/Page', [
         'response' => [
            'status' => 200,
            'message' => 'success',
            'data' => $users
      ]

      ]);
   }
   public function viewScore()
   {
      // Retrieve the authenticated user
      $user = Auth::user();

      // Return the user's score
      return response()->json([
         'score' => $user->score,
      ]);
   }

   // Search bar untuk mencari user berdasarkan nama atau email
   // Menampilkan list mahasiswa baru yang bisa diurutkan
   public function listMaba(Request $request)
   {
       $validOrders = ['viewer', 'followers', 'followings', 'nim'];
       $orderBy = $request->input('order_by', 'nim');
       $direction = $request->input('direction', 'asc');
   
       if (!in_array($orderBy, $validOrders)) {
           return Inertia::render('MabaList', [
               'response' => [
                   'status' => 400,
                   'message' => 'Invalid order_by parameter',
                   'data' => []
               ]
           ]);
       }
   
       $query = User::where('role', 'maba')->select('name', 'nim', 'is_ketua_kelompok');
   
       switch ($orderBy) {
           case 'followers':
               $query->withCount('followers')->orderBy('followers_count', $direction);
               break;
           case 'followings':
               $query->withCount('followings')->orderBy('followings_count', $direction);
               break;
           case 'viewer':
               $query->addSelect('view_count')->orderBy('view_count', $direction);
               break;
           default:
               $query->orderBy($orderBy, $direction);
       }
   
       $users = $query->get();
   
       return Inertia::render('MabaList', [
           'response' => [
               'status' => $users->isEmpty() ? 404 : 200,
               'message' => $users->isEmpty() ? 'Maba list not found' : 'Maba list retrieved successfully',
               'data' => $users
           ]
       ]);
   }
   


   // Follow a user
   public function follow($id)
   {
       $followingUserId = $id;  
       $followedUserId = $id;
   
       // Validate that the user exists
       User::findOrFail($followedUserId);
   
       // Check if already following
       $follow = Follow::where('following_user_id', $followingUserId)
           ->where('followed_user_id', $followedUserId)
           ->first();
   
       if ($follow) {
           // If already following, unfollow the user
           $follow->delete();
           return Inertia::render('UserFollowStatus', [
               'response' => [
                   'status' => 200,
                   'message' => 'Successfully unfollowed the user',
                   'data' => null
               ]
           ]);
       }
   
       DB::beginTransaction();
       try {
           // If not following, follow the user
           Follow::create([
               'following_user_id' => $followingUserId,
               'followed_user_id' => $followedUserId
           ]);
           DB::commit();
           return Inertia::render('UserFollowStatus', [
               'response' => [
                   'status' => 200,
                   'message' => 'Successfully followed the user',
                   'data' => null
               ]
           ]);
       } catch (\Throwable $th) {
           DB::rollBack();
           return Inertia::render('UserFollowStatus', [
               'response' => [
                   'status' => 500,
                   'message' => 'Failed to follow the user',
                   'data' => null
               ]
           ]);
       }
   }
   

   // Menampilkan profil pengguna
   public function profile($id)
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

      return response()->json($response);
   }
   public function getProfiles(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()
         
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->where('name', 'like', '%' . $searchTerm . '%')
            ->orWhere('nim', 'like', '%' . $searchTerm . '%');    
         });

      $profiles = $query->paginate($perPage);

      $currentPage = $profiles->currentPage(); // Halaman saat ini
      $perPage = $profiles->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $profiles->getCollection()->transform(function ($profile) use (&$currentIndex) {
         return [
            'id' => $profile->id,
            'name' => $profile->name,
            'nama_kelompok' => $profile->kelompok->nama_kelompok,
            'no_kelompok' => $profile->kelompok->no_kelompok,
            'photo_profile_url' => $profile->photo_profile_url,
         ];
      });
      
      return response()->json($profiles);
   }
}
