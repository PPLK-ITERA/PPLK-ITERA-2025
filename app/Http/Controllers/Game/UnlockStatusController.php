<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller;
use App\Models\quiz;
use App\Models\QuizActivity;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\UnlockStatus;
use App\Models\gedung;
use App\Models\Kelompok;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class UnlockStatusController extends Controller
{
   public function unlockGedung(Request $request, $id)
   {
      $user = User::findOrFail($id);
      // $user = Auth::user();
      $today = Carbon::today();

      // Cek apakah user sudah membuka gedung hari ini
      $todayUnlock = UnlockStatus::where('user_id', $user->id)
         ->whereDate('created_at', $today)
         ->first();

      if ($todayUnlock) {
         return response()->json(['message' => 'Anda sudah membuka gedung hari ini.'], 400);
      }

      // Hitung hari ke-berapa dalam periode 7 hari ini
      $startOfPeriod = Carbon::now()->startOfWeek(); // Asumsikan periode dimulai dari awal minggu
      $dayOfPeriod = $today->diffInDays($startOfPeriod) % 7 + 1;

      // Tentukan jumlah gedung yang akan dibuka
      $numGedungsToUnlock = $dayOfPeriod <= 4 ? 7 : 5;

      // Ambil gedung yang belum dibuka oleh user ini
      $unlockedGedungs = UnlockStatus::where('user_id', $user->id)->pluck('gedung_id')->toArray();
      $availableGedungs = Gedung::whereNotIn('id', $unlockedGedungs)->get();

      if ($availableGedungs->isEmpty()) {
         return response()->json(['message' => 'Semua gedung sudah terbuka untuk Anda.'], 400);
      }

      // Randomize dan ambil jumlah gedung yang ditentukan yang tersedia
      $gedungsToUnlock = $availableGedungs->random(min($numGedungsToUnlock, $availableGedungs->count()));

      $response = [];

      foreach ($gedungsToUnlock as $gedung) {
         // Buat status pembukaan gedung baru
         UnlockStatus::create([
            'user_id' => $user->id,
            'gedung_id' => $gedung->id,
            'dateOpen' => Carbon::now()->timestamp,
         ]);

         $response[] = [
            'user' => $user->name,
            'gedung' => $gedung->nama_gedung,
            'date_open' => Carbon::now()->toDateTimeString(),
         ];
      }

      return response()->json($response);
   }

   public function getGedungAvailable(Request $request, $id)
   {
      // $user = Auth::user();
      $user = User::findOrFail($id);

      // Ambil daftar gedung yang telah dibuka oleh user
      $unlockedGedungs = UnlockStatus::where('user_id', $user->id)
         ->pluck('gedung_id')
         ->toArray();

      // Ambil semua gedung
      $allGedungs = Gedung::all();

      // Pisahkan gedung yang terbuka dan tertutup
      $gedungTerbuka = $allGedungs->whereIn('id', $unlockedGedungs)->map(function ($gedung) use ($user) {
         // Hitung jumlah percobaan untuk gedung ini
         $attempts = QuizActivity::where('user_id', $user->id)
            ->where('gedung_id', $gedung->id)
            ->count();

         // Tentukan status selesai
         $completed = $attempts >= 3;

         return [
            'id' => $gedung->id,
            'nama_gedung' => $gedung->nama_gedung,
            'percobaan' => $attempts,
            'selesai' => $completed
         ];
      });

      $gedungTertutup = $allGedungs->whereNotIn('id', $unlockedGedungs)->map(function ($gedung) {
         return [
            'id' => $gedung->id,
            'nama_gedung' => $gedung->nama_gedung
         ];
      });

      // Format respons
      $response = [
         'gedung_terbuka' => $gedungTerbuka->values(),
         'gedung_tertutup' => $gedungTertutup->values(),
      ];

      return response()->json($response, 200);
   }

   public function unlockGedungForMaba(Request $request, $id)
   {
       $admin = User::findOrFail($id);
   
       // Verifikasi bahwa user adalah admin
       if ($admin->role_id != 3) {
           return response()->json(['message' => 'Hanya admin yang dapat melakukan ini.'], 403);
       }
   
       $today = Carbon::today();
       $startOfPeriod = Carbon::now()->startOfWeek();
       $dayOfPeriod = $today->diffInDays($startOfPeriod) % 7 + 1;
       $numGedungsToUnlock = $dayOfPeriod <= 4 ? 7 : 5;
   
       // Mengambil semua Maba
       $mabaUsers = User::where('role_id', 1)->get();
   
       // Mengambil semua gedung yang belum terkunci hari ini
       $unlockedGedungs = UnlockStatus::whereDate('created_at', $today)->pluck('gedung_id')->toArray();
       $availableGedungs = Gedung::whereNotIn('id', $unlockedGedungs)->get();
   
       if ($availableGedungs->isEmpty()) {
           return response()->json(['message' => 'Tidak ada gedung yang tersedia untuk dibuka hari ini.'], 400);
       }
   
       // Randomize gedung untuk dibuka
       $gedungsToUnlock = $availableGedungs->random(min($numGedungsToUnlock, $availableGedungs->count()));
   
       foreach ($mabaUsers as $user) {
           foreach ($gedungsToUnlock as $gedung) {
               UnlockStatus::create([
                   'user_id' => $user->id,
                   'gedung_id' => $gedung->id,
                   'dateOpen' => Carbon::now()->timestamp,
               ]);
           }
       }
   
       return response()->json([
           'message' => 'Gedung berhasil dibuka untuk Maba.',
           'gedung_terbuka' => $gedungsToUnlock->pluck('nama_gedung')->toArray()
       ]);
   }

}
