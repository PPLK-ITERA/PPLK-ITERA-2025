<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller; // <-- tambahkan ini
use Illuminate\Http\Request;
use App\Models\Tesla;
use Inertia\Inertia;

class TeslaController extends Controller
{
    // Hapus $kunciJawaban karena sudah tidak dipakai

    // --- USER ENDPOINTS ---

    /**
     * Soal TTS.
     *
     *  Tampilkan semua soal (mendatar dan menurun)
     *
     * @group Soal
     *
     * @bodyParam jawaban string required Jawaban yang diberikan oleh user.
     *
     */
    public function index()
    {
        // Untuk API user: hanya select kolom yang diperlukan
        $teslas = Tesla::select('nomor', 'tipe', 'pertanyaan')->get();
        return response()->json([
            'status' => 'success',
            'data' => $teslas
        ]);
    }

    // Tampilkan UI TTS dengan Inertia
    public function showTTS()
    {
        $teslas = Tesla::select('nomor', 'tipe', 'pertanyaan')->get();
        return response()->json([
            'status' => 'success',
            'data' => $teslas
        ]);
    }

    // Cek jawaban berdasarkan tipe soal dan nomor
    /** Jawab_Soal_TTS.
     *
     *  User Mengirimkan jawaban untuk soal TTS berdasarkan nomor
     *
     * @group Soal
     *
     * @bodyParam jawaban string required Jawaban yang diberikan oleh user.
     *
     */
    public function cekJawaban(Request $request, $nomor)
    {
        // 1. Validasi input dari user, pastikan ada 'jawaban' yang dikirim.
        $request->validate([
            'jawaban' => 'required|string',
        ]);

        // 2. Cari soal di database berdasarkan 'nomor' yang diberikan.
        //    Kita juga mengambil kolom 'jawaban' yang sekarang ada di database.
        $tesla = Tesla::where('nomor', $nomor)->select('nomor', 'tipe', 'pertanyaan', 'jawaban')->first();

        // 3. Jika soal dengan nomor tersebut tidak ditemukan, kirim response 404.
        if (!$tesla) {
            return response()->json([
                'status' => 'error',
                'message' => 'Soal tidak ditemukan',
                'hasil' => 'error'
            ], 404);
        }

        // Tambahkan pengecekan jika field jawaban di database kosong/null
        if (!$tesla->jawaban) {
            return response()->json([
                'status' => 'error',
                'message' => 'Jawaban untuk soal ini belum tersedia di database.',
                'hasil' => 'error'
            ], 500);
        }

        // 4. Bersihkan jawaban user dan ambil jawaban yang benar dari database.
        //    Keduanya diubah ke huruf kecil untuk perbandingan yang case-insensitive.
        $userAnswer = strtolower(trim($request->jawaban));
        $correctAnswer = strtolower(trim($tesla->jawaban)); // <-- tambahkan trim di sini

        // 5. Bandingkan jawaban user dengan jawaban yang benar.
        $hasil = $userAnswer === $correctAnswer ? 'benar' : 'salah';

        // Simpan feedback ke session untuk ditampilkan di UI
        return response()->json([
            'status' => 'success',
            'message' => $hasil === 'benar' ? 'Jawaban benar!' : 'Jawaban salah!',
            'hasil' => $hasil,
            'jawaban_user' => $request->jawaban
        ]);
    }

    // --- ADMIN ENDPOINTS (CRUD) ---

    /**
     * Tampilkan Semua Soal TTS (admin).
     */
    public function adminIndex()
    {
        $teslas = Tesla::all();
        return response()->json([
            'status' => 'success',
            'data' => $teslas
        ]);
    }

    /**
     * Tampilkan Detail Soal TTS (admin).
     */
    public function show($id)
    {
        $tesla = Tesla::find($id);
        if (!$tesla) {
            return response()->json(['status' => 'error', 'message' => 'Soal tidak ditemukan'], 404);
        }
        return response()->json([
            'status' => 'success',
            'data' => $tesla
        ]);
    }

    /**
     * Tambah Soal TTS Baru (admin).
     */
    public function store(Request $request)
    {
        $request->validate([
            'tipe' => 'required|in:mendatar,menurun',
            'nomor' => 'required|integer|unique:teslas,nomor',
            'pertanyaan' => 'required|string',
            'jawaban' => 'required|string',
        ]);

        $tesla = Tesla::create($request->only(['tipe', 'nomor', 'pertanyaan', 'jawaban']));
        return response()->json([
            'status' => 'success',
            'message' => 'Soal ditambahkan',
            'data' => $tesla
        ]);
    }

    /**
     * Perbarui Soal TTS (admin).
     */
    public function update(Request $request, $id)
    {
        $tesla = Tesla::find($id);
        if (!$tesla) {
            return response()->json(['status' => 'error', 'message' => 'Soal tidak ditemukan'], 404);
        }

        $request->validate([
            'tipe' => 'in:mendatar,menurun',
            'nomor' => 'integer',
            'pertanyaan' => 'string',
            'jawaban' => 'string',
        ]);

        // Cek jika nomor diubah ke nomor yang sudah ada di soal lain
        if ($request->has('nomor')) {
            $nomorLain = Tesla::where('nomor', $request->nomor)->where('id', '!=', $id)->first();
            if ($nomorLain) {
                return response()->json(['status' => 'error', 'message' => 'Nomor soal sudah dipakai soal lain.'], 422);
            }
        }

        $tesla->update($request->only(['tipe', 'nomor', 'pertanyaan', 'jawaban']));
        return response()->json([
            'status' => 'success',
            'message' => 'Soal diperbarui',
            'data' => $tesla
        ]);
    }

    /**
     * Hapus Soal TTS (admin).
     */
    public function destroy($id)
    {
        $tesla = Tesla::find($id);
        if (!$tesla) {
            return response()->json(['status' => 'error', 'message' => 'Soal tidak ditemukan'], 404);
        }
        $tesla->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Soal dihapus'
        ]);
    }
}
