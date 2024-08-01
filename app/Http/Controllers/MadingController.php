<?php

namespace App\Http\Controllers;

use App\Models\KartuTugas;
use App\Models\PengumpulanTugas;
use App\Models\Tugas;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MadingController extends Controller
{
   public function getCard()
   {
      // Check if the user is authenticated
      if (!Auth::check()) {
         return response()->json(['error' => 'User not authenticated'], 401);
      }

      $userId = Auth::id();
      $user = Auth::user();

      // Fetch all cards associated with the user's group with related tasks
      $cards = KartuTugas::with('tugas')
         ->where('kelompok_id', $user->kelompok_id)
         ->get();

      // Fetch history of task submissions
      $history = PengumpulanTugas::with('tugas')->where('user_id', $userId)->get();

      // Count total members in the user's group (assuming all are expected to complete tasks)
      $totalMembers = User::where('kelompok_id', $user->kelompok_id)->where('role_id', 1)->count();

      // Initialize arrays to store task counts and member completions
      $tugasCount = [];
      $memberCompletion = [];
      $completionPercentage = [];
      $taskCompletedByUser = [];

      foreach ($cards as $card) {
         $allTasksCompleted = true; // Assume all tasks are completed

         if ($card->tugas && $card->tugas->count() > 0) {
            $tugasCount[$card->id] = $card->tugas->count();  // Total tasks per card

            // Count submissions and calculate completion percentage for each task
            foreach ($card->tugas as $tugas) {
               // Determine if this task should be filtered based on kategori_tugas
               $isKetuaTask = ($tugas->kategori_tugas == 'kelompok'); // Example category name

               // Calculate number of members that should be counted for this task
               $totalCountedMembers = $isKetuaTask ? User::where('kelompok_id', $user->kelompok_id)
                  ->where('isKetua', true)
                  ->count()
                  : $totalMembers;

               $taskCompletedByUser[$tugas->id] = PengumpulanTugas::where('tugas_id', $tugas->id)
                  ->where('user_id', $userId)
                  ->where('isReturn', false)
                  ->exists();

               $submissionsCount = PengumpulanTugas::where('tugas_id', $tugas->id)
                  ->where('isReturn', false)
                  ->count();

               $memberCompletion[$tugas->id] = $submissionsCount;

               if ($totalCountedMembers > 0) {
                  $completionPercentage[$tugas->id] = ($submissionsCount / $totalCountedMembers) * 100;  // Calculate completion percentage
               } else {
                  $completionPercentage[$tugas->id] = 0;  // Avoid division by zero
               }

               // Check if any member has not completed this task
               if ($submissionsCount < $totalCountedMembers) {
                  $allTasksCompleted = false;
               }
            }
         } else {
            $tugasCount[$card->id] = 0;
            $memberCompletion[$card->id] = 0;
            $completionPercentage[$card->id] = 0;
            $allTasksCompleted = false; // No tasks, so cannot be completed
         }

         // Update isSelesai column based on whether all tasks are completed by all members
         $card->is_selesai = $allTasksCompleted;
         $card->save();
      }

      // Create a response object
      $response = [
         'cards' => $cards,
         'history' => $history,
         'totalMembers' => $totalMembers,
         'tugasCount' => $tugasCount,
         'memberCompletion' => $memberCompletion,
         'completionPercentage' => $completionPercentage,
         'isSubmitted' => $taskCompletedByUser,
      ];

      return response()->json($response);
   }

   public function getTugas($id)
   {
      $tugas = KartuTugas::with('tugas')->find($id);
      $isSubmitted = PengumpulanTugas::where('tugas_id', $tugas->tugas[0]->id)->where('user_id', Auth::id())->where('isReturn', false)->exists();

      return response()->json(['tugas' => $tugas, 'isSubmitted' => $isSubmitted]);
   }

   public function storeTugas(Request $request)
   {
      $validated = $request->validate([
         'tugas_id' => 'required|integer',
         'jawaban' => 'required|string',
      ]);

      $userId = Auth::id();

      DB::beginTransaction();
      try {
         $pengumpulanTugas = PengumpulanTugas::create([
            'user_id' => $userId,
            'tugas_id' => $validated['tugas_id'],
            'jawaban' => $validated['jawaban'],
            'tanggal_submit' => Carbon::now(),
            'isReturn' => false,
         ]);

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
         $tugas = PengumpulanTugas::findorfail($validated['id']);
         $tugas->update(['isReturn' => true, 'catatan' => $validated['catatan']]);
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['error' => 'Failed to return task'], 500);
      }

      return response()->json(['message' => 'Task returned successfully']);
   }
   public function getPoster($id)
   {
      $kartuTugas = KartuTugas::find($id);
      return response()->json(['poster' => $kartuTugas->poster]);
   }
   public function storePoster(Request $request, $id)
   {
      $validated = $request->validate([
         'poster' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      ]);

      $userId = Auth::id();

      DB::beginTransaction();
      try {
         $kartuTugas = KartuTugas::find($id);
         $poster = $validated['poster'];
         $posterName = $poster->getClientOriginalName();
         $poster->move(public_path('posters'), $posterName);
         $kartuTugas->update(['poster' => $posterName]);
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json(['error' => 'Failed to upload poster' . $th->getMessage()], 500);
      }
      return response()->json(['message' => 'Poster uploaded successfully']);
   }
}
