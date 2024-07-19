<?php

namespace App\Http\Controllers;

use App\Models\PoinQrCode;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Http\Request;

class PoinController extends Controller
{
    public function index($user_id)
    {
        $ketua_kelompok = User::find($user_id);
        if (!$ketua_kelompok) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return view('testing', compact('ketua_kelompok'));
    }

    public function store(Request $request, $user_id)
    {
        $ketua_kelompok = User::find($user_id);
        if (!$ketua_kelompok) {
            return response()->json(['message' => 'User not found'], 404);
        }

        DB::beginTransaction();
        try {
            $ketua_kelompok->score += $request->point;
            $ketua_kelompok->save();
            DB::commit();
            return response()->json(['message' => 'Poin berhasil ditambahkan', 'ketua_kelompok' => $ketua_kelompok], 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['message' => $th], 500);
        }
    }

    public function generateQrCode($user_id)
    {
        $code = PoinQrCode::where('user_id', $user_id)
            ->where('created_at', '>=', Carbon::now()->subMinutes(10))
            ->orderBy('created_at', 'desc')
            ->first();

        if (!$code || $code->expired_at->isPast()) {
            $code = PoinQrCode::create([
                'code' => Crypt::encryptString(strval($user_id) . '-prapplk-' . Carbon::now()->format('Y-m-d-H-i')),
                'user_id' => $user_id,
                'expired_at' => Carbon::now()->addMinutes(10)->toDateTimeString(),
            ]);
        }

        $qrUrl = URL::route('poin.redirect', ['code' => $code->code]);

        $qrcodeImage = QrCode::size(300)->generate($qrUrl);

        return response($qrcodeImage, 200);
    }
    public function redirect($code)
    {
        $qrCode = PoinQrCode::where('code', $code)->first();

        if ($qrCode) {
            if ($qrCode->expired_at->isPast()) {
                return response()->json(['message' => 'QR code has expired'], 400);
            }
            return redirect()->route('poin.index', ['user_id' => $qrCode->user_id]);
        }
        return response()->json(['message' => 'QR code not found'], 404);
    }
}
