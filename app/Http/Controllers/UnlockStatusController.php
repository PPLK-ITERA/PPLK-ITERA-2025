<?php

namespace App\Http\Controllers;

use App\Models\quiz;
use Illuminate\Http\Request;
use App\Models\UnlockStatus;
use App\Models\gedung;
use App\Models\Kelompok;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class UnlockStatusController extends Controller
{
    public function unlockGedung()
    {
        $user = Auth::user();
        $kelompok = $user->kelompok;
    
        if (!$kelompok) {
            return response()->json(['message' => 'User tidak termasuk dalam kelompok manapun.'], 400);
        }
    
        // Cek apakah kelompok sudah membuka gedung hari ini
        $todayUnlock = UnlockStatus::where('kelompok_id', $kelompok->id)
                        ->whereDate('created_at', Carbon::today())
                        ->first();
    
        if ($todayUnlock) {
            return response()->json(['message' => 'Kelompok Anda sudah membuka gedung hari ini.'], 400);
        }
    
        // Ambil gedung yang belum dibuka oleh kelompok ini
        $unlockedGedungs = UnlockStatus::where('kelompok_id', $kelompok->id)->pluck('gedung_id')->toArray();
        $availableGedungs = gedung::whereNotIn('id', $unlockedGedungs)->get();
    
        if ($availableGedungs->isEmpty()) {
            return response()->json(['message' => 'Semua gedung sudah terbuka untuk kelompok Anda.'], 400);
        }
    
        // Randomize gedung yang tersedia
        $gedung = $availableGedungs->random();
    
        // Buat status pembukaan gedung baru
        UnlockStatus::create([
            'user_id' => $user->id,
            'kelompok_id' => $kelompok->id,
            'gedung_id' => $gedung->id,
            'dateOpen' => Carbon::now()->timestamp,
        ]);
    
        return response()->json([
            'kelompok' => $kelompok->nama_kelompok,
            'gedung' => $gedung->nama_gedung,
            'date_open' => Carbon::now()->toDateTimeString(),
        ]);
    }
}
