<?php

namespace App\Helpers;

use Inertia\Inertia;

class PoinResponseHelper
{
   public function poinSuccess($ketua_kelompok)
   {
      return redirect()->back()->with(
         'response',
         [
            'status' => 200,
            'message' => 'Berhasil menambahkan poin kelompok ' . $ketua_kelompok->kelompok->nama_kelompok,
         ]
      );
   }
   public function poinError($message, $status)
   {
      return redirect()->back()->with(
         'response',
         [
            'status' => $status,
            'message' => $message
         ]
      );
   }

   public function createQr()
   {
      return Inertia::render('Poin/Generate/Page', [
         'response' => [
            'status' => 200,
            'message' => 'success',
            'data' => []
         ]
      ]);
   }
   public function qrError($message, $status)
   {
      // return Inertia::render('Poin/Generate/Page', [
      //    'response' => [
      //       'status' => $status,
      //       'message' => 'failed',
      //       'data' => [
      //          'error' => $message
      //       ]
      //    ]
      // ]);
      return redirect()->back()->with(
         'response',
         [
            'status' => $status,
            'message' => $message
         ]
      );
   }

   public function qrSuccess($code)
   {
      // return Inertia::render('Dashboard/game-offline/Page', [
      //    'response' => [
      //       'status' => 200,
      //       'message' => 'success',
      //       'data' => [
      //          'qrUrl' => $qrUrl,
      //          'code' => $code
      //       ]
      //    ]
      // ]);
      return response()->json([
         'status' => 200,
         'message' => 'success',
         'data' => [
            'code' => $code
         ]
      ]);
   }
}
