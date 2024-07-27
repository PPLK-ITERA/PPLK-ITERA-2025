<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tugas;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

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
}
