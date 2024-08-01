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

        foreach ($cards as $card) {
            if ($card->tugas && $card->tugas->count() > 0) {
                $tugasCount[$card->id] = $card->tugas->count();  // Total tasks per card

                // Count submissions and calculate completion percentage for each task
                foreach ($card->tugas as $tugas) {
                    $taskCompletedByUser[$tugas->id] = PengumpulanTugas::where('tugas_id', $tugas->id)->where('user_id', $userId)->exists();
                    $submissionsCount = PengumpulanTugas::where('tugas_id', $tugas->id)->count();
                    $memberCompletion[$tugas->id] = $submissionsCount;

                    if ($totalMembers > 0) {
                        $completionPercentage[$tugas->id] = ($submissionsCount / $totalMembers) * 100;  // Calculate completion percentage
                    } else {
                        $completionPercentage[$tugas->id] = 0;  // Avoid division by zero
                    }
                }
            } else {
                $tugasCount[$card->id] = 0;
                $memberCompletion[$card->id] = 0;
                $completionPercentage[$card->id] = 0;
            }
        }

        // Create a response object
        $response = [
            'cards' => $cards,
            'history' => $history,
            'totalMembers' => $totalMembers,
            'tugasCount' => $tugasCount,
            'memberCompletion' => $memberCompletion,
            'completionPercentage' => $completionPercentage,
            'isSubmitted' => $taskCompletedByUser
        ];

        return response()->json($response);
    }
    public function getTugas($id)
    {
        $tugas = KartuTugas::with('tugas')->find($id);
        // $pengumpulan_tugas = PengumpulanTugas::with('tugas')->get();
        // dd($pengumpulan_tugas);
        $isSubmitted = PengumpulanTugas::where('tugas_id', $tugas->tugas[0]->id)->where('user_id', Auth::id())->exists();
        // return response()->json(['tugas' => $tugas, 'isSubmitted' => $isSubmitted]);
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
            $tugas = PengumpulanTugas::find($validated['id']);
            $tugas->update(['isReturn' => true, 'catatan' => $validated['catatan']]);
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to return task'], 500);
        }

        return response()->json(['message' => 'Task returned successfully']);
    }
}