<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PresensiCui;
use App\Models\LogCui;

class PresensiCuiController extends Controller
{

    public function UpdateHadir(Request $request)
    {
        $request->validate([
            'log_id' => 'required|exists:log_cui,id',
        ]);

        $logCui = LogCui::find($request->log_id);
        if(!$logCui){
            return response()->json(['message'=> 'Log Cui tidak ditemukan'],404);
        }
        $logCui->update([
            'status' => 'hadir', 
        ]);
        return response()->json(['message'=> 'Berhasil Presensi'],200);
    }



    public function UpdateIzin(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:hadir,izin',
            'ket_izin' => 'required|string',
            'waktu_izin' => 'required|date',
        ]);

        $logCui = LogCui::find($id);

        if (!$logCui) {
            return response()->json(['message' => 'Log Cui tidak ditemukan'], 404);
        }

        $logCui->update([
            'status' => $request->status,
            'ket_izin' => $request->ket_izin,
            'waktu_izin' => $request->waktu_izin,
        ]);

        return response()->json(['message' => 'Berhasil memperbarui log'], 200);
    }
}
