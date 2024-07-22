<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    // Menampilkan top 3 follower
    public function topFollowers()
    {
        $users = User::select('name', 'nim')
            ->withCount('followers')
            ->orderBy('followers_count', 'desc')
            ->take(3)
            ->get();

        return Inertia::render('TopFollowers', [
            'response' => [
                'status' => 200,
                'message' => 'Berhasil mendapatkan data',
                'data' => $users
            ]
        ]);
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
            ->select('id', 'name', 'nim')
            ->get();

        return Inertia::render('SearchResults', [
            'response' => [
                'status' => $users->isEmpty() ? 404 : 200,
                'message' => $users->isEmpty() ? 'No users found' : 'Users found',
                'data' => $users
            ]
        ]);
    }

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

        $users = $query->paginate(10); // Paginasi untuk hasil yang lebih besar

        return Inertia::render('MabaList', [
            'response' => [
                'status' => $users->isEmpty() ? 404 : 200,
                'message' => $users->isEmpty() ? 'No maba found' : 'Maba list retrieved successfully',
                'data' => $users
            ]
        ]);
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

        DB::beginTransaction();
        try {
            if ($follow) {
                // If already following, unfollow the user
                $follow->delete();
                DB::commit();
                return Inertia::render('UserFollowStatus', [
                    'response' => [
                        'status' => 200,
                        'message' => 'Successfully unfollowed the user',
                        'data' => null
                    ]
                ]);
            } else {
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
            }
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

        return Inertia::render('UserProfile', [
            'response' => [
                'status' => 200,
                'message' => 'Profile retrieved successfully',
                'data' => [
                    'name' => $user->name,
                    'nim' => $user->nim,
                    'photo_profile_url' => $user->photo_profile_url,
                    'linkedin_url' => $user->linkedin_url,
                    'instagram_url' => $user->instagram_url,
                    'pilar' => $user->pilar,
                    'view_count' => $user->view_count,
                    'followers_count' => $user->followers_count,
                    'followings_count' => $user->followings_count,
                ]
            ]
        ]);
    }
}
