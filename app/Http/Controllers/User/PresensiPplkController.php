<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use App\Models\Prodi;
use App\Models\Qrcode;
use App\Models\PresensiPplk;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PresensiPplkController extends Controller
{
   // ===== KONFIGURASI TANGGAL PRESENSI =====
   // Ubah tanggal-tanggal ini sesuai kebutuhan
   
   // Jam operasional presensi
   const JAM_MULAI_PRESENSI = 6;  // 6 AM
   const JAM_AKHIR_PRESENSI = 20; // 8 PM
   
   // Tanggal khusus untuk role_id = 5 (PJ Prodi)
   const TANGGAL_KHUSUS_PJ_PRODI = [
      '2024-08-12',
      '2024-08-15'
   ];
   
   // Konfigurasi Event/Periode PPLK
   const EVENT_PPLK = [
      'pra_pplk_day_0' => [
         'nama' => 'Pra-PPLK',
         'tanggal' => '2025-08-09',
         'deskripsi' => 'Persiapan sebelum PPLK dimulai'
      ],
      'pplk_day_1' => [
         'nama' => 'PPLK Day 0',
         'tanggal' => '2025-08-11',
         'deskripsi' => 'Hari pertama PPLK'
      ],
      'pplk_day_2' => [
         'nama' => 'PPLK Day 1',
         'tanggal' => '2025-08-12',
         'deskripsi' => 'Hari kedua PPLK'
      ],
      'pplk_day_3' => [
         'nama' => 'PPLK Day 2',
         'tanggal' => '2025-08-13',
         'deskripsi' => 'Hari ketiga PPLK'
      ],
      'pplk_day_4' => [
         'nama' => 'PPLK Day 3',
         'tanggal' => '2025-08-14',
         'deskripsi' => 'Hari keempat PPLK'
      ],
      'pplk_day_5' => [
         'nama' => 'PPLK Day 4',
         'tanggal' => '2025-08-15',
         'deskripsi' => 'Hari kelima PPLK - Penutupan'
      ]
   ];
   
   // Mendapatkan semua tanggal event untuk validasi
   public static function getAllEventDates() {
      return array_column(self::EVENT_PPLK, 'tanggal');
   }
   
   // Mendapatkan info event berdasarkan tanggal
   public static function getEventByDate($date) {
      foreach (self::EVENT_PPLK as $key => $event) {
         if ($event['tanggal'] === $date) {
            return $event;
         }
      }
      return null;
   }
   
   // Tanggal mulai dan akhir periode presensi (opsional, uncomment jika diperlukan)
   // const TANGGAL_MULAI_PERIODE = '2025-08-10';
   // const TANGGAL_AKHIR_PERIODE = '2025-08-15';
   
   // ===== AKHIR KONFIGURASI =====

   public function QRScan(Request $request)
   {
      $validated = $request->validate([
         'qr_code' => 'required|string|max:10',
      ]);

      // Define the time window when actions are allowed
      $currentTime = Carbon::now('Asia/Jakarta');
      $start = Carbon::today('Asia/Jakarta')->setHour(self::JAM_MULAI_PRESENSI);
      $end = Carbon::today('Asia/Jakarta')->setHour(self::JAM_AKHIR_PRESENSI);

      // Check if the action is permissible based on the date and current time
      $action = Carbon::today('Asia/Jakarta')->toDateString() && $currentTime->between($start, $end);

      if (Auth::user()->role_id === 3) {
         $action = Carbon::today('Asia/Jakarta')->toDateString();
      }

      if (Auth::user()->role_id === 5) {
         if (!in_array(Carbon::today('Asia/Jakarta')->toDateString(), self::TANGGAL_KHUSUS_PJ_PRODI)) {
            return response()->json([
               'response' => [
                  "status" => 403,
                  "message" => "Maaf tidak bisa melakukan presensi pada tanggal ini",
               ]
            ]);
         }
      }
      if (!$action) {
         return response()->json([
            'response' => [
               "status" => 403,
               "message" => "Maaf hanya bisa dilakukan saat jam " . self::JAM_MULAI_PRESENSI . " Pagi hingga Jam " . (self::JAM_AKHIR_PRESENSI - 2) . " Sore",
            ]
         ]);
      }

      $qrcode = Qrcode::where('code', $validated['qr_code'])->first();
      if (!$qrcode) {
         return response()->json([
            "status" => 404,
            "message" => "QR Code tidak ditemukan",
            "data" => [
               'qr_code' => $validated['qr_code']
            ]
         ], 404);
      }

      $user = User::findorfail($qrcode->user_id);
      if (Auth::user()->role_id == 5) {
         if ($user->prodi_id != Auth::user()->prodi_id) {
            return response()->json([
               'response' => [
                  "status" => 403,
                  "message" => "Maba tidak ada di prodi anda",
                  "data" => [
                     $validated['qr_code']
                  ]
               ]
            ], 403);
         }
      } elseif (Auth::user()->role_id == 2 || Auth::user()->role_id == 4) {
         $kelompok = Auth::user()->kelompok_id;
         if ($kelompok != $user->kelompok_id) {
            return response()->json([
               'response' => [
                  "status" => 403,
                  "message" => "Maba tidak ada di kelompok anda",
                  "data" => [
                     $validated['qr_code']
                  ]
               ]
            ], 403);
         }
      }
      if (!$user) {
         return response()->json([
            'response' => [
               "status" => 404,
               "message" => "User tidak ditemukan",
               "data" => [
                  $validated['qr_code']
               ]
            ]
         ], 404);
      }
      $presensi = PresensiPplk::where('user_id', $user->id)->where('tanggal_presensi', Carbon::today('Asia/Jakarta'));
      if (!$presensi->exists()) {
         DB::beginTransaction();
         try {
            $presensi_now = PresensiPplk::create([
               'user_id' => $user->id,
               'tanggal_presensi' => Carbon::today('Asia/Jakarta'),
               'status' => 'Hadir',
            ]);
            DB::commit();
         } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
               'response' => [
                  'status' => 500,
                  'message' => 'Gagal melakukan presensi',
               ]
            ], 500);
         }
         return response()->json([
            'response' => [
               'status' => 200,
               'message' => $presensi_now->user->name . ' berhasil melakukan presensi.',
               'data' => [
                  "nama" => $presensi_now->user->name,
                  "tanggal" => $presensi_now->tanggal_presensi
               ]
            ]
         ], 200);
      } else {
         $presensi = $presensi->first();
         if ($presensi->kehadiran == 'Hadir') {
            return response()->json([
               'response' => [
                  'status' => 400,
                  'message' => $presensi->user->name . ' Telah melakukan presensi.',
                  'data' => [
                     "nama" => $presensi->user->name,
                     "tanggal" => $presensi->tanggal_presensi
                  ]
               ]
            ], 400);
         } else if ($presensi->kehadiran) {
            return response()->json([
               'response' => [
                  'status' => 400,
                  'message' => $presensi->user->name . ' izin tidak mengikuti PPLK, tidak bisa melakukan presensi.',
                  'data' => [
                     "nama" => $presensi->user->name,
                     "tanggal" => $presensi->tanggal_presensi
                  ]
               ]
            ], 400);
         }
      }
   }

   // tambah berdasarkan prodi filter bydate
   public function index()
   {
      return Inertia::render('Dashboard/absensi-maba/Page', [
         'eventList' => self::EVENT_PPLK
      ]);
   }
   public function dataHadir(Request $request)
   {
      $user = Auth::user();
      $kelompok_id = $user->kelompok_id;
      $prodi_id = $user->prodi_id; // Assuming this exists if role_id 5 needs it

      // Initialize variables for response
      $users = collect(); // Empty collection as default
      $hadir = 0;
      $izin = 0;

      $date = $request->input('date', Carbon::today('Asia/Jakarta')->toDateString());
      
      // Get event info if date matches any event
      $eventInfo = self::getEventByDate($date);

      if ($user->role_id == 2 || $user->role_id == 4) {
         // Get latest attendance entries for the kelompok
         $latestPresensiIds = PresensiPplk::whereHas('user', function ($query) use ($kelompok_id) {
            $query->where('kelompok_id', $kelompok_id);
         })->where('tanggal_presensi', $date)
            ->selectRaw('MAX(id) as id')
            ->groupBy('user_id');

         $users = User::where('kelompok_id', $kelompok_id)
            ->where('role_id', 1)
            ->count();

         $hadir = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Hadir')
            ->count();

         $izin = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Izin')
            ->count();
      } elseif ($user->role_id == 5) {
         // Get latest attendance entries for the prodi
         $latestPresensiIds = PresensiPplk::whereHas('user', function ($query) use ($prodi_id) {
            $query->where('prodi_id', $prodi_id);
         })->where('tanggal_presensi', $date)
            ->selectRaw('MAX(id) as id')
            ->groupBy('user_id');

         $users = User::where('prodi_id', $prodi_id)
            ->where('role_id', 1)
            ->count();

         $hadir = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Hadir')
            ->count();

         $izin = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Izin')
            ->count();
      } elseif ($user->role_id == 3) {
         // Get latest attendance entries for all users with role_id 1
         $latestPresensiIds = PresensiPplk::where('tanggal_presensi', $date)
            ->selectRaw('MAX(id) as id')
            ->groupBy('user_id');

         $users = User::where('role_id', 1)->whereNot('kelompok_id', 131)->count();

         $hadir = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Hadir')
            ->whereHas('user', function ($query) {
               $query->whereNot('kelompok_id', 131);
            })
            ->count();

         $izin = PresensiPplk::whereIn('id', $latestPresensiIds)
            ->where('kehadiran', 'Izin')
            ->whereHas('user', function ($query) {
               $query->whereNot('kelompok_id', 131);
            })
            ->count();
      } else {
         // Unauthorized access
         return response()->json([
            'response' => [
               'status' => 403,
               'message' => 'Anda tidak memiliki akses',
            ]
         ], 403);
      }

      // Pass data to Inertia view
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Data presensi berhasil diambil',
            'data' => [
               'tidakHadir' => $users - $hadir - $izin,
               'hadir' => $hadir,
               'izin' => $izin,
               'eventInfo' => $eventInfo,
               'tanggal' => $date
            ]
         ]
      ], 200);
   }


   public function getAllPresensi(Request $request, $date = null)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');
      $date = $date ?: Carbon::today('Asia/Jakarta')->toDateString();

      // Define the time window when actions are allowed
      $currentTime = Carbon::now('Asia/Jakarta');
      $start = Carbon::today('Asia/Jakarta')->setHour(self::JAM_MULAI_PRESENSI);
      $end = Carbon::today('Asia/Jakarta')->setHour(self::JAM_AKHIR_PRESENSI);

      // Check if the action is permissible based on the date and current time
      $action = $date === Carbon::today('Asia/Jakarta')->toDateString() && $currentTime->between($start, $end);

      if (Auth::user()->role_id === 5) {
         $action = $action && in_array($date, self::TANGGAL_KHUSUS_PJ_PRODI);
      } else if (Auth::user()->role_id === 3) {
         $action = true;
      } else if (in_array(Auth::user()->role_id, [2, 4])) {
         // Allow roles 2,4 to take attendance on any date within operating hours
         // OR allow them to take attendance on current date regardless of time
         $action = $currentTime->between($start, $end) || $date === Carbon::today('Asia/Jakarta')->toDateString();
      }

      if (!in_array(Auth::user()->role_id, [2, 4, 5, 3])) {
         return response()->json([
            'response' => [
               'status' => 403,
               'message' => 'You do not have access',
            ]
         ], 403);
      }

      $query = User::query()->where('role_id', 1);

      if (Auth::user()->role_id === 2 || Auth::user()->role_id === 4) {
         $query->where('kelompok_id', Auth::user()->kelompok_id);
      } elseif (Auth::user()->role_id === 5) {
         $query->where('prodi_id', Auth::user()->prodi_id);
      }

      $query->with([
         'penyakit',
         'kelompok',
         'presensi' => function ($q) use ($date) {
            $q->where('tanggal_presensi', $date);
         }
      ]);

      $query->where(function ($q) use ($searchTerm) {
         $q->where('name', 'like', '%' . $searchTerm . '%')
            ->orWhere('nim', 'like', '%' . $searchTerm . '%')
            ->orWhere('email', 'like', '%' . $searchTerm . '%');
      });

      $attendances = $query->paginate($perPage);

      // Add the action boolean to the pagination result
      $attendances->getCollection()->transform(function ($user) use ($action, $date) {
         $presence = optional($user->presensi)->first(); // Safe access
         $eventInfo = self::getEventByDate($date);
         
         return [
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'photo_profile_url' => $user->photo_profile_url ?? null,
               'qrcode' => optional($user->qrcode)->code,
               'nama_kelompok' => optional($user->kelompok)->nama_kelompok,
               'penyakit' => [
                  'pita' => optional($user->penyakit)->pita,
                  'ket_penyakit' => optional($user->penyakit)->ket_penyakit,
               ],
               'status' => $presence ? $presence->kehadiran : 'Tidak Hadir',
               'tanggal_presensi' => $presence ? $presence->tanggal_presensi : '-',
               'ket_izin' => ($presence && $presence->kehadiran === 'Izin') ? $presence->keterangan : '-',
            ],
            'action' => $action, // Include the action key here
            'date' => $date,
            'eventInfo' => $eventInfo
         ];
      });

      return response()->json($attendances);
   }





   public function store(Request $request)
   {
      // Check if the current time is within the allowed range
      $currentTime = Carbon::now('Asia/Jakarta');
      $start = Carbon::today('Asia/Jakarta')->setHour(self::JAM_MULAI_PRESENSI);
      $end = Carbon::today('Asia/Jakarta')->setHour(self::JAM_AKHIR_PRESENSI);

      if (!$currentTime->between($start, $end)) {
         return redirect()->route('dashboard.absensi-maba')->with('response', [
            'status' => 403,
            'message' => 'Presensi hanya dapat ditambahkan antara jam ' . self::JAM_MULAI_PRESENSI . ' pagi dan ' . self::JAM_AKHIR_PRESENSI . ' malam.'
         ]);
      }

      if (Auth::user()->role_id === 5) {
         if (!in_array(Carbon::today('Asia/Jakarta')->toDateString(), self::TANGGAL_KHUSUS_PJ_PRODI)) {
            return redirect()->back()->with('response', [
               "status" => 403,
               "message" => "Maaf presensi hari ini hanya bisa dilakukan oleh Daplok dan Mentor",
            ]);
         }
      }

      if (in_array(Auth::user()->role_id, [2, 4])) {
         if (in_array(Carbon::today('Asia/Jakarta')->toDateString(), self::TANGGAL_KHUSUS_PJ_PRODI)) {
            return redirect()->back()->with('response', [
               "status" => 403,
               "message" => "Maaf presensi hari ini hanya bisa dilakukan oleh PJ Prodi",
            ]);
         }
      }


      // Validation rules
      $validated = $request->validate([
         'id' => 'required|integer',
         'kehadiran' => 'required|in:Hadir,Izin',
         'keterangan' => 'string|nullable',
         'date' => 'string|nullable'
      ]);

      // Start transaction
      DB::beginTransaction();
      try {
         if (Auth::user()->role_id === 3) {
            // Check if there's a last attendance record for today
            $lastPresensi = PresensiPplk::where('user_id', $validated['id'])
               ->where('tanggal_presensi', $validated['date'])
               ->latest()
               ->first();

            // If there is a last attendance, delete it
            if ($lastPresensi) {
               $lastPresensi->delete();
            }

            // Create the new attendance record
            $presensi = PresensiPplk::create([
               'user_id' => $validated['id'],
               'tanggal_presensi' => $validated['date'],
               'kehadiran' => $validated['kehadiran'],
               'keterangan' => $validated['keterangan']
            ]);
         } else {
            // Check if there's a last attendance record for today
            $lastPresensi = PresensiPplk::where('user_id', $validated['id'])
               ->where('tanggal_presensi', Carbon::today('Asia/Jakarta'))
               ->latest()
               ->first();

            // If there is a last attendance, delete it
            if ($lastPresensi) {
               $lastPresensi->delete();
            }

            // Create the new attendance record
            $presensi = PresensiPplk::create([
               'user_id' => $validated['id'],
               'tanggal_presensi' => Carbon::today('Asia/Jakarta'),
               'kehadiran' => $validated['kehadiran'],
               'keterangan' => $validated['keterangan']
            ]);
         }
         DB::commit();
      } catch (\Throwable $th) {
         // Rollback and return with error
         DB::rollBack();
         return redirect()->route('dashboard.absensi-maba')->with('response', [
            'status' => 500,
            'message' => 'Terjadi kesalahan saat menyimpan data.'
         ]);
      }
      return redirect()->route('dashboard.absensi-maba')->with('response', [
         'status' => 200,
         'message' => 'Presensi berhasil ditambahkan'
      ]);
   }

   public function updateKehadiran(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'kehadiran' => 'required|in:Hadir,Izin,Tidak Hadir',
         'keterangan' => 'string|nullable',
         'date' => 'string|nullable'
      ]);

      $today = Carbon::today('Asia/Jakarta');
      if (Auth::user()->role_id === 3) {
         $today = $validated['date'];
      }
      $presensi = PresensiPplk::where('user_id', $validated['id'])->where('tanggal_presensi', $today)->latest()->first();

      DB::beginTransaction();
      try {
         if ($presensi && $presensi->kehadiran === 'Hadir') {
            $presensi->delete();
         }

         PresensiPplk::create([
            'user_id' => $validated['id'],
            'tanggal_presensi' => $today,
            'kehadiran' => 'Izin',
            'keterangan' => $validated['keterangan']
         ]);
         DB::commit();
         // Redirect with success message
         return redirect()->back()->with('response', [
            'status' => 200,
            'message' => 'Presensi berhasil diperbarui'
         ]);
      } catch (\Throwable $th) {
         DB::rollBack();
         // Redirect back with error details
         return redirect()->back()->with('response', [
            'status' => 500,
            'message' => 'Gagal menghapus presensi'
         ]);
      }
   }


   public function destroyAbsen(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'date' => 'required|date'
      ]);
      $presensi = PresensiPplk::find($validated['id']);
      if (!$presensi) {
         return response()->json([
            'response' => [
               'status' => 404,
               'message' => 'Presensi tidak ditemukan',
            ]
         ], 404);
      }
      DB::beginTransaction();
      try {
         $presensi->delete();
         DB::commit();
      } catch (\Throwable $th) {
         DB::rollBack();
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => 'Gagal menghapus presensi',
            ]
         ], 500);
      }
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Presensi berhasil dihapus',
         ]
      ], 200);
   }
}