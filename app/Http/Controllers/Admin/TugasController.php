<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KartuTugas;
use App\Models\PengumpulanTugas;
use App\Models\Poster;
use App\Models\Tugas;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class TugasController extends Controller
{
   public function addTugas(Request $request)
   {
      $validated = $request->validate([
         'judul' => 'required|string|max:255|regex:/^[\pL\s\-]+$/u|alpha:ascii',
         'deskripsi' => 'required|string|max:255',
         'hari' => 'required|in:0,1,2,3,4,5',
         'tipe_link' => 'required|in:instagram,tiktok,drive,linkedin',
         'kategori' => 'required|in:individu,kelompok',
         'deadline' => 'required|date|after_or_equal:today',
      ]);

      DB::beginTransaction();
      try {
         Tugas::create($validated);
         DB::commit();
         return redirect()->route('dashboard.pengumpulan-tugas.index')->with('success', 'Tugas berhasil ditambahkan');
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('dashboard.pengumpulan-tugas.index')->with('error', 'Tugas gagal ditambahkan');
      }
      // try {
      //    Tugas::create([
      //       'judul' => $request->judul,
      //       'deskripsi' => $request->deskripsi,
      //       'hari' => $request->hari,
      //       'tipe_link' => $request->tipe_link,
      //       'kategori' => $request->kategori,
      //       'deadline' => $request->deadline
      //    ])
      //    DB::commit();

      //    return response()->json([
      //       'response' => [
      //          'status' => 200,
      //          'message' => 'Berhasil menambahkan tugas',
      //          'data' => $response
      //       ]
      //    ]);

      //    // return Inertia::view(
      //    //    'Dashboard/pengumpulan-tugas'
      //    // )
      // } catch (\Throwable $th) {
      //    DB::rollBack()

      //    return response()->json([
      //       'response' => [
      //          'status' => 500,
      //          'message' => 'Gagal menambahkan tugas',
      //          'data' => $response
      //       ]
      //    ]);
      // }
   }

   public function getJudulTugas()
   {
      try {
         $tugas = Tugas::select('id', 'judul')->orderBy('id')->get();
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => $e->getMessage()
            ]
         ]);
      }
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mendapatkan data',
            'data' => $tugas
         ]
      ]);
   }

   public function getTugasUser($id)
   {
      try
       {
         $tugas = PengumpulanTugas::with([
            'tugas' => function ($query) {
               $query->select('id', 'judul');
            }
         ])->where('user_id', $id)->get();

         $nama = User::findOrFail($id)->name;
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => $e->getMessage()
            ]
         ]);
      }
      $response = $tugas->transform(function ($item) {
         return [
            'id' => $item->id,
            'nama_tugas' => $item->tugas->judul,
            'jawaban' => $item->jawaban,
            'isReturn' => $item->isReturn,
            'tanggal_submit' => $item->tanggal_submit,
            'catatan' => $item->catatan
         ];
      });
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mendapatkan data',
            'data' => $response
         ],
         'nama' => $nama
      ]);
   }
   public function getTugasKelompok()
   {
      try {
         $ketua = User::where('kelompok_id', Auth::user()->kelompok_id)->where('isKetua', true)->first();
         $tugas = Tugas::with([
            'pengumpulanTugas' => function ($query) use ($ketua) {
               $query->select('id', 'tugas_id', 'jawaban', 'isReturn', 'catatan')
                  ->where('user_id', $ketua->id); // Filter right in the 'with' to double-check
            }
         ])
            ->where('kategori', 'kelompok')
            ->whereHas('pengumpulanTugas', function ($query) use ($ketua) {
               $query->where('user_id', $ketua->id);
            })->get();
      } catch (\Exception $e) {
         return response()->json([
            'response' => [
               'status' => 500,
               'message' => $e->getMessage()
            ]
         ]);
      }
      return response()->json([
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mendapatkan data',
            'data' => $tugas
         ],
      ]);
   }
   public function returnTugas(Request $request)
   {
      $validated = $request->validate([
         'id' => 'required|integer',
         'catatan' => "required|string|max:120|regex:/^[a-zA-Z0-9\' .\-_]+$/",
      ]);

      $kelompokId = Auth::user()->kelompok_id;

      $tugas = PengumpulanTugas::find($validated['id']);
      if ($tugas->isReturn) {
         return redirect()->back()->with(
            'response',
            [
               'status' => 400,
               'message' => "Tugas sudah dikembalikan"
            ]
         );
      }

      DB::beginTransaction();
      try {
         $tugas->update([
            'isReturn' => true,
            'catatan' => $validated['catatan']
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->back()->with(
            'response',
            [
               'status' => 500,
               'message' => "Kesalahan server internal"
            ]
         );
      }
      return redirect()->back()->with(
         'response',
         [
            'status' => 200,
            'message' => 'Berhasil mengembalikan tugas'
         ]
      );
   }

   public function getPoster()
   {
      $kelompok_id = Auth::user()->kelompok_id;
      $urls = Poster::where('kelompok_id', $kelompok_id)
         ->get();

      return response()->json($urls);
   }

   public function returnPoster(Request $request)
   {
      $validated = $request->validate([
         'hari' => 'required|integer|in:0,1,2,3,4,5',
      ]);
      $poster = Poster::where('kelompok_id', Auth::user()->kelompok_id)
         ->where('hari', $validated['hari'])
         ->first();

      if (!$poster) {
         return redirect()->back()->with(
            'response',
            [
               'status' => 404,
               'message' => 'Poster tidak ditemukan'
            ]
         );
      }

      DB::beginTransaction();
      try {
         $storagePath = substr($poster->poster, strlen('/storage/'));
         if (Storage::disk('public')->exists($storagePath)) {
            Storage::disk('public')->delete($storagePath);
         }
         $poster->update([
            'url_poster' => null,
            'isReturn' => true,
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->back()->with(
            'response',
            [
               'status' => 500,
               'message' => $e->getMessage()
            ]
         );
      }
      return redirect()->back()->with(
         'response',
         [
            'status' => 200,
            'message' => 'Berhasil mengembalikan poster'
         ]
      );
   }



   public function getAllTugas(Request $request, $tugas_id, $kelompok_id, $status)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');
      $tugasId = intval($tugas_id);
      $kelompok = intval($kelompok_id);
      $status = intval($status);

      $tugass = Tugas::find($tugasId);

      if (!$tugass) {
         return response()->json([
               'response' => [
                  'status' => 404,
                  'message' => 'Tugas tidak ditemukan'
               ]
         ]);
      }

      $query = User::query()
         ->where('role_id', 1)
         ->whereNotIn('kelompok_id', [131, 132])
         ->with(['kelompok']); // Pastikan kelompok di-load

      // Filtering by kelompok if it's provided and not 'NaN'
      if ($kelompok !== 0) {
         $query->where('kelompok_id', $kelompok);
      }

      // PERBAIKAN: Load pengumpulan_tugas untuk tugas spesifik
      if ($tugasId != 0) {
         if ($tugass->kategori == 'kelompok') {
               $query->where('isKetua', true)
                     ->with(['pengumpulan_tugas' => function ($q) use ($tugasId) {
                        $q->where('tugas_id', $tugasId);
                     }]);
         } else if ($tugass->kategori == 'individu') {
               $query->with(['pengumpulan_tugas' => function ($q) use ($tugasId) {
                  $q->where('tugas_id', $tugasId);
               }]);
         }
      }

      // Apply search criteria
      if ($searchTerm) {
         $query->where(function ($q) use ($searchTerm) {
               $q->where('name', 'like', '%' . $searchTerm . '%')
                  ->orWhere('nim', 'like', '%' . $searchTerm . '%')
                  ->orWhere('email', 'like', '%' . $searchTerm . '%');
         });
      }

      // PERBAIKAN: Status filter - hanya apply jika status bukan 0
      if ($status !== 0) {
         switch ($status) {
               case 1: // Sudah Mengumpulkan (tepat waktu)
                  $query->whereHas('pengumpulan_tugas', function ($query) use ($tugass) {
                     $query->where('tugas_id', $tugass->id)
                           ->where('isReturn', false)
                           ->where('tanggal_submit', '<=', $tugass->deadline);
                  });
                  break;
               case 2: // Telat Mengumpulkan
                  $query->whereHas('pengumpulan_tugas', function ($query) use ($tugass) {
                     $query->where('tugas_id', $tugass->id)
                           ->where('isReturn', false)
                           ->where('tanggal_submit', '>', $tugass->deadline);
                  });
                  break;
               case 3: // Dikembalikan
                  $query->whereHas('pengumpulan_tugas', function ($query) use ($tugass) {
                     $query->where('tugas_id', $tugass->id)
                           ->where('isReturn', true);
                  });
                  break;
               case 4: // Belum Mengumpulkan
                  $query->whereDoesntHave('pengumpulan_tugas', function ($query) use ($tugass) {
                     $query->where('tugas_id', $tugass->id);
                  });
                  break;
         }
      }

      $tugas = $query->paginate($perPage);

      // Transform collection to include detailed data
      $tugas->getCollection()->transform(function ($user) use ($tugass) {
         $pengumpulan = $user->pengumpulan_tugas->where('tugas_id', $tugass->id)->first();
         $isLate = $pengumpulan && $pengumpulan->tanggal_submit > $tugass->deadline;

         $status = 'Belum Mengumpulkan';
         if ($pengumpulan) {
               if ($pengumpulan->isReturn) {
                  $status = 'Dikembalikan';
               } elseif ($isLate) {
                  $status = 'Telat Mengumpulkan';
               } else {
                  $status = 'Sudah Mengumpulkan';
               }
         }

         return [
               'id' => $user->id,
               'user' => [
                  'name' => $user->name,
                  'nim' => $user->nim,
                  'nama_kelompok' => optional($user->kelompok)->nama_kelompok,
               ],
               'tugas' => [
                  'id' => optional($pengumpulan)->id,
                  'judul' => $tugass->judul,
                  'jawaban' => optional($pengumpulan)->jawaban,
                  'isReturn' => optional($pengumpulan)->isReturn ?? 0,
                  'catatan' => optional($pengumpulan)->catatan,
               ],
               'status' => $status,
         ];
      });

      return response()->json($tugas);
   }


}
