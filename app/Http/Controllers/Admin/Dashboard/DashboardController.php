<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\PresensiPplk;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
   public function index()
   {
      if (Auth::user()->role_id == 1) {
         return redirect()->route('welcome');
      }

      // Base query for users with role_id = 1
      $baseMabaQuery = function () {
         return User::where('role_id', 1);
      };

      // Total count of users with role_id = 1
      $mabaCount = $baseMabaQuery()->count();

      // Count of users with 'merah' pita in 'penyakit'
      $mabaMerah = $baseMabaQuery()->whereHas('penyakit', function ($query) {
         $query->where('pita', 'merah');
      })->count();

      // Count of users with 'kuning' pita in 'penyakit'
      $mabaKuning = $baseMabaQuery()->whereHas('penyakit', function ($query) {
         $query->where('pita', 'kuning');
      })->count();

      // Count of users with 'hijau' pita in 'penyakit'
      $mabaHijau = $baseMabaQuery()->whereHas('penyakit', function ($query) {
         $query->where('pita', 'hijau');
      })->count();

      // Presensi count
      $presensi = PresensiPplk::where('tanggal_presensi', Carbon::today());
      $presensiCount = $presensi->count();

      $korlap = User::where('role_id', 6)->count();
      $daplok = User::where('role_id', 2)->count();
      $mentor = User::where('role_id', 4)->count();



      $days = ['2024-08-10', '2024-08-12', '2024-08-13', '2024-08-14', '2024-08-15', '2024-08-16', '2024-08-17'];
      $presensiCount = [];
      foreach ($days as $index => $day) {
         $presensi = PresensiPplk::where('tanggal_presensi', $day);
         $presensiCount[$index] = $presensi->count();
      }

      return Inertia::render('Dashboard/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Success',
            'data' => [
               'maba' => $mabaCount,
               'presensi' => $presensiCount,
               'mabaMerah' => $mabaMerah,
               'mabaKuning' => $mabaKuning,
               'mabaHijau' => $mabaHijau,
               'korlap' => $korlap,
               'daplok' => $daplok,
               'mentor' => $mentor,
               'presensi' => [
                  'count' => $presensiCount
               ]
            ]
         ]
      ]);
   }
}
