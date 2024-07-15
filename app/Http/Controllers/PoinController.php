<?php

namespace App\Http\Controllers;

use App\Models\PoinQrCode;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Http\Request;

class PoinController extends Controller
{
    public function index($user_id)
    {
        $user = User::find($user_id);
        return view('testing', compact('user'));
    }

    public function store(Request $request, $user_id)
    {
        $user = User::find($user_id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        DB::beginTransaction();
        try {
            $user->score += $request->point;
            $user->save();
            DB::commit();
            return response()->json(['message' => 'Poin berhasil ditambahkan'], 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['message' => 'Gagal menambahkan poin'], 500);
        }
    }

    public function generateQrCode($user_id)
    {
        $code = PoinQrCode::where('code', strval($user_id) . '-prapplk')->first();
        if (!$code) {
            PoinQrCode::create([
                'code' => strval($user_id) . '-prapplk',
                'user_id' => $user_id,
                'expired_at' => now()->addDay(),
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
