<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller; // <-- tambahkan ini
use Illuminate\Http\Request;
use App\Models\Tesla;
use App\Models\User;
use App\Models\Day;
use App\Models\Progres;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

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

    // --- DAY ENDPOINTS ---

    /**
     * Get current day value.
     */
    public function getDay()
    {
        $day = Day::first();
        return response()->json([
            'status' => 'success',
            'data' => $day
        ]);
    }

    /**
     * Update day value.
     */
    public function updateDay(Request $request)
    {
        $request->validate([
            'change_day' => 'required|string'
        ]);
        $day = Day::first();
        if (!$day) {
            $day = Day::create([
                'change_day' => $request->input('change_day')
            ]);
        } else {
            $day->change_day = $request->input('change_day');
            $day->save();
        }
        return response()->json([
            'status' => 'success',
            'data' => $day
        ]);
    }

    // --- PROGRES ENDPOINTS ---

    /**
     * API: Ambil semua progres milik user yang sedang login (user_id dari request->user()->id)
     */
    public function getProgres()
    {
        $user = auth()->user(); // Ambil user yang sedang login

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized'
            ], 401);
        }

        $progres = Progres::where('user_id', $user->id)
            ->orderBy('tanggal', 'desc')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'tanggal' => $item->tanggal,
                    'waktu' => $item->waktu,
                    'selesai' => $item->selesai,
                    'jawaban' => $item->jawaban,
                    'skor' => $item->skor,
                ];
            })
            ->values();

        return response()->json([
            'status' => 'success',
            'data' => $progres
        ]);
    }


    /**
     * API: Simpan progres baru (user_id dari request->user()->id, fallback ke request->input('user_id'))
     */
    public function storeProgres(Request $request)
    {
        // Coba ambil user id dari request->user(), jika null ambil dari input user_id
        $userId = optional($request->user())->id ?? $request->input('user_id');
        if (!$userId) {
            return response()->json([
                'status' => 'error',
                'message' => 'User id tidak ditemukan (harus login atau sertakan user_id di body)'
            ], 400);
        }
        $request->validate([
            'tanggal' => 'required|date',
            'waktu' => 'required|integer',
            'selesai' => 'required|integer',
            'jawaban' => 'required|string',
            'skor' => 'required|integer',
        ]);
        $progres = Progres::create([
            'user_id' => $userId,
            'tanggal' => $request->tanggal,
            'waktu' => $request->waktu,
            'selesai' => $request->selesai,
            'jawaban' => $request->jawaban,
            'skor' => $request->skor,
        ]);
        return response()->json([
            'status' => 'success',
            'data' => $progres
        ]);
    }

    /**
     * API: Ambil semua progres milik user tertentu (user_id dari parameter $id), response mirip getTugasUser
     */
    public function getProgresByUserId($id)
    {
        try {
            $progres = Progres::where('user_id', $id)->get();
            $nama = User::findOrFail($id)->name;
        } catch (\Exception $e) {
            return response()->json([
                'response' => [
                    'status' => 500,
                    'message' => $e->getMessage()
                ]
            ]);
        }

        $response = $progres->transform(function ($item) {
            return [
                'id' => $item->id,
                'tanggal' => $item->tanggal,
                'waktu' => $item->waktu,
                'selesai' => $item->selesai,
                'jawaban' => $item->jawaban,
                'skor' => $item->skor,
            ];
        });

        return response()->json([
            'response' => [
                'status' => 200,
                'message' => 'Berhasil mendapatkan data',
                'data' => $response
            ],
            'nama' => $nama
        ]);
    }

    // Render TTS page with initial data (for Inertia)
    public function page(Request $request)
    {
        $teslas = Tesla::select('nomor', 'tipe', 'pertanyaan', 'jawaban', 'start_row', 'start_col')->get();
        $day = Day::first();
        return Inertia::render('Tesla/Page', [
            'teslas' => $teslas,
            'day' => $day ? $day->change_day : 'DAY 1',
            // Optionally, pass user progress/history here if needed
        ]);
    }

    // Handle answer submission (POST), redirect back with flash result
    public function answer(Request $request, $nomor)
    {
        $request->validate([
            'jawaban' => 'required|string',
        ]);
        $tesla = Tesla::where('nomor', $nomor)->first();
        if (!$tesla || !$tesla->jawaban) {
            return Redirect::back()->with('answer_result', [
                'status' => 'error',
                'message' => 'Soal/jawaban tidak ditemukan',
                'hasil' => 'error',
            ]);
        }
        $userAnswer = strtolower(trim($request->jawaban));
        $correctAnswer = strtolower(trim($tesla->jawaban));
        $hasil = $userAnswer === $correctAnswer ? 'benar' : 'salah';
        return Redirect::back()->with('answer_result', [
            'status' => 'success',
            'message' => $hasil === 'benar' ? 'Jawaban benar!' : 'Jawaban salah!',
            'hasil' => $hasil,
            'jawaban_user' => $request->jawaban,
            'nomor' => $nomor,
        ]);
    }
}
