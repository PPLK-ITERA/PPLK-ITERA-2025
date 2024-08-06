<?php

namespace App\Http\Controllers;

use App\Models\Kelompok;
use App\Models\PengumpulanTugas;
use App\Models\Poster;
use App\Models\Tugas;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class MadingController extends Controller
{
   public function index()
   {
      $user = Auth::user();
      $userId = $user->id;

      // Fetch all cards associated with the user's group with related tasks
      $tugass = Tugas::with([
         'pengumpulanTugas' => function ($query) use ($user) {
            $query->whereHas('user', function ($q) use ($user) {
               $q->where('kelompok_id', $user->kelompok_id)->where('role_id', 1);
            });
         }
      ])->get();

      // Fetch history of task submissions
      $riwayat = PengumpulanTugas::with([
         'tugas' => function ($query) {
            $query->select('id', 'judul');
         }
      ])->where('user_id', $userId)->get();

      // $posters = Poster::where('kelompok_id', $user->kelompok_id)->get();

      // Count total members in the user's group (assuming all are expected to complete tasks)
      $totalMembers = User::where('kelompok_id', $user->kelompok_id)->where('role_id', 1)->count();

      // Initialize arrays to store task counts and member completions
      $tugasCount = [];
      $memberCompletion = [];
      $completionPercentage = [];
      $cardOpen = [];
      $posters = [];
      $isSelesai = true;

      foreach ($tugass as $tugas) {
         if (!isset($tugasCount[$tugas->hari])) {
            $tugasCount[$tugas->hari] = 0;
            $cardOpen[$tugas->hari] = false;
            $posters[$tugas->hari] = null;
         }

         if ($tugas->hari == $dayBefore) {
            $memberCompletion[$tugas->hari] = $memberCompletion;
         } else {
            $memberCompletion[$tugas->hari] = 0;
         }

         $completionPercentage[$tugas->hari] = 0;

         $tugasCount[$tugas->hari] += 1;

         $tugasDia = $tugas->pengumpulanTugas->where('user_id', $userId)->first();

         if (!$tugasDia || $tugasDia->isReturn) {
            $cardOpen[$tugas->hari] = true;
         }

         foreach ($tugas->pengumpulanTugas as $pengumpulanTugas) {
            if (!$pengumpulanTugas->isReturn) {
               $memberCompletion[$tugas->hari] += 1;
            }
         }

         if ($memberCompletion[$tugas->hari] < $totalMembers) {
            $isSelesai = false;
         }

         if ($completionPercentage[$tugas->hari] >= 100) {
            $posters[$tugas->hari] = Poster::where('kelompok_id', $user->kelompok_id)->where('hari', $tugas->hari)->first();
         }

         $dayBefore = $tugas->hari;
      }

      foreach ($tugass as $tugas) {
         $completionPercentage[$tugas->hari] = ($memberCompletion[$tugas->hari] / ($tugasCount[$tugas->hari] * $totalMembers)) * 100;  // Calculate completion percentage
      }


      $response = [
         'isSelesai' => $isSelesai,
         'card' => [
            'completionPercentage' => $completionPercentage,
            'cardOpen' => $cardOpen,
            'posters' => $posters
         ],
         'history' => $riwayat,
         'membercompletion' => $memberCompletion,
         'count' => $tugasCount,
         'tugass' => $tugass
      ];

      return response()->json($response);
   }

   public function getTugas($hari)
   {
      $tugass = Tugas::where('hari', $hari)->get();

      $isSubmitted = false;

      foreach ($tugass as $tugas) {
         $isSubmitted = PengumpulanTugas::where('tugas_id', $tugas->id)->where('user_id', Auth::id())->where('isReturn', false)->exists();
         if (!$isSubmitted) {
            break;
         }
      }

      if ($isSubmitted) {
         return redirect()->route('mading')->with(['message' => 'Task already submitted']);
      }

      return response()->json(['tugas' => $tugass, 'isSubmitted' => $isSubmitted]);
   }

   public function storeTugas(Request $request)
   {
      $validated = $request->validate([
         'tugas_id.*' => 'required|integer',
         'jawaban.*' => 'required|url',
      ]);

      $userId = Auth::id();

      DB::beginTransaction();
      try {
         foreach ($validated['tugas_id'] as $key => $tugasId) {
            PengumpulanTugas::updateOrCreate([
               'user_id' => $userId,
               'tugas_id' => $tugasId,
            ], [
               'jawaban' => $validated['jawaban'][$key],
               'tanggal_submit' => Carbon::now(),
               'isReturn' => false,
            ]);
         }

         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['error' => 'Failed to submit task' . $th->getMessage()], 500);
      }
      return response()->json(['message' => 'Task submitted successfully']);
   }

   public function returnTugas(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'catatan' => 'required|string',
      ]);

      DB::beginTransaction();
      try {
         $tugas = PengumpulanTugas::findOrFail($validated['id']);
         $tugas->update(['isReturn' => true, 'catatan' => $validated['catatan']]);
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return redirect()->route('dashboard.mading')->with([
            'response' => [
               'status' => 500,
               'message' => 'Failed to return task',
               'data' => null
            ]
         ]);
      }

      return redirect()->route('dashboard.mading')->with([
         'response' => [
            'status' => 200,
            'message' => 'Task returned successfully',
            'data' => null
         ]
      ]);
   }

   public function storePoster(Request $request)
   {
      // dd($request->all());
      $validated = $request->validate([
         'hari' => 'required|integer|in:0,1,2,3,4,5',
         'poster' => 'required|image|mimes:jpeg,png,jpg|max:2048',
      ]);

      $userId = Auth::id();
      $kelompokId = Auth::user()->kelompok_id;

      // TODO: cek apakah semua user pada kelompok tersebut telah mengumpulkan tugas pada hari tersebut
      // $tugass = PengumpulanTugas::whereHas('tugas', function ($query) use ($validated) {
      //    $query->where('hari', $validated['hari']);
      // })->whereHas('user', function ($query) use ($userId) {
      //    $query->where('kelompok_id', Auth::user()->kelompok_id);
      // })->get();

      // foreach ($tugass as $tugas) {
      //    dd($tugas);
      //    if ($tugas->isReturn) {
      //       return redirect()->route('mading')->with('error', 'All members must submit their tasks first');
      //    }
      // }

      DB::beginTransaction();
      try {
         $path = $request->file('poster')->store('images/poster', 'public');

         Poster::updateOrCreate([
            'kelompok_id' => $kelompokId,
            'hari' => $validated['hari'],
         ], [
            'hari' => $validated['hari'],
            'url_poster' => $path,
            'isReturn' => false,
         ]);

         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['error' => 'Failed to upload poster' . $th->getMessage()], 500);
      }
      // return response()->json(['message' => 'Poster uploaded successfully']);
      return redirect()->back()->with('success', 'Poster uploaded successfully');
   }

   public function previewMading()
   {
      $kelompok_id = Auth::user()->kelompok_id;
      $urls = Poster::where('kelompok_id', $kelompok_id)
         ->pluck('url_poster')->toArray();

      foreach ($urls as $key => $url) {
         $urls[$key] = Storage::url($url);
      }

      $kelompok = Kelompok::find($kelompok_id);

      if ($kelompok->logo_kelompok) {
         $logo_kelompok_url = Storage::url(Kelompok::find($kelompok_id)->logo_kelompok);
      } else {
         $logo_kelompok_url = null;
      }

      return view('mading-preview', ['urls' => $urls, 'logo_kelompok_url' => $logo_kelompok_url]);
   }
}