<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Follow;
use App\Models\Views;
use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RelasiController extends Controller
{
   // Menampilkan top 3 follower
   public function viewScore()
   {
      // Retrieve the authenticated user
      $user = Auth::user();

      // Return the user's score
      return response()->json([
         'score' => $user->score,
      ]);
   }

   public function topFollowers()
   {
      $topFollowers = User::withCount('followers')
         ->where('role_id', 1)
         ->whereNotNull("kelompok_id")->whereNotNull("prodi_id")
         ->orderBy('followers_count', 'desc')
         ->take(3)
         ->get();

      // Iterate through each user and return only the specified attributes
      $topFollowers = $topFollowers->transform(function ($user) {
         return [
            'id' => $user->id,
            'name' => $user->name,
            'nim' => $user->nim,
            'prodi' => $user->prodi->nama_prodi,
            'photo_profile_url' => $user->photo_profile_url,
            'kelompok' => [
               'nama_kelompok' => $user->kelompok->nama_kelompok,
               'no_kelompok' => $user->kelompok->no_kelompok,
            ],
            'followers_count' => $user->followers_count,
         ];
      });

      return response()->json($topFollowers);
   }

   public function sort(Request $request)
   {
      $validOrders = ['viewer', 'followers', 'followings', 'name'];
      $orderBy = $request->input('order_by', 'followers');
      $direction = $request->input('direction', 'asc');
      $perPage = $request->input('perPage', 10);

      if (!in_array($orderBy, $validOrders)) {
         return response()->json([
            'status' => 400,
            'message' => 'Invalid order_by parameter',
            'data' => []
         ]);
      }

      $query = User::with('kelompok')->where('role_id', 1)->whereNotNull(["kelompok_id", "prodi_id"]);

      switch ($orderBy) {
         case 'followers':
            $query->withCount('followers')->orderBy('followers_count', $direction);
            break;
         case 'followings':
            $query->withCount('followings')->orderBy('followings_count', $direction);
            break;
         case 'viewer':
            $query->orderBy('view_count', $direction);
            break;
         case 'name':
            $query->orderBy('name', $direction);
            break;
         default:
            $query->orderBy('followers', $direction);
      }
      $users = $query->paginate($perPage);

      $users->getCollection()->transform(function ($user) {
         return [
            'id' => $user->id,
            'name' => $user->name,
            'nim' => $user->nim,
            'prodi' => $user->prodi->nama_prodi,
            'photo_profile_url' => $user->photo_profile_url,
            'kelompok' => $user->kelompok ? [
               'nama_kelompok' => $user->kelompok->nama_kelompok,
               'no_kelompok' => $user->kelompok->no_kelompok,
            ] : null,
            'followers_count' => $user->followers_count ?? 0,
         ];
      });

      return response()->json($users);
   }

   public function index()
   {
      return Inertia::render('Relasi/Page');
   }

   public function searchIndex()
   {
      return Inertia::render('Relasi/Search/Page');
   }

   // Follow a user
   public function follow($id)
   {
      $followingUserId = Auth::id();
      $followedUserId = $id;

      // reject if the user tries to follow themselves
      if ($followingUserId === $followedUserId) {
         return redirect()->back()->with('error', 'You cannot follow yourself');
      }

      // Validate that the user exists
      User::findOrFail($followedUserId);

      // Check if already following
      $follow = Follow::where('following_user_id', $followingUserId)
         ->where('followed_user_id', $followedUserId)
         ->first();

      if ($follow) {
         // If already following, unfollow the user
         $follow->delete();
         return redirect()->back()->with('success', 'Successfully unfollowed the user');
      }

      DB::beginTransaction();
      try {
         // If not following, follow the user
         Follow::create([
            'following_user_id' => $followingUserId,
            'followed_user_id' => $followedUserId
         ]);
         DB::commit();
         return redirect()->back()->with('success', 'Successfully followed the user');
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->back()->with('error', 'Failed to follow the user');
      }
   }

   // Menampilkan profil pengguna
   public function profile($id)
   {
      $viewingUserId = Auth::id();
      $viewedUserId = $id;
      $views = Views::where('viewing_user_id', $viewingUserId)
         ->where('viewed_user_id', $viewedUserId)
         ->exists();
      if (!$views) {
         DB::beginTransaction();
         try {
            // If not following, follow the user
            Views::create([
               'viewing_user_id' => $viewingUserId,
               'viewed_user_id' => $viewedUserId
            ]);
            DB::commit();
         } catch (\Throwable $th) {
            DB::rollBack();
         }
      }
      $user = User::withCount(['followers', 'followings', 'viewers'])->findOrFail($id);
      $follow = Follow::where('following_user_id', Auth::id())
         ->where('followed_user_id', $id)
         ->exists();

      // $user->view_count = 

      // Return only the specified attributes
      $response = [
         'id' => $user->id,
         'name' => $user->name,
         'nim' => $user->nim,
         'prodi' => $user->prodi->nama_prodi,
         'photo_profile_url' => $user->photo_profile_url,
         'linkedin_url' => $user->linkedin_url,
         'instagram_url' => $user->instagram_url,
         'kelompok' => [
            'nama_kelompok' => $user->kelompok->nama_kelompok,
            'no_kelompok' => $user->kelompok->no_kelompok,
         ],
         'view_count' => $user->viewers_count,
         'followers_count' => $user->followers_count,
         'followings_count' => $user->followings_count,
         'followed' => $follow,
         'bio' => $user->bio,
      ];

      $followingUserId = Auth::user()->id;

      // Get 9 random users that the current user does not follow
      $randomUsers = User::where('id', '<>', $followingUserId)
         ->whereDoesntHave('followers', function ($query) use ($followingUserId) {
            $query->where('following_user_id', $followingUserId);
         })

         ->inRandomOrder()
         ->take(9)
         ->where('role_id', 1)
         ->whereNotNull("kelompok_id")
         ->whereNotNull("prodi_id")
         ->get()
         ->transform(function ($user) {
            return [
               'id' => $user->id,
               'name' => $user->name,
               'nim' => $user->nim,
               'prodi' => $user->prodi->nama_prodi,
               'photo_profile_url' => $user->photo_user_url,
               'kelompok' => [
                  'nama_kelompok' => $user->kelompok->nama_kelompok,
                  'no_kelompok' => $user->kelompok->no_kelompok,
               ],
               'view_count' => $user->view_count,
               'followers_count' => $user->followers_count,
               'followings_count' => $user->followings_count,
            ];
         });

      return Inertia::render('Relasi/Profil/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Profile retrieved successfully',
            'data' => [
               'user' => $response,
               'random_users' => $randomUsers
            ]
         ]
      ]);
   }

   public function getProfiles(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $inputSearch = $request->input('search', '');
      $searchTerm = preg_replace('/[^a-zA-Z0-9_ ]/', '', substr($inputSearch, 0, 99));

      $query = User::query()->where('role_id', 1)
         ->whereNotNull("kelompok_id")->whereNotNull("prodi_id")
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
            'nim' => $profile->nim,
            'prodi' => $profile->prodi->nama_prodi,
            'photo_profile_url' => $profile->photo_profile_url,
            'kelompok' => [
               'nama_kelompok' => $profile->kelompok->nama_kelompok,
               'no_kelompok' => $profile->kelompok->no_kelompok,
            ],
            'view_count' => $profile->view_count,
            'followers_count' => $profile->followers_count,
            'followings_count' => $profile->followings_count,
         ];
      });

      return response()->json($profiles);
   }
}