<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PresensiCui;
use App\Models\LogCui;
use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PresensiCuiController extends Controller
{
   public function QRScan(Request $request)
   {
      $validated = $request->validate([
         'qr_code' => 'required|string',
      ]);

      $qrcode = Qrcode::where('code', $validated['qr_code'])->first();
      if (!$qrcode) {
         return response()->json(['message' => 'QR Code tidak ditemukan'], 404);
      }
      $user = User::findorfail($qrcode->user_id);
      if (!$user) {
         return response()->json(['message' => 'User tidak ditemukan'], 404);
      }
      $log = LogCui::where('user_id', $user->id);
      if (!$log->exists()) {
         DB::beginTransaction();
         try {
            $logCui = LogCui::create([
               'user_id' => $user->id,
               'status' => 'hadir',
            ]);
            DB::commit();
         } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Gagal membuat log'], 500);
         }
         return redirect()->route('cui.status', ['code' => $validated['qr_code']])->with('message', 'Berhasil melakukan presensi CUI');
      }

      if ($log->first()->status == 'izin') {
         return redirect()->route('cui.status', ['code' => $validated['qr_code']])->with('message', 'Peserta sedang izin');
      }

      return redirect()->route('cui.status', ['code' => $validated['qr_code']])->with('message', 'Peserta sudah melakukan presensi');
   }

   public function storeIzin(Request $request, $code)
   {
      $validated = $request->validate([
         'ket_izin' => 'required|string',
      ]);

      $userid = Qrcode::where('code', $code)->first()->user_id;
      $user = User::find($userid);

      if (!$user->exists()) {
         return response()->json(['message' => 'User tidak ditemukan'], 404);
      }

      $log = LogCui::where('user_id', $userid)->latest('created_at');
      if (!$log->first()->status == 'izin') {
         DB::beginTransaction();
         try {
            LogCui::create([
               'user_id' => $user->id,
               'status' => 'izin',
               'ket_izin' => $validated['ket_izin'],
               'waktu_izin' => now(),
            ]);
            DB::commit();
         } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Gagal melakukan izin'], 500);
         }
         return redirect()->route('cui.status', ['code' => $code])->with('message', 'Izin peserta berhasil');
      }
      return redirect()->route('cui.status', ['code' => $code])->with('message', 'Peserta sedang izin');
   }

   public function destroyIzin($code)
   {
      $userid = Qrcode::where('code', $code)->first()->user_id;
      $user = User::find($userid);
      $log = LogCui::where('user_id', $userid);
      if (!$user->exists()) {
         return response()->json(['message' => 'User tidak ditemukan'], 404);
      }
      DB::beginTransaction();
      try {
         $log->first()->update([
            'waktu_selesai' => now(),
         ]);
         LogCui::create([
            'user_id' => $user->id,
            'status' => 'hadir',
            'ket_izin' => 'Selesai Izin',
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return response()->json(['message' => 'Gagal mencabut izin'], 500);
      }
      return redirect()->route('cui.status', ['code' => $code])->with('message', 'Izin peserta berhasil dicabut');
   }

   public function status($code)
   {
      if (Qrcode::where('code', $code)->doesntExist()) {
         return response()->json(['message' => 'QR Code tidak ditemukan'], 404);
      }
      $userid = Qrcode::where('code', $code)->first()->user_id;
      $user = User::find($userid);
      $log = LogCui::where('user_id', $userid)->latest('created_at');
      if (!$user->exists()) {
         return response()->json(['message' => 'User tidak ditemukan'], 404);
      }
      if (!$log->exists()) {
         return response()->json(['message' => 'Belum Melakukan Presensi'], 404);
      }

      $response = [
         'nama' => $user->name,
         'nim' => $user->nim,
         'prodi' => $user->prodi->nama_prodi,
         'pita' => $user->penyakit->pita ?? null,
         'riwayat' => $user->penyakit->ket_penyakit ?? "-",
         'status' => $log->first()->status,
         'qrcode' => $code,
         'waktu' => $log->first()->created_at ?? null,
         'waktu_izin' => $log->first()->waktu_izin ?? null,
         'ket_izin' => $log->first()->ket_izin ?? null,
      ];

      return Inertia::render('Dashboard/cui/absensi/result/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Sudah Melakukan Presensi',
            'data' => $response
         ] 
      ]);
   }

   public function getMabaByNim(Request $request)
   {
      $validated = $request->validate([
         'nim' => 'required|string',
      ]);
      $user = User::where('nim', $validated['nim'])->first();
      if (!$user) {
         return Inertia::render(
            'Dashboard/cui/Page',
            [
               'response' => [
                  'status' => 404,
                  'message' => 'NIM ' . $validated['nim'] . ' tidak ditemukan',
                  'data' => null
               ]
            ]
         );
      }
      $log = LogCui::where('user_id', $user->id)->latest('created_at');
      $qrcode = Qrcode::where('user_id', $user->id)->first()->code; 

      $response = [
         'message' => 'Berhasil mendapatkan NIM ' . $validated['nim'],
         'nama' => $user->name,
         'nim' => $user->nim,
         'profil_url' => $user->photo_profile_url,
         'prodi' => $user->prodi->nama_prodi,
         'pita' => $user->penyakit->pita ?? null,
         'riwayat' => $user->penyakit->ket_penyakit ?? "-",
         'qr_code' => $qrcode,
         'status' => $log->first()->status ?? null,
      ];
      return Inertia::render(
         'Dashboard/cui/Page',
         [
            'response' => [
               'status' => 200,
               'message' => 'Berhasil mendapatkan NIM ' . $validated['nim'],
               'data' => $response
            ]
         ]
      );
   }
   public function index()
   {
      return Inertia::render('Dashboard/cui/Page');
   }

   public function absensi()
   {
      return Inertia::render('Dashboard/cui/absensi/Page');
   }
   public function getLogbookData()
   {
      $logbook = LogCui::all();
      return response()->json($logbook);
   }
}
