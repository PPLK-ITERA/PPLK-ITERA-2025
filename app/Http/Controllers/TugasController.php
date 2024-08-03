<?php

namespace App\Http\Controllers;

use App\Models\PengumpulanTugas;
use Illuminate\Http\Request;
use App\Models\Tugas;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TugasController extends Controller
{
   public function tugasUser($id)
   {
      try {
         $tugas = PengumpulanTugas::where('user_id', $id)->get();
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => $e->getMessage()
            ]
         ]);
      }
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mendapatkan data',
            'data' => $tugas
         ]
      ]);
   }
}