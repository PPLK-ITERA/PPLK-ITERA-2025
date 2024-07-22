<?php

namespace App\Http\Controllers;

use App\Models\Booklet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookletController extends Controller
{
   public function index()
   {
      $booklet = Booklet::all();
      return Inertia::render('Booklet/CarouselBooklet', [
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mengambil booklet',
            'data' => $booklet
         ]
      ]);
   }

   public function store(Request $request)
   {
      $request->validate([
         'nama_booklet' => 'required|string',
         'url_booklet' => 'required|string',
      ]);

      $booklet = Booklet::create(
         [
            'nama_booklet' => $request->nama_booklet,
            'url_booklet' => $request->url_booklet,
         ]
      );

      if ($booklet) {
         return Inertia::render('Booklet/CarouselBooklet', [
            'response' => [
               'status' => 201,
               'message' => 'Berhasil menambahkan booklet',
               'data' => $booklet
            ]
         ]);
      }

      return Inertia::render('Booklet/CarouselBooklet', [
         'response' => [
            'status' => 500,
            'message' => 'Gagal menambahkan booklet',
         ]
      ]);
   }

   public function update(Request $request, $id)
   {
      $request->validate([
         'nama_booklet' => 'required|string',
         'url_booklet' => 'required|string',
      ]);

      $booklet = Booklet::find($id);

      $booklet->update(
         [
            'nama_booklet' => $request->nama_booklet,
            'url_booklet' => $request->url_booklet,
         ]
      );

      if ($booklet) {
         return Inertia::render('Booklet/CarouselBooklet', [
            'response' => [
               'status' => 201,
               'message' => 'Berhasil menambahkan booklet',
               'data' => $booklet
            ]
         ]);
      }

      return Inertia::render('Booklet/CarouselBooklet', [
         'response' => [
            'status' => 500,
            'message' => 'Gagal mengubah booklet',
         ]
      ]);
   }

   public function delete($id)
   {
      $booklet = Booklet::find($id)->delete();

      if ($booklet) {
         return Inertia::render('Booklet/CarouselBooklet', [
            'response' => [
               'status' => 201,
               'message' => 'Berhasil menghapus booklet',
            ]
         ]);
      }

      return Inertia::render('Booklet/CarouselBooklet', [
         'response' => [
            'status' => 500,
            'message' => 'Gagal menghapus booklet',
         ]
      ]);
   }
}