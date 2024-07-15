<?php

namespace App\Http\Controllers;


use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
   // Menampilkan top 3 follower
   public function topFollowers()
   {
      $users = User::select('name', 'nim', 'is_ketua_kelompok')
         ->withCount('followers')
         ->orderBy('followers_count', 'desc')
         ->take(3)
         ->get();

      return response()->json($users);
   }

   // Search bar untuk mencari user berdasarkan nama atau email
   public function search(Request $request)
   {
      $request->validate([
         'query' => 'required|string|max:255'
      ]);

      $query = $request->input('query');

      $users = User::where('name', 'like', "%$query%")
         ->orWhere('nim', 'like', "%$query%")
         ->select('name', 'nim', 'is_ketua_kelompok')
         ->get();

      if ($users->isEmpty()) {
         return response()->json(['message' => 'No users found'], 404);
      }

      return response()->json($users);
   }

   // Menampilkan list mahasiswa baru yang bisa diurutkan
   public function listMaba(Request $request)
   {
      $validOrders = ['viewer', 'followers', 'followings', 'nim'];
      $orderBy = $request->input('order_by', 'nim');
      $direction = $request->input('direction', 'asc');

      if (!in_array($orderBy, $validOrders)) {
         return response()->json(['error' => 'Invalid order_by parameter'], 400);
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

      if ($users->isEmpty()) {
         return response()->json(['message' => 'No maba found'], 404);
      }

      return response()->json($users);
   }


   // Follow a user
   public function follow($id)
   {
      $followingUserId = auth()->id();  // Assuming you use Laravel's auth system
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
         return response()->json(['message' => 'Successfully unfollowed the user']);
      }

      // Otherwise, create the follow relationship
      Follow::create([
         'following_user_id' => $followingUserId,
         'followed_user_id' => $followedUserId
      ]);

      return response()->json(['message' => 'Successfully followed the user']);
   }
   //  public function followview(){
   //      return view('test');
   //  }
}