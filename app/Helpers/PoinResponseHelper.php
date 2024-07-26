<?php

namespace App\Helpers;

use Inertia\Inertia;

class PoinResponseHelper
{
   public function poinSuccess($ketua_kelompok)
   {
      return Inertia::render('Dashboard/game-offline/Page', [
         'response' => [
            'status' => 200,
            'message' => 'success',
            'data' => [
               'ketua_kelompok' => $ketua_kelompok
            ]
         ]
      ]);
   }
   public function poinError($message, $status)
   {
      return Inertia::render('Dashboard/game-offline/Page', [
         'response' => [
            'status' => $status,
            'message' => 'failed',
            'data' => [
               'error' => $message
            ]
         ]
      ]);
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
      return response()->json([
         'status' => $status,
         'message' => 'failed',
         'data' => [
            'error' => $message
         ]
      ]);
   }

   public function qrSuccess($qrUrl, $code)
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
            'qrUrl' => $qrUrl,
            'code' => $code
         ]
      ]);
   }
}
