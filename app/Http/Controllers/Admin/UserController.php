<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\UserStoreRequest;
use App\Http\Requests\Admin\User\UserUpdateRequest;
use App\Models\Kelompok;
use App\Models\Penyakit;
use App\Models\Prodi;
use App\Models\Qrcode;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      return Inertia::render('Dashboard/user/Page');
   }

   public function getUsersMaba(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      if (Auth::user()->role_id == 2 || Auth::user()->role_id == 4) {
         $kelompok_id = Auth::user()->kelompok_id;
         $query = User::query()->where('kelompok_id', $kelompok_id);
      } elseif (Auth::user()->role_id == 5) {
         $prodi_id = Auth::user()->prodi_id;
         $query = User::query()->where('prodi_id', $prodi_id);
      } elseif (Auth::user()->role_id == 3) {
         $query = User::query();
      } else {
         return response()->json([
            'response' => [
               'status' => 403,
               'message' => 'Anda tidak memiliki akses',
            ]
         ], 403);
      }

      $query->where('role_id', 1)->with(['penyakit', 'kelompok']);

      if ($searchTerm) {
         $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', '%' . $searchTerm . '%')
               ->orWhere('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('email', 'like', '%' . $searchTerm . '%');
         });
      }

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage();
      $perPage = $users->perPage();
      $currentIndex = ($currentPage - 1) * $perPage;

      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex,
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
               'kelompok' => $user->kelompok->nama_kelompok,
               'isKetua' => $user->isKetua
            ],
         ];
      });

      return response()->json($users);
   }


   public function getUsersDapmen(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()->whereIn('role_id', [2, 4])->with(['penyakit', 'kelompok']);
      if ($searchTerm) {
         $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', '%' . $searchTerm . '%')
               ->orWhere('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('email', 'like', '%' . $searchTerm . '%');
         });
      }

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
            ],
         ];
      });

      return response()->json($users);
   }

   public function getUsersPjprodi(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()->where('role_id', 5)->with(['penyakit', 'kelompok']);
      if ($searchTerm) {
         $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', '%' . $searchTerm . '%')
               ->orWhere('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('email', 'like', '%' . $searchTerm . '%');
         });
      }

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
            ],
         ];
      });

      return response()->json($users);
   }

   public function getUsersKorlap(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()->where('role_id', 6)->with(['penyakit', 'kelompok']);
      if ($searchTerm) {
         $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', '%' . $searchTerm . '%')
               ->orWhere('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('email', 'like', '%' . $searchTerm . '%');
         });
      }

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
            ],
         ];
      });

      return response()->json($users);
   }

   public function getUsersMamet(Request $request)
   {
      $perPage = $request->input('perPage', 10);
      $searchTerm = $request->input('search', '');

      $query = User::query()->where('role_id', 7)->with(['penyakit', 'kelompok']);
      if ($searchTerm) {
         $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', '%' . $searchTerm . '%')
               ->orWhere('nim', 'like', '%' . $searchTerm . '%')
               ->orWhere('email', 'like', '%' . $searchTerm . '%');
         });
      }

      $users = $query->paginate($perPage);

      $currentPage = $users->currentPage(); // Halaman saat ini
      $perPage = $users->perPage(); // Jumlah data per halaman
      $currentIndex = ($currentPage - 1) * $perPage; // Menghitung index awal

      // Mengubah setiap item untuk menambahkan nomor urut
      $users->getCollection()->transform(function ($user) use (&$currentIndex) {
         return [
            'no' => ++$currentIndex, // Nomor urut
            'id' => $user->id,
            'user' => [
               'name' => $user->name,
               'nim' => $user->nim,
               'email' => $user->email,
               'role' => $user->role->role,
            ],
         ];
      });

      return response()->json($users);
   }

   /**
    * Store a newly created resource in storage.
    */


   public function store(Request $request)
   {

      $validated = $request->validate([
         'name' => ['required', 'string', 'max:120', "regex:/^[a-zA-Z\' .]+$/"],
         'kelompok_id' => ['nullable', 'integer', 'max:131 '],
         'prodi_id' => ['nullable', 'integer', 'max:41'],
         'role_id' => ['required', 'integer', 'max:8']
      ]);

      $jumlah = User::where('kelompok_id', $validated['kelompok_id'])->count();
      $urut = $jumlah + 1;
      $password = "naramuda2024";

      // Define the closure for email generation inside the store method
      $generateEmail = function ($number, $name, $code) {
         // Sanitize the name to make it suitable for use in an email address
         $sanitized_name = strtolower(preg_replace('/\s+/', '', $name));

         // Format the email
         $email = sprintf('%03d.%s.%03d@pplk.com', $number, $sanitized_name, $code);

         return $email;
      };

      switch ($validated['role_id']):
         case 1:
            $email = $generateEmail($jumlah, $validated['name'], $validated['kelompok_id']);
            break;
         case 2:
            $email = "daplok" . $validated['kelompok_id'] . "@pplk.com";
            break;
         case 4:
            $email = "mentor" . $validated['kelompok_id'] . "@pplk.com";
            break;
         case 6:
            $email = "korlap@pplk.com";
            break;
         case 7:
            $email = "mamet@pplk.com";
            break;
      endswitch;

      DB::beginTransaction();
      try {
         $user = User::create(
            [
               'name' => $validated['name'],
               'password' => bcrypt($password),
               'email' => $email,
               'prodi_id' => $validated['prodi_id'],
               'role_id' => $validated['role_id'],
               'kelompok_id' => $validated['kelompok_id']
            ]
         );

         if ($user->role_id == 1) {
            $qrcode = Qrcode::create([
               'user_id' => $user->id,
               'code' => \Str::random(10)
            ]);
         }
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return redirect()->route('dashboard/create-user')->with(
            'response',
            [
               'status' => 500,
               'message' => $e->getMessage(),
            ]
         );
      }
      return redirect()->route('dashboard/create-user')->with(
         'response',
         [
            'status' => 200,
            'message' => 'Berhasil menambahkan user',
         ]
      );
   }


   /**
    * Display the specified resource.
    */
   public function show(string $id)
   {
      //
   }

   /**
    * Show the form for editing the specified resource.
    */
   public function edit(string $id)
   {
      //
      $user = User::find($id);
      $isDapmenOrMentor = auth()->user()->role_id == 2 || auth()->user()->role_id == 4;
      if ($isDapmenOrMentor && auth()->user()->kelompok_id != $user->kelompok_id) {
         return redirect()->route('dashboard.user.index');
      }
      if ($isDapmenOrMentor && $user->role_id != 1) {
         return redirect()->route('dashboard.user.index');
      }
      return Inertia::render('Dashboard/detail-user/Page', [
         'response' => [
            'status' => 200,
            'message' => 'Berhasil mendapatkan data user',
            'data' => User::with('penyakit', 'qrcode', 'kelompok', 'pilar')->find($id)
         ]
      ]);
   }

   public function getProdis()
   {
      $prodi = Prodi::select('nama_prodi', 'id')->get();

      return response()->json($prodi);
   }
   public function getKelompok()
   {
      $kelompok = Kelompok::select('nama_kelompok', 'id', 'no_kelompok')->get();

      return response()->json($kelompok);
   }

   /**
    * Update the specified resource in storage.
    */
   public function editFoto(Request $request)
   {
      $validated = $request->validate([
         'id' => ['required', 'integer'],
         'photo' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
      ]);
      $user = User::find($validated['id']);
      if ($request->hasFile('photo')) {
         $storagePath = substr($user->photo_profile_url, strlen('/storage/'));
         if (Storage::disk('public')->exists($storagePath)) {
            Storage::disk('public')->delete($storagePath);
         }
         $path = $request->file('photo')->store('images/profilePhoto', 'public');
         $path_image = '/storage/' . $path;
      } else {
         $path_image = $user->photo_profile_url;
      }
      DB::BeginTransaction();
      try {
         $user->update([
            'photo_profile_url' => $path_image,
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return redirect()->route('dashboard.user.edit', ['id' => $user->id])
            ->with('response', [
               'status' => 500,
               'message' => 'Gagal mengubah foto profil user',
            ]);
      }

      return redirect()->route('dashboard.user.edit', ['id' => $user->id])
         ->with('response', [
            'status' => 200,
            'message' => 'Berhasil mengubah foto profil user',
         ]);
   }
   public function editProfil(Request $request)
   {
      // Validate input
      $validated = $request->validate([
         'id' => ['required', 'integer'],
         'name' => ['required', 'string', "regex:/^[\pL\s\-' ,.]+$/u", 'max:120'],
         'nim' => ['nullable', 'string'],
         'email' => ['required', 'email'],
         'prodi_id' => ['required', 'integer'],
         'bio' => ['nullable', 'string', 'max:150'],
         'pita' => ['nullable', 'string', 'in:hijau,kuning,merah'],
         'ket_penyakit' => ['nullable', 'string', 'max:120'],
      ]);

      // Find user by ID
      $user = User::find($validated['id']);
      if (!$user) {
         return redirect()->route('dashboard.user.edit', ['id' => $validated['id']])
            ->with('response', [
               'status' => 404,
               'message' => 'User not found',
            ]);
      }

      DB::transaction(function () use ($user, $validated) {
         // Update basic user details
         $user->update([
            'name' => $validated['name'],
            'nim' => $validated['nim'],
            'email' => $validated['email'],
            'prodi_id' => $validated['prodi_id'],
            'bio' => $validated['bio'],
         ]);

         // Check if user has role_id 1 and both pita and ket_penyakit are not null
         if ($user->role_id == 1 && !is_null($validated['pita'])) {
            if ($user->penyakit_id) {
               // Penyakit exists, so update it
               $penyakit = Penyakit::find($user->penyakit_id);
               if ($penyakit) {
                  $penyakit->update([
                     'pita' => $validated['pita'],
                     'ket_penyakit' => isset($validated['ket_penyakit']) ? $validated['ket_penyakit'] : ""
                  ]);
               }
            } else {
               // Penyakit does not exist, so create it
               $penyakit = Penyakit::create([
                  'pita' => $validated['pita'],
                  'ket_penyakit' => isset($validated['ket_penyakit']) ? $validated['ket_penyakit'] : ""
               ]);
               // Update user with new penyakit_id
               $user->penyakit_id = $penyakit->id;
               $user->save();
            }
         }
      });

      return redirect()->route('dashboard.user.edit', ['id' => $user->id])
         ->with('response', [
            'status' => 200,
            'message' => 'Successfully updated user profile',
         ]);
   }


   public function editSosmed(Request $request)
   {
      $validated = $request->validate([
         'id' => ['required', 'integer'],
         'instagram_url' => ['nullable', 'url', 'max:120', 'regex:#^((https?:\/\/)?(www\.)?)?instagram\.com\/[a-zA-Z0-9._]{1,30}\/?$#i'],
         'linkedin_url' => ['nullable', 'url', 'max:120', 'regex:#^((https?:\/\/)?(www\.)?)?linkedin\.com\/in\/[a-zA-Z0-9\-_]{1,100}\/?$#i'],
      ]);
      $user = User::find($validated['id']);
      DB::BeginTransaction();
      try {
         $user->update([
            'instagram_url' => $validated['instagram_url'],
            'linkedin_url' => $validated['linkedin_url'],
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return redirect()->route('dashboard.user.edit', ['id' => $user->id])
            ->with('response', [
               'status' => 500,
               'message' => 'Gagal mengubah link sosmed user',
            ]);
      }
      return redirect()->route('dashboard.user.edit', ['id' => $user->id])
         ->with('response', [
            'status' => 200,
            'message' => 'Berhasil mengubah link sosmed user',
         ]);
   }

   public function editPassword(Request $request)
   {
      $validated = $request->validate([
         'id' => ['required', 'integer'],
         'new_password' => ['required', 'string'],
         'confirm_new_password' => ['required', 'string'],
      ]);
      $user = User::findOrFail($validated['id']);

      if ($validated['new_password'] !== $validated['confirm_new_password']) {
         return redirect()->route('dashboard.user.edit', ['id' => $user->id])
            ->with('response', [
               'status' => 400,
               'message' => 'Password baru dan konfirmasi password baru tidak sama',
            ]);
      }

      DB::BeginTransaction();
      try {
         $user->update([
            'password' => bcrypt($validated['new_password']),
            'isFirstTime' => true,
         ]);
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return redirect()->route('dashboard.user.edit', ['id' => $user->id])
            ->with('response', [
               'status' => 500,
               'message' => 'Gagal mereset password',
            ]);
      }
      return redirect()->route('dashboard.user.edit', ['id' => $user->id])
         ->with('response', [
            'status' => 200,
            'message' => 'Berhasil mengubah password',
         ]);
   }

   public function editSertif(Request $request)
   {
      $validated = $request->validate([
         'id' => ['required', 'integer'],
         'sertif' => ['required', 'url'],
      ]);
      $user = User::find($validated['id']);
      DB::BeginTransaction();
      try {
         $user->update([
            'link_sertif' => $validated['sertif'],
         ]);

         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return redirect()->route('dashboard.user.edit', ['id' => $user->id])
            ->with('response', [
               'status' => 500,
               'message' => 'Gagal mengubah sertifikat',
            ]);
      }
      return redirect()->route('dashboard.user.edit', ['id' => $user->id])
         ->with('response', [
            'status' => 200,
            'message' => 'Berhasil mengubah sertifikat',
         ]);
   }
   /**
    * Remove the specified resource from storage.
    */

   public function setKetua(Request $request)
   {
      $validated = $request->validate([
         'id' => ['required', 'integer']
      ]);

      DB::beginTransaction();
      try {
         $user = User::findOrFail($validated['id']);
         if ($user->kelompok_id != Auth::user()->kelompok_id) {
            return redirect()->back()->with(
               'response',
               [
                  'status' => 403,
                  'message' => "You are not authorized"
               ]
            );
         }
         $status = User::where('kelompok_id', $user->kelompok_id)->where('isKetua', true);

         if ($status->exists()) {
            $ketua = $status->first();
            $ketua->update([
               'isKetua' => false,
            ]);
         }
         if (!$user->isKetua) {
            $user->update([
               'isKetua' => true,
            ]);
         } else {
            $user->update([
               'isKetua' => false,
            ]);
         }
         DB::commit();
      } catch (\Exception $e) {
         DB::rollback();
         return redirect()->back()
            ->with('response', [
               'status' => 500,
               'message' => 'Gagal memilih Ketua Kelompok',
            ]);
      }

      return redirect()->back()
         ->with('response', [
            'status' => 200,
            'message' => 'Berhasil memilih Ketua Kelompok',
         ]);
   }
   public function destroy(Request $request)
   {
      $validated = $request->validate(
         [
            'id' => ['required', 'integer'],
         ]
      );
      $user = User::find($validated['id']);
      DB::beginTransaction();
      try {
         $penyakit = Penyakit::find($user->penyakit_id);
         $qrcode = Qrcode::where('user_id', $user->id)->first();
         if ($qrcode) {
            $qrcode->delete();
         }
         if ($penyakit) {
            $penyakit->delete();
         }
         $user->delete();
         DB::commit();
      } catch (\Exception $e) {
         DB::rollBack();
         return redirect()->route('dashboard.atur-maba')->with([
            'response' => [
               'status' => 500,
               'message' => 'Gagal menghapus user',
            ]
         ]);
      }
      return redirect()->route('dashboard.atur-maba')->with([
         'response' => [
            'status' => 200,
            'message' => 'Berhasil menghapus user',
         ]
      ]);
   }
}
