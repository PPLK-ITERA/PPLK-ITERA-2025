<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Requests\StoreDokumentasiRequest;
use App\Http\Requests\UpdateDokumentasiRequest;
use App\Models\Dokumentasi;
use App\Models\FotoDokumentasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DokumentasiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Ambil semua dokumentasi dengan relasi foto, urutkan berdasarkan hari
        $dokumentasi = Dokumentasi::with('fotos')
            ->orderByHari()
            ->get();

        $foto_dokumentasi = FotoDokumentasi::select('dokumentasi_id', DB::raw('count(*) as total'))
            // ->whereIn('dokumentasi_id', [1, 2, 3, 4, 5])
            ->groupBy('dokumentasi_id')
            ->pluck('total', 'dokumentasi_id');

        return Inertia::render('Dashboard/dokumentasi/page', compact('dokumentasi', 'foto_dokumentasi'));
        // return response()->json([
        //     'response' => [
        //         'status' => 200,
        //         'data' => $dokumentasi
        //     ]
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // Ambil hari yang sudah ada untuk disable di form
        $hariTerpakai = Dokumentasi::pluck('hari_ke')->toArray();

        return view('dokumentasi.create', [
            'dokumentasi' => $dokumentasi
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDokumentasiRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDokumentasiRequest $request)
    {
        try {
            // Buat entri dokumentasi baru
            $dokumentasi = Dokumentasi::create([
                'hari_ke' => $request->hari_ke,
                'judul' => $request->judul,
                'deskripsi' => $request->deskripsi,
                'link_gdrive' => $request->link_gdrive,
            ]);

            // Upload foto jika ada
            if ($request->hasFile('fotos')) {
                $this->uploadFotos($request->file('fotos'), $dokumentasi);
            }

            return redirect()
                ->route('dashboard.dokumentasi.index')
                ->with('success', 'Dokumentasi hari ke-' . $request->hari_ke . ' berhasil ditambahkan.');

        } catch (\Exception $e) {
            return redirect()
                ->back()
                ->withInput()
                ->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dokumentasi  $dokumentasi
     * @return \Illuminate\Http\Response
     */
    public function show(Dokumentasi $dokumentasi)
    {
        // Load relasi foto
        $dokumentasi->load('fotos');

        // return view('dokumentasi.show', compact('dokumentasi'));
        return Inertia::render('Dashboard/dokumentasi/detail', compact('dokumentasi'));
        // return response()->json([
            // 'response' => [
                // 'status' => 200,
                // 'data' => $dokumentasi
            // ]
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dokumentasi  $dokumentasi
     * @return \Illuminate\Http\Response
     */
    public function edit(Dokumentasi $dokumentasi)
    {
        // Load relasi foto
        $dokumentasi->load('fotos');

        // return view('dokumentasi.edit', compact('dokumentasi'));
        return Inertia::render('Dashboard/dokumentasi/edit', compact('dokumentasi'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDokumentasiRequest  $request
     * @param  \App\Models\Dokumentasi  $dokumentasi
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDokumentasiRequest $request, Dokumentasi $dokumentasi)
    {
        try {
            // Update data dokumentasi
            $dokumentasi->update([
                'judul' => $request->judul,
                'deskripsi' => $request->deskripsi,
                'link_gdrive' => $request->link_gdrive,
                // hari_ke tidak diupdate karena sudah fixed
            ]);

            // Hapus foto yang dipilih untuk dihapus
            if ($request->has('hapus_foto')) {
                $this->hapusFotos($request->hapus_foto, $dokumentasi);
            }

            // Upload foto baru jika ada
            if ($request->hasFile('fotos')) {
                $this->uploadFotos($request->file('fotos'), $dokumentasi);
            }

            return redirect()
                ->route('dashboard.dokumentasi.index')
                ->with('success', 'Dokumentasi hari ke-' . $dokumentasi->hari_ke . ' berhasil diperbarui.');

        } catch (\Exception $e) {
            return redirect()
                ->back()
                ->withInput()
                ->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dokumentasi  $dokumentasi
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dokumentasi $dokumentasi)
    {
        try {
            $hariKe = $dokumentasi->hari_ke;

            // Hapus semua foto terkait (akan otomatis terhapus lewat model boot method)
            $dokumentasi->fotos()->delete();

            // Hapus dokumentasi
            $dokumentasi->delete();

            return redirect()
                ->route('dashboard.dokumentasi.index')
                ->with('success', 'Dokumentasi hari ke-' . $hariKe . ' berhasil dihapus.');

        } catch (\Exception $e) {
            return redirect()
                ->back()
                ->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }

    /**
     * Hapus foto individual (untuk AJAX atau form terpisah)
     *
     * @param  FotoDokumentasi  $fotoDokumentasi
     * @return \Illuminate\Http\Response
     */
    public function deleteFoto(FotoDokumentasi $fotoDokumentasi)
    {
        try {
            $fotoDokumentasi->delete();

            if (request()->ajax()) {
                return response()->json(['success' => true, 'message' => 'Foto berhasil dihapus.']);
            }

            return redirect()
                ->back()
                ->with('success', 'Foto berhasil dihapus.');

        } catch (\Exception $e) {
            if (request()->ajax()) {
                return response()->json(['success' => false, 'message' => 'Terjadi kesalahan: ' . $e->getMessage()]);
            }

            return redirect()
                ->back()
                ->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }

    /**
     * Helper method untuk upload foto
     *
     * @param array $fotos
     * @param Dokumentasi $dokumentasi
     * @return void
     */
    private function uploadFotos($fotos, Dokumentasi $dokumentasi)
    {
        foreach ($fotos as $foto) {
            if ($foto && $foto->isValid()) {
                // Generate nama file unik
                $namaFile = $foto->getClientOriginalName();
                $extension = $foto->getClientOriginalExtension();
                $namaFileUnik = 'hari_' . $dokumentasi->hari_ke . '_' . time() . '_' . Str::random(10) . '.' . $extension;

                // Path penyimpanan
                $path = 'public/dokumentasi/hari_' . $dokumentasi->hari_ke;

                // Simpan file
                $pathFile = $foto->storeAs($path, $namaFileUnik);

                // Simpan record ke database
                FotoDokumentasi::create([
                    'dokumentasi_id' => $dokumentasi->id,
                    'nama_file' => $namaFile,
                    'path_file' => $pathFile,
                ]);
            }
        }
    }

    /**
     * Helper method untuk hapus foto
     *
     * @param array $fotoIds
     * @param Dokumentasi $dokumentasi
     * @return void
     */
    private function hapusFotos($fotoIds, Dokumentasi $dokumentasi)
    {
        // Ambil foto yang akan dihapus (pastikan milik dokumentasi ini)
        $fotos = FotoDokumentasi::whereIn('id', $fotoIds)
            ->where('dokumentasi_id', $dokumentasi->id)
            ->get();

        foreach ($fotos as $foto) {
            // Hapus file dari storage dan record dari database
            $foto->delete();
        }
    }
}
