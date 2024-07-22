<?php

namespace App\Http\Controllers;

use App\Models\Booklet;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

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
      DB::beginTransaction();
      try{
         $booklet = Booklet::create(
            [
               'nama_booklet' => $request->nama_booklet,
               'url_booklet' => $request->url_booklet,
            ]
         );

         DB::commit();

         if ($booklet) {
            return Inertia::render('Booklet/CarouselBooklet', [
               'response' => [
                  'status' => 201,
                  'message' => 'Berhasil menambahkan booklet',
                  'data' => $booklet
               ]
            ]);
         }
      } catch (\Exception $e) {
         DB::rollBack();
         return Inertia::render('Booklet/CarouselBooklet', [
            'response' => [
               'status' => 500,
               'message' => 'Gagal menambahkan booklet',
            ]
         ]);
      }
   }

   public function update(Request $request, $id)
   {
      $request->validate([
         'nama_booklet' => 'required|string',
         'url_booklet' => 'required|string',
      ]);

      DB::beginTransaction();
      try{
         $booklet = Booklet::find($id);
   
         $booklet->update(
            [
               'nama_booklet' => $request->nama_booklet,
               'url_booklet' => $request->url_booklet,
            ]
         );

         DB::commit();
   
         if ($booklet) {
            return Inertia::render('Booklet/CarouselBooklet', [
               'response' => [
                  'status' => 201,
                  'message' => 'Berhasil menambahkan booklet',
                  'data' => $booklet
               ]
            ]);
         }
      } catch(\Exception $e) {
         DB::rollBack();
         return Inertia::render('Booklet/CarouselBooklet', [
            'response' => [
               'status' => 500,
               'message' => 'Gagal mengubah booklet',
            ]
         ]);
      }

   }

   public function delete($id)
   {
      DB::beginTransaction();
      try{
         $booklet = Booklet::find($id)->delete();
         DB::commit();
         if ($booklet) {
            return Inertia::render('Booklet/CarouselBooklet', [
               'response' => [
                  'status' => 201,
                  'message' => 'Berhasil menghapus booklet',
               ]
            ]);
         }
      } catch(\Exception $e) {
         DB::rollBack();
         return Inertia::render('Booklet/CarouselBooklet', [
            'response' => [
               'status' => 500,
               'message' => 'Gagal menghapus booklet',
            ]
         ]);
      }

   }
}