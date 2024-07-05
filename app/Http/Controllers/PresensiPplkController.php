<?php

namespace App\Http\Controllers;

use App\Models\Kelompok;
use App\Models\PresensiPplk;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PresensiPplkController extends Controller
{
   //
   public function getAllPresensi()
   {
      $presensi = PresensiPplk::all();
      return response()->json($presensi, 200);
   }

   public function getUserPresensi($user_id)
   {
      $presensi = PresensiPplk::where('user_id', $user_id)->get();
      return response()->json($presensi, 200);
   }

   public function getUserPresensiByKelompok($tanggal_presensi = null)
   {
      if (!$tanggal_presensi) {
         $tanggal_presensi = Carbon::today();
      }
      $kelompok_id = auth()->user()->kelompok_id;
      $kelompok = Kelompok::find($kelompok_id);
      if (!$kelompok) {
         return response()->json(['message' => 'Maaf, anda tidak memiliki kelompok'], 404);
      }
      $presensi = PresensiPplk::whereIn('user_id', $kelompok->user()->pluck('id')->toArray())->get()->where('tanggal_presensi', $tanggal_presensi);
      return response()->json(['kelompok' => $kelompok->no_kelompok, 'presensi' => $presensi]);
   }

   public function store(Request $request)
   {
      $request->validate([
         'user_id' => 'required',
         'tanggal_presensi' => 'required',
         'kehadiran' => 'required',
      ]);

      $presensi = PresensiPplk::create(
         [
            'user_id' => $request->user_id,
            'tanggal_presensi' => Carbon::today(),
            'kehadiran' => $request->kehadiran,
            'keterangan' => $request->keterangan
         ]
      );

      return response()->json($presensi, 200);
   }

   public function updateKehadiran(Request $request, $user_id, $tanggal_presensi)
   {
      $presensi = PresensiPplk::where('user_id', $user_id)->where('tanggal_presensi', $tanggal_presensi);

      $presensi->update([
         'kehadiran' => $request->kehadiran
      ]);

      return response()->json($presensi, 200);
   }
}