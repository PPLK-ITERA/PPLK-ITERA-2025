<?php

namespace App\Http\Controllers;

use App\Models\Booklet;
use Illuminate\Http\Request;

class BookletController extends Controller
{
    public function index()
    {
        $booklet = Booklet::all();
        return response()->json($booklet, 200);
    }

    public function store(Request $request){
        $booklet = Booklet::create(
            [
                'nama_booklet,' => $request->nama_booklet,
                'url_booklet,' => $request->url_booklet,
            ]
        );

        return response()->json($booklet,200);
    }

    public function update(Request $request, $id){
        $booklet = Booklet::find($id);
        $booklet->update(
            [
                'nama_booklet,' => $request->nama_booklet,
                'url_booklet,' => $request->url_booklet,
            ]
        );
        return response()->json($booklet,200);
    }

    public function delete($id){ 
        $booklet = Booklet::find($id);
        $booklet->delete();
        return response()->json($booklet,200);
    }
}
