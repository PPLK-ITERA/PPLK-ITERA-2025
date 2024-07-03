<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
   // Menampilkan top 3 follower
   public function topFollowers()
   {
      $users = User::withCount('followers')
         ->orderBy('followers_count', 'desc')
         ->take(3)
         ->get(['name', 'nim']) // Select only the name and nim columns
         ->makeHidden(['id', 'email', 'password', 'role', 'photo_profile_url', 'linkedin_url', 'instagram_url', 'pilar', 'view_count', 'created_at', 'updated_at']); // Hide unwanted columns

      // Manually add followers_count
      $users->each(function ($user) {
         $user->followers_count = $user->followers()->count();
      });

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
         ->select('name', 'nim')
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

      $query = User::where('role', 'maba')->select('name', 'nim');

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
}
