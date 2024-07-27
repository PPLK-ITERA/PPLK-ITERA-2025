<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\UserStoreRequest;
use App\Http\Requests\Admin\User\UserUpdateRequest;
use App\Models\Penyakit;
use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      return Inertia::render('Dashboard/user/Page');
   }

   public function getUsersMaba(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      if (Auth::user()->role_id == 2 || Auth::user()->role_id == 4) {
         $kelompok_id = Auth::user()->kelompok_id;
         $query = User::query()->where('kelompok_id', $kelompok_id);
      } elseif (Auth::user()->role_id == 5) {
         $prodi_id = Auth::user()->prodi_id;
         $query = User::query()->where('prodi_id', $prodi_id);
      } elseif (Auth::user()->role_id == 3) {
         $query = User::query();
      } else {
         return response()->json([
            'response' => [
               'status' => 403,
               'message' => 'Anda tidak memiliki akses',
            ]
         ], 403);
      }

      $query
         ->where('role_id', 1)
         ->with(['penyakit', 'kelompok']) // Memastikan semua data yang diperlukan di eager load
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->whereHas('user', function ($q) use ($searchTerm) {
               $q->where('name', 'like', '%' . $searchTerm . '%')
                  ->orWhere('nim', 'like', '%' . $searchTerm . '%')
                  ->orWhere('email', 'like', '%' . $searchTerm . '%');
            });
         });

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
               'kelompok' => $user->kelompok->nama_kelompok,
            ],
         ];
      });

      return response()->json($users);
   }

   public function getUsersDapmen(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()
         ->whereIn('role_id', [2, 4]) // Hanya user dengan role Maba
         ->with(['penyakit', 'kelompok']) // Memastikan semua data yang diperlukan di eager load
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->whereHas('user', function ($q) use ($searchTerm) {
               $q->where('name', 'like', '%' . $searchTerm . '%')
                  ->orWhere('nim', 'like', '%' . $searchTerm . '%')
                  ->orWhere('email', 'like', '%' . $searchTerm . '%');
            });
         });

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
            ],
         ];
      });

      return response()->json($users);
   }

   public function getUsersPjprodi(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()
         ->where('role_id', 5) // Hanya user dengan role Maba
         ->with(['penyakit', 'kelompok']) // Memastikan semua data yang diperlukan di eager load
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->whereHas('user', function ($q) use ($searchTerm) {
               $q->where('name', 'like', '%' . $searchTerm . '%')
                  ->orWhere('nim', 'like', '%' . $searchTerm . '%')
                  ->orWhere('email', 'like', '%' . $searchTerm . '%');
            });
         });

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
            ],
         ];
      });

      return response()->json($users);
   }

   public function getUsersKorlap(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()
         ->where('role_id', 6) // Hanya user dengan role Maba
         ->with(['penyakit', 'kelompok']) // Memastikan semua data yang diperlukan di eager load
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->whereHas('user', function ($q) use ($searchTerm) {
               $q->where('name', 'like', '%' . $searchTerm . '%')
                  ->orWhere('nim', 'like', '%' . $searchTerm . '%')
                  ->orWhere('email', 'like', '%' . $searchTerm . '%');
            });
         });

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
            ],
         ];
      });

      return response()->json($users);
   }

   public function getUsersMamet(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()
         ->where('role_id', 7) // Hanya user dengan role Maba
         ->with(['penyakit', 'kelompok']) // Memastikan semua data yang diperlukan di eager load
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->whereHas('user', function ($q) use ($searchTerm) {
               $q->where('name', 'like', '%' . $searchTerm . '%')
                  ->orWhere('nim', 'like', '%' . $searchTerm . '%')
                  ->orWhere('email', 'like', '%' . $searchTerm . '%');
            });
         });

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
            ],
         ];
      });

      return response()->json($users);
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
   public function store(UserStoreRequest $request)
   {
      try {
         $penyakit = Penyakit::create(
            [
               'pita' => $request->pita,
               'ket_penyakit' => $request->ket_penyakit,
            ]
         );
         User::create(
            [
               'username' => $request->username,
               'password' => bcrypt($request->password),
               'name' => $request->name,
               'nim' => $request->nim,
               'role_id' => $request->role_id,
               'penyakit' => $penyakit->id
            ]
         );
      } catch (\Exception $e) {
         return redirect()->route('dashboard.users.index')->with([
            'response' => [
               'status' => 500,
               'message' => 'Gagal menambahkan user',
               'data' => $e->getMessage()
            ]
         ]);
      }
      return redirect()->route('users.index')->with([
         'response' => [
            'status' => 201,
            'message' => 'Berhasil menambahkan user',
         ]
      ]);
   }

   /**
    * Display the specified resource.
    */
   public function show(string $id)
   {
      //
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
   public function update(UserUpdateRequest $request)
   {

      $user = User::find($request->id);
      DB::beginTransaction();
      try {
         $penyakit = Penyakit::find($user->penyakit_id);
         $penyakit->update(
            [
               'pita' => $request->pita,
               'ket_penyakit' => $request->ket_penyakit,
            ]
         );
         $user->update(
            [
               'username' => $request->username,
               'password' => bcrypt($request->password),
               'name' => $request->name,
               'nim' => $request->nim,
               'role_id' => $request->role_id,
               'penyakit' => $penyakit->id
            ]
         );
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('users.index')->with([
            'response' => [
               'status' => 500,
               'message' => 'Gagal mengubah user',
            ]
         ]);
      }
      return redirect()->route('users.index')->with([
         'response' => [
            'status' => 201,
            'message' => 'Berhasil mengubah user',
         ]
      ]);
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(Request $request)
   {
      $validated = $request->validated(
         [
            'id' => ['required', 'integer'],
         ]
      );
      $user = User::find($validated['id']);
      DB::beginTransaction();
      try {
         $penyakit = Penyakit::find($user->penyakit_id);
         $qrcode = Qrcode::where('user_id', $user->id)->first();
         $qrcode->delete();
         $penyakit->delete();
         $user->delete();
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('users.index')->with([
            'response' => [
               'status' => 500,
               'message' => 'Gagal menghapus user',
            ]
         ]);
      }
      return redirect()->route('users.index')->with([
         'response' => [
            'status' => 201,
            'message' => 'Berhasil menghapus user',
         ]
      ]);
   }
}