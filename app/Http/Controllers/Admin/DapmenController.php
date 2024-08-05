<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DapmenController extends Controller
{
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      try {

         $dapmen = User::whereIn('role_id', [2, 4])->get()->array_map(function ($item) {
            return [
               'name' => $item->name,
               'nim' => $item->nim,
               'role' => $item->role->name,
            ];
         });
         return Inertia::render('Dashboard/dapmen/Page', [
            'response' => [
               'status' => 200,
               'message' => 'Berhasil mendapatkan data',
               'data' => $dapmen
            ]
         ]);
      } catch (\Exception $e) {
         return Inertia::render('Dashboard/dapmen/Page', [
            'response' => [
               'status' => 500,
               'message' => 'Gagal mendapatkan data',
               'data' => []
            ]
         ]);
      }
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
         'name' => 'required|string|max:120',
         'nim' => 'required|string|max:9',
         'email' => 'required|email|unique:users',
         'role_id' => 'required|number|default:2',
         'kelompok_id' => 'required|integer',
      ]);

      DB::beginTransaction();
      try {
         $user = User::create($validated);
         DB::commit();
         return redirect()->route('dapmen.index')->with(
            [
               'response' => [
                  'status' => 201,
                  'message' => 'Berhasil menambahkan data',
               ]
            ]
         );
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('dapmen.index')->with(
            [
               'response' => [
                  'status' => 500,
                  'message' => 'Gagal menambahkan data',
               ]
            ]
         );
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
