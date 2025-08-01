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
     *  Tampilkan semua soal (mendatar dan menurun) beserta key-value yang dibutuhkan React TTS grid.
     *
     * @group Soal
     *
     * @bodyParam jawaban string required Jawaban yang diberikan oleh user.
     *
     */
    public function showTTS()
    {
        $teslas = Tesla::select('nomor', 'tipe', 'pertanyaan', 'jawaban', 'start_row', 'start_col')->get();

        $result = [];
        foreach ($teslas as $t) {
            $result[] = [
                'nomor' => $t->nomor,
                'tipe' => $t->tipe,
                'pertanyaan' => $t->pertanyaan,
                'jawaban' => strtoupper($t->jawaban),
                'start_row' => $t->start_row ?? 0,
                'start_col' => $t->start_col ?? 0,
            ];
        }

        return response()->json([
            'status' => 'success',
            'data' => $result
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
            'pertanyaan' => 'required|string',
            'jawaban' => 'required|string',
            'start_row' => 'nullable|integer',
            'start_col' => 'nullable|integer',
        ]);

        $lastNomor = Tesla::max('nomor');
        $nomor = $request->input('nomor');
        if (!$nomor || $nomor <= 0) {
            $nomor = $lastNomor ? $lastNomor + 1 : 1;
        } else {
            if (Tesla::where('nomor', $nomor)->exists()) {
                return response()->json(['status' => 'error', 'message' => 'Nomor soal sudah dipakai.'], 422);
            }
        }

        $start_row = $request->input('start_row');
        $start_col = $request->input('start_col');

        // Jika start_row dan start_col tidak dikirim atau dua-duanya 0, jalankan algoritma khusus
        if (
            (is_null($start_row) && is_null($start_col)) ||
            ($start_row == 0 && $start_col == 0)
        ) {
            $prevNomor = $nomor - 1;
            $prev = Tesla::where('nomor', $prevNomor)->first();
            if ($prev) {
                if ($prevNomor % 2 == 0) { // genap
                    $start_row = $prev->start_row + 1;
                    $start_col = $prev->start_col + 5;
                } else { // ganjil
                    $start_row = $prev->start_row + 1;
                    $start_col = $prev->start_col - 3;
                }
            } else {
                $start_row = 1;
                $start_col = 1;
            }
        }

        $tesla = Tesla::create([
            'tipe' => $request->input('tipe'),
            'nomor' => $nomor,
            'pertanyaan' => $request->input('pertanyaan'),
            'jawaban' => $request->input('jawaban'),
            'start_row' => $start_row,
            'start_col' => $start_col,
        ]);
        $tesla = Tesla::find($tesla->id);
        return response()->json([
            'status' => 'success',
            'message' => 'Soal ditambahkan',
            'data' => [
                'id' => $tesla->id,
                'tipe' => $tesla->tipe,
                'nomor' => $tesla->nomor,
                'pertanyaan' => $tesla->pertanyaan,
                'jawaban' => $tesla->jawaban,
                'start_row' => $tesla->start_row,
                'start_col' => $tesla->start_col,
                'created_at' => $tesla->created_at,
                'updated_at' => $tesla->updated_at,
            ]
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
            'start_row' => 'nullable|integer|min:0',
            'start_col' => 'nullable|integer|min:0',
        ]);

        // Cek jika nomor diubah ke nomor yang sudah ada di soal lain
        if ($request->has('nomor')) {
            $nomorLain = Tesla::where('nomor', $request->nomor)->where('id', '!=', $id)->first();
            if ($nomorLain) {
                return response()->json(['status' => 'error', 'message' => 'Nomor soal sudah dipakai soal lain.'], 422);
            }
        }

        $start_row = $request->input('start_row');
        $start_col = $request->input('start_col');
        $jawaban = $request->input('jawaban', $tesla->jawaban);

        // --- Improved auto-placement on update if start_row/start_col kosong ---
        if ($start_row === null || $start_col === null) {
            $size = 15;
            $jawabanU = strtoupper(trim($jawaban));
            $panjang = mb_strlen($jawabanU);

            $existing = Tesla::where('id', '!=', $id)->get(['tipe', 'start_row', 'start_col', 'jawaban']);
            $tipe = $request->input('tipe', $tesla->tipe);
            if ($tipe === 'mendatar') {
                $maxRow = $existing->where('tipe', 'mendatar')->max('start_row');
                $start_row = is_null($maxRow) ? 1 : $maxRow + 1;
                $start_col = 1;
                if ($start_row + 1 > $size) {
                    $start_row = 0;
                    $start_col = 0;
                }
            } else {
                $maxCol = $existing->where('tipe', 'menurun')->max('start_col');
                $start_col = is_null($maxCol) ? 3 : $maxCol + 1;
                $start_row = 3;
                if ($start_col + 1 > $size) {
                    $start_row = 0;
                    $start_col = 0;
                }
            }
        }

        $tesla->update([
            'tipe' => $request->input('tipe', $tesla->tipe),
            'nomor' => $request->input('nomor', $tesla->nomor),
            'pertanyaan' => $request->input('pertanyaan', $tesla->pertanyaan),
            'jawaban' => $jawaban,
            'start_row' => $start_row ?? $tesla->start_row,
            'start_col' => $start_col ?? $tesla->start_col,
        ]);
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
