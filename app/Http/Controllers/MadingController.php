<?php

namespace App\Http\Controllers;

use App\Models\PengumpulanTugas;
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


      // Count total members in the user's group (assuming all are expected to complete tasks)
      $totalMembers = User::where('kelompok_id', $user->kelompok_id)->where('role_id', 1)->count();

      // Initialize arrays to store task counts and member completions
      $tugasCount = [];
      $memberCompletion = [];
      $completionPercentage = [];
      $cardOpen = [];
      $isSelesai = true;

      foreach ($tugass as $tugas) {
         if (!isset($tugasCount[$tugas->hari])) {
            $tugasCount[$tugas->hari] = 0;
            $cardOpen[$tugas->hari] = false;
         }

         $memberCompletion[$tugas->hari] = 0;
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
            $completionPercentage[$tugas->hari] = ($memberCompletion[$tugas->hari] / ($tugasCount[$tugas->hari] * $totalMembers)) * 100;  // Calculate completion percentage
         }

         if ($memberCompletion[$tugas->hari] < $totalMembers) {
            $isSelesai = false;
         }
      }

      $response = [
         'isSelesai' => $isSelesai,
         'card' => [
            'completionPercentage' => $completionPercentage,
            'cardOpen' => $cardOpen
         ],
         'history' => $riwayat,
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

   public function getPoster($id)
   {
      $kartuTugas = KartuTugas::find($id);
      return response()->json(['poster' => $kartuTugas->poster]);
   }
   public function storePoster(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'poster' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      ]);

      $userId = Auth::id();

      DB::beginTransaction();
      try {
         $kartuTugas = KartuTugas::find($validated['id']);
         $poster = $validated['poster'];
         if ($request->hasFile('poster')) {
            $storagePath = substr($kartuTugas->poster, strlen('/storage/'));
            if (Storage::disk('public')->exists($storagePath)) {
               Storage::disk('public')->delete($storagePath);
            }
            $path = $request->file('poster')->store('images/poster', 'public');
            $path_image = '/storage/' . $path;
         } else {
            $path_image = $kartuTugas->poster;
         }

         $kartuTugas->update(['poster_url' => $path_image]);
         $kartuTugas->save();
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['error' => 'Failed to upload poster' . $th->getMessage()], 500);
      }
      // return response()->json(['message' => 'Poster uploaded successfully']);
      return redirect()->route('mading')->with('success', 'Poster uploaded successfully');
   }

   // public function previewMading()
   // {
   //    $kelompok_id = Auth::user()->kelompok_id;
   //    $urls = KartuTugas::with('tugas')
   //       ->where('kelompok_id', $kelompok_id)
   //       ->pluck('poster_url')->toArray();

   //    return view('mading-preview', ['urls' => $urls]);
   // }
}