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

        $users = User::where('email', 'like', "%$query%")
                    ->orWhere('name', 'like', "%$query%")
                    ->orWhere('nim', 'like', "%$query%")
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

        $mabas = User::where('role', 'maba')
                    ->orderBy($orderBy, $direction)
                    ->get();

        if ($mabas->isEmpty()) {
            return response()->json(['message' => 'No maba found'], 404);
        }

        return response()->json($mabas);
    }
}
