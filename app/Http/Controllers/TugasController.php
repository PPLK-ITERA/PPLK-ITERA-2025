<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TugasController extends Controller
{
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
        ]);

        Tugas::create($request->all());
        return redirect()->route('tugas.index')->with('success', 'Tugas berhasil dibuat');
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
        ]);

        $tugas = Tugas::findOrFail($id);
        $tugas->update($request->all());
        return redirect()->route('tugas.index')->with('success', 'Tugas berhasil diupdate');
    }

    public function destroy($id)
    {
        $tugas = Tugas::findOrFail($id);
        $tugas->delete();
        return redirect()->route('tugas.index')->with('success', 'Tugas berhasil dihapus');
    }
}
