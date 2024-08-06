<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KartuTugas;
use App\Models\PengumpulanTugas;
use App\Models\Tugas;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TugasController extends Controller
{
   public function getTugasUser($id)
   {
      $user = User::find($id);
      $auth = Auth::user();
      if (in_array($auth->role_id, [2, 4])) {
         if ($user->kelompok_id != $auth->kelompok_id) {
            return response()->json(
               [
                  'response' => [
                     'status' => 403,
                     'message' => "You are not authorized to acces this"
                  ]
               ]
            );
         }
      }
      try {
         $tugas = PengumpulanTugas::where('user_id', $id)->get();
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
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
   public function getTugasKelompok()
   {
      try {
         $ketua = User::where('kelompok_id', Auth::user()->kelompok_id)->where('isKetua', true)->first();
         $tugas = Tugas::with('pengumpulanTugas')
            ->where('kategori', 'kelompok')
            ->whereHas('pengumpulanTugas', function ($query) use ($ketua) {
               $query->where('user_id', $ketua->id);
            })->get();
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
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
   public function returnTugas(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'catatan' => 'required|string|max:120',
      ]);
      $tugas = PengumpulanTugas::find($validated['id']);
      DB::beginTransaction();
      try {
         $tugas->update([
            'isReturn' => true,
            'catatan' => $validated['catatan']
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->back()->with(
            'response',
            [
               'status' => 500,
            ]
         );
      }
      return redirect()->back()->with(
         'response',
         [
            'status' => 200,
            'message' => 'Berhasil mengembalikan tugas'
         ]
      );
   }
   public function getPoster()
   {
      try {
         $poster = KartuTugas::where('kelompok_id', Auth::user()->kelompok_id)->select('hari', 'poster')->get();
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
            ]
         ]);
      }
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mendapatkan data poster',
            'data' => $poster
         ]
      ]);
   }
   public function returnPoster(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
      ]);
      $poster = KartuTugas::find($validated['id']);
      DB::beginTransaction();
      try {
         $poster->update([
            'poster' => null
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->back()->with(
            'response',
            [
               'status' => 500,
            ]
         );
      }
      return redirect()->back()->with(
         'response',
         [
            'status' => 200,
            'message' => 'Berhasil mengembalikan poster'
         ]
      );
   }
}
