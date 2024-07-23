<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\UserStoreRequest;
use App\Models\Penyakit;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
   //TODO: CRUD nya belom
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      $user = User::with('role')->get();

      $data = $user->map(function ($item) {
         return [
            'name' => $item->name,
            'nim' => $item->nim,
            'role' => $item->role->name,
         ];
      });
      return Inertia::render(
         'Dashboard/user/Page',
         [
            'response' => [
               'status' => 200,
               'message' => 'Berhasil mendapatkan data',
               'data' => $user
            ]
         ]
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
   public function update(Request $request, string $id)
   {
      //
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(string $id)
   {
      //
   }
}
