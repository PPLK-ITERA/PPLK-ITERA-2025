<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\UserStoreRequest;
use App\Http\Requests\Admin\User\UserUpdateRequest;
use App\Models\Penyakit;
use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
   //TODO: CRUD nya belom
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      return Inertia::render('Dashboard/user/Page');
   }
   public function getUsers(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()
         ->with(['user', 'user.penyakit', 'user.kelompok']) // Memastikan semua data yang diperlukan di eager load
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
               'photo_profile_url' => $user->photo_profile_url,
               'qrcode' => $user->qrcode->code,
               'nama_kelompok' => $user->kelompok->nama_kelompok,
               'penyakit' => [
                  'pita' => $user->penyakit->pita,
                  'ket_penyakit' => $user->penyakit->ket_penyakit,
               ],
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
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => 'Gagal menambahkan user',
               'data' => $e->getMessage()
            ]
         ]);
      }
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
   public function update(UserUpdateRequest $request, string $id)
   {
      $user = User::find($id);
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
   public function destroy(string $id)
   {
      $user = User::find($id);
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
}