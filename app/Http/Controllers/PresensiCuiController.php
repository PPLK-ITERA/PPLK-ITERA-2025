<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PresensiCui;
use App\Models\LogCui;

class PresensiCuiController extends Controller
{
    public function index()
    {
        return view('presensicui.index');
    }

    public function process(Request $request)
    {
        $data = $request->validate([
            'status' => 'required|in:hadir,izin',
        ]);

        if ($data['status'] === 'hadir') {
            // Jika status hadir, langsung arahkan ke halaman scan
            return redirect()->route('presensi.scan');
        } elseif ($data['status'] === 'izin') {
            // Jika status izin, arahkan ke halaman form input izin
            return redirect()->route('presensi.inputizin');
        }
    }

    public function scanPage()
    {
        // Tampilkan halaman scan QR code
        return view('presensi.scan_qr');
    }

    public function scanQrCode(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
            'nim' => 'required|string',
            'email' => 'required|email',
            'penyakit_id' => 'required|exists:penyakit,id',
            'qrcode_id' => 'required|exists:qrcode,id',
            'user_id' => 'required|exists:user_cui,id',
            'log_id' => 'required|exists:log_cui,id',
            'status' => 'required|in:maba,civak',
        ]);

        // Simpan log ke dalam tabel LogCui
        $logCui = LogCui::create([
            'status' => 'hadir', 
        ]);

        if ($logCui) {
            // Simpan presensi ke dalam tabel PresensiCui
            $presensiCui = PresensiCui::create([
                'user_id' => $request->user_id,
                'nama' => $request->nama,
                'nim' => $request->nim,
                'email' => $request->email,
                'penyakit_id' => $request->penyakit_id,
                'qrcode_id' => $request->qrcode_id,
                'log_id' => $logCui->id, 
                'status' => $request->status,
            ]);

            if ($presensiCui) {
                return response()->json($presensiCui, 200);
            }
        }

        return response()->json(['message' => 'Gagal menyimpan presensi'], 500);
    }

    public function inputizin()
    {
        return view('presensi.input_izin');
    }

    public function update(Request $request, $id)
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
