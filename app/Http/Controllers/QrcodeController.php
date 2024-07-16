<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Qrcode as QrcodeModel;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
class QrcodeController extends Controller
{
    public function generateQrcode(){
        $user = auth()->user();
        $code = QrCodeModel::where('id', $user->qrcode_id)->first()->code;
        if(!$code){
            return response()->json(['message'=>'Kode tidak ditemukan']);
        }
        $qrcodeImage = Qrcode::size(300)->generate($code);
        return response($qrcodeImage, 200);
    }
}
