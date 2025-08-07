<?php

namespace App\Http\Controllers;

use App\Models\LogKomdis;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class LogKomdisController extends Controller
{
    public function index(Request $request): Response
    {
        $logs = LogKomdis::with('user')
            ->latest()
            ->get()
            ->map(function ($log) {
                return [
                    'id' => $log->id,
                    'user' => [
                        'name' => $log->user->name,
                        'nim' => $log->user->nim,
                    ],
                    'kesalahan' => $log->kesalahan,
                    'kategori' => $log->kategori,
                    'keterangan' => $log->keterangan,
                    'status' => $log->status,
                    'formatted_status' => $log->formatted_status,
                    'status_badge_class' => $log->status_badge_class,
                    'created_at' => $log->created_at->format('Y-m-d H:i:s'),
                    'formatted_date' => $log->created_at->format('d/m/Y H:i'),
                ];
            });

        // Handle redirect from QR scanner
        $userData = null;
        $redirectToInput = false;
        
        if ($request->has('userData')) {
            $userData = json_decode($request->userData, true);
            $redirectToInput = $request->boolean('redirectToInput');
        }

        return Inertia::render('Dashboard/komdis/Page', [
            'logs' => $logs,
            'userData' => $userData,
            'redirectToInput' => $redirectToInput,
        ]);
    }

    /**
     * Halaman QR Scanner untuk komdis
     */
    public function scanner(): Response
    {
        return Inertia::render('Dashboard/komdis/Scanner');
    }

    public function create(Request $request)
    {
        // Jika request berisi QR code (bukan NIM langsung)
        if ($request->has('qr_code')) {
            return $this->handleQRScan($request);
        }
        
        // Jika request berisi NIM langsung (input manual)
        $user = User::where('nim', $request->nim)->first();

        if (!$user) {
            // Untuk AJAX request, return JSON
            if ($request->expectsJson() || $request->ajax() || $request->wantsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Mahasiswa tidak ditemukan'
                ], 404);
            }
            
            abort(404, 'Mahasiswa tidak ditemukan');
        }

        // Untuk AJAX request, return JSON
        if ($request->expectsJson() || $request->ajax() || $request->wantsJson()) {
            return response()->json([
                'success' => true,
                'data' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'nim' => $user->nim,
                    'email' => $user->email,
                ]
            ]);
        }

        return Inertia::render('Dashboard/komdis/Create', [
            'user' => $user,
        ]);
    }

    /**
     * Handle QR Code scan (code random dari tabel qrcodes)
     */
    private function handleQRScan(Request $request)
    {
        $validated = $request->validate([
            'qr_code' => 'required|string|max:10',
        ]);

        // Cari QR code di tabel qrcodes (sama seperti presensi)
        $qrcode = \App\Models\Qrcode::where('code', $validated['qr_code'])->first();
        
        if (!$qrcode) {
            return response()->json([
                'success' => false,
                'message' => 'QR Code tidak ditemukan',
                'data' => [
                    'qr_code' => $validated['qr_code']
                ]
            ], 404);
        }

        // Ambil user berdasarkan user_id dari qrcode
        $user = User::find($qrcode->user_id);
        
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User tidak ditemukan'
            ], 404);
        }

        // Validasi role untuk akses (opsional, sesuaikan dengan kebutuhan)
        // Untuk komdis mungkin tidak perlu validasi kelompok/prodi seperti presensi
        
        return response()->json([
            'success' => true,
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'nim' => $user->nim,
                'email' => $user->email,
            ],
            'message' => 'Mahasiswa ditemukan: ' . $user->name
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'kesalahan' => 'required|string|max:1000',
            'kategori' => 'nullable|string|max:255',
            'keterangan' => 'nullable|string|max:1000',
        ]);

        try {
            $logKomdis = LogKomdis::create([
                'user_id' => $validated['user_id'],
                'kesalahan' => $validated['kesalahan'],
                'kategori' => $validated['kategori'] ?? null,
                'keterangan' => $validated['keterangan'] ?? null,
                'status' => 'belum diproses',
            ]);

            return redirect()->route('dashboard.komdis.index')->with('success', 'Data komdis berhasil ditambahkan.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Gagal menyimpan data: ' . $e->getMessage());
        }
    }

    public function edit(LogKomdis $logKomdis): Response
    {
        return Inertia::render('Dashboard/komdis/Edit', [
            'logKomdis' => [
                'id' => $logKomdis->id,
                'user' => [
                    'name' => $logKomdis->user->name,
                    'nim' => $logKomdis->user->nim,
                ],
                'kesalahan' => $logKomdis->kesalahan,
                'kategori' => $logKomdis->kategori,
                'keterangan' => $logKomdis->keterangan,
                'status' => $logKomdis->status,
            ],
            'statusOptions' => LogKomdis::getStatusOptions(),
        ]);
    }

    public function update(Request $request, LogKomdis $logKomdis)
    {
        $validated = $request->validate([
            'kesalahan' => 'required|string|max:1000',
            'kategori' => 'nullable|string|max:255',
            'keterangan' => 'nullable|string|max:1000',
            'status' => ['required', Rule::in(['belum diproses', 'proses', 'selesai', 'dibatalkan'])],
        ]);

        try {
            $logKomdis->update($validated);

            return redirect()->route('dashboard.komdis.index')->with('success', 'Data berhasil diupdate.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Gagal mengupdate data: ' . $e->getMessage());
        }
    }

    public function destroy(LogKomdis $logKomdis)
    {
        try {
            $logKomdis->delete();

            return redirect()->route('dashboard.komdis.index')->with('success', 'Data berhasil dihapus.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Gagal menghapus data: ' . $e->getMessage());
        }
    }
}