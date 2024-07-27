<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tugas;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TugasController extends Controller
{
   // public function __construct()
   // {
   //     $this->middleware('auth');
   //     $this->middleware('role:mahasiswa')->only(['create', 'store', 'edit', 'update', 'destroy']);
   //     $this->middleware('role:admin,dapmen')->only(['index', 'show']);
   // }

   public function index()
   {
      $tugas = Tugas::all();
      return view('tugas.index', compact('tugas'));
   }

   public function create()
   {
      return view('tugas.create');
   }

   public function store(Request $request)
   {
      $request->validate([
         'link' => 'required|string',
         'user_id' => 'required|exists:users,id',
         'materi' => 'required|in:materi1, materi2, materi3',
         'tanggal_submit' => 'required|date',
         'kategori_tugas' => 'required|in:individu,kelompok',
      ]);

      DB::beginTransaction();
      try {
         Tugas::create($request->all());
         DB::commit();
         return redirect()->route('tugas.index')->with('success', 'Tugas berhasil dikirim.');
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('tugas.create')->with('error', 'Gagal mengirim tugas. Silakan coba lagi.');
      }
   }

   public function show($id)
   {
      $tugas = Tugas::findOrFail($id);
      return view('tugas.show', compact('tugas'));
   }

   public function edit($id)
   {
      $tugas = Tugas::findOrFail($id);
      return view('tugas.edit', compact('tugas'));
   }

   public function update(Request $request, $id)
   {
      $request->validate([
         'link' => 'required|string',
         'user_id' => 'required|exists:users,id',
         'materi' => 'required|in:materi1, materi2, materi3',
         'tanggal_submit' => 'required|date',
         'kategori_tugas' => 'required|in:individu,kelompok',
      ]);

      DB::beginTransaction();
      try {
         $tugas = Tugas::findOrFail($id);
         $tugas->update($request->all());
         DB::commit();
         return redirect()->route('tugas.index')->with('success', 'Tugas berhasil diperbarui.');
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('tugas.edit', $id)->with('error', 'Gagal memperbarui tugas. Silakan coba lagi.');
      }
   }

   public function destroy($id)
   {
      DB::beginTransaction();
      try {
         $tugas = Tugas::findOrFail($id);
         $tugas->delete();
         DB::commit();
         return redirect()->route('tugas.index')->with('success', 'Tugas berhasil dihapus.');
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('tugas.index')->with('error', 'Gagal menghapus tugas. Silakan coba lagi.');
      }
   }
   public function return(Request $request, $id)
   {
      $validated = $request->validate([
         'catatan' => 'required|string',
      ]);

      $tugas = Tugas::findOrFail($id);
      $tugas->returnTugas($validated['catatan']);

      return redirect()->back()->with('success', 'Tugas telah dikembalikan.');
   }

   public function getAllTugas(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $auth = Auth::user();
      if ($auth->role_id == 3) {
         $query = Tugas::query();
      } elseif ($auth->role_id == 2 || $auth->role_id == 3) {
         $query = Tugas::query()->where('kelompok_id', $auth->kelompok_id);
      }

      $query->with('user')
         ->when($searchTerm, function ($query) use ($searchTerm) {
            // return $query->where('nim', 'like', '%' . $searchTerm . '%')
            //     ->orWhere('name', 'like', '%' . $searchTerm . '%')

            return $query->whereHas('user', function ($q) use ($searchTerm) {
               $q->where('name', 'like', '%' . $searchTerm . '%')
                  ->orWhere('nim', 'like', '%' . $searchTerm . '%')
                  ->orWhere('email', 'like', '%' . $searchTerm . '%')
                  ->orWhere('materi', 'like', '%' . $searchTerm . '%')
                  ->orWhere('kategori_tugas', 'like', '%' . $searchTerm . '%');
            });
         });

      //     $query = LogCui::query()
      //  ->with(['user', 'user.penyakit', 'user.kelompok']) // Memastikan semua data yang diperlukan di eager load
      //  ->when($searchTerm, function ($query) use ($searchTerm) {

      //  });

      $tugass = $query->paginate($perPage);

      $currentPage = $tugass->currentPage(); // Halaman saat ini
      $perPage = $tugass->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $tugass->getCollection()->transform(function ($tugas) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'tugas' => $tugas
         ];
      });

      return response()->json($tugass);
   }
   public function getTugasKelompok(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');
      $auth = Auth::user();
      if ($auth->role_id == 3) {
         $query = Tugas::query();
      } elseif ($auth->role_id == 2 || $auth->role_id == 3) {
         $query = Tugas::query()->where('kelompok_id', $auth->kelompok_id);
      }

      $query->where('kategori_tugas', 'kelompok')->with('user')
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->where('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('name', 'like', '%' . $searchTerm . '%')
               ->orWhere('materi', 'like', '%' . $searchTerm . '%')
               ->orWhere('kategori_tugas', 'like', '%' . $searchTerm . '%');
         });

      $tugass = $query->paginate($perPage);

      $currentPage = $tugass->currentPage(); // Halaman saat ini
      $perPage = $tugass->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $tugass->getCollection()->transform(function ($tugas) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'tugas' => $tugas
         ];
      });

      return response()->json($tugass);
   }
   public function getTugasIndividu(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $auth = Auth::user();
      if ($auth->role_id == 3) {
         $query = Tugas::query();
      } elseif ($auth->role_id == 2 || $auth->role_id == 3) {
         $query = Tugas::query()->where('kelompok_id', $auth->kelompok_id);
      }

      $query
         ->where('kategori_tugas', 'individu')->with('user')
         ->when($searchTerm, function ($query) use ($searchTerm) {
            return $query->where('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('name', 'like', '%' . $searchTerm . '%')
               ->orWhere('materi', 'like', '%' . $searchTerm . '%')
               ->orWhere('kategori_tugas', 'like', '%' . $searchTerm . '%');
         });

      $tugass = $query->paginate($perPage);

      $currentPage = $tugass->currentPage(); // Halaman saat ini
      $perPage = $tugass->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $tugass->getCollection()->transform(function ($tugas) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'tugas' => $tugas
         ];
      });

      return response()->json($tugass);
   }
}