<?php

namespace App\Http\Controllers;

use App\Models\Kelompok;
use App\Models\Scoreboard;
use Illuminate\Http\Request;

class KelompokController extends Controller
{
    /**
     * Mengambil daftar user_id berdasarkan kelompok_id dan menggabungkannya menjadi satu kelompok.
     *
     * @param  int  $kelompok_id
     * @return \Illuminate\Http\Response
     */
    public function getUserIdsByKelompokId($kelompok_id)
    {
        // Mengambil kelompok berdasarkan id
        $kelompok = Kelompok::find($kelompok_id);

        // Mengecek apakah kelompok ditemukan
        if (!$kelompok) {
            return response()->json(['error' => 'Kelompok tidak ditemukan'], 404);
        }

        // Mengambil user_id berdasarkan kelompok_id
        $userId = $kelompok->user()->pluck('id');

        // Menggabungkan user_id menjadi satu kelompok (array)
        $groupedUserId = $userId->toArray();

        // Mengembalikan daftar user_id yang tergabung dalam satu kelompok
        return response()->json(['kelompok_id' => $kelompok_id, 'user_id' => $groupedUserId]);
    }


}
