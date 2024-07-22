<?php

namespace App\Http\Controllers;

use App\Models\PoinQrCode;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Http\Request;
use App\Helpers\PoinResponseHelper;

class PoinController extends Controller
{
    private $helper;

    public function __construct()
    {
        $this->helper = new PoinResponseHelper();
    }
    /**
     * Retrieves and displays QR code information for a given user.
     * If the QR code is expired or not found, returns an error page.
     * 
     * @param int $user_id The ID of the user to retrieve QR code for.
     * @return \Inertia\Response Inertia response with QR code data or error message.
     */
    public function index($user_id)
    {
        $ketua_kelompok = User::findOrFail($user_id);
        $qrCode = PoinQrCode::where('user_id', $user_id)
            ->where('created_at', '>=', Carbon::now()->subMinutes(10))
            ->orderBy('created_at', 'desc')
            ->first();
        if (!$qrCode || $qrCode->expired_at->isPast()) {
            return $this->helper->qrError('QR code expired', 400);
        }

        return $this->helper->poinSuccess($ketua_kelompok);
    }
    /**
     * Updates a user's score based on points from a request.
     * 
     * Validates 'poin' in the request. If missing, returns an error.
     * Checks for a valid, non-expired QR code. If invalid or expired, returns an error.
     * Updates the user's score and commits the transaction if successful.
     * If an error occurs during the update, rolls back the transaction and returns an error.
     * 
     * @param Request $request The request object ($request->poin), containing the points to add.
     * @param int $user_id The ID of the user whose score is to be updated.
     * @return \Inertia\Response Inertia response with success or error data.
     */

    public function store(Request $request, $user_id)
    {
        $ketua_kelompok = User::findorFail($user_id);
        if (!$request->poin) {
            return $this->helper->poinError('Poin is required', 400);
        }
        $qrCode = PoinQrCode::where('user_id', $user_id)
            ->where('created_at', '>=', Carbon::now()->subMinutes(10))
            ->orderBy('created_at', 'desc')
            ->first();

        if (!$qrCode || $qrCode->expired_at->isPast()) {
            return $this->helper->qrError('QR code expired', 400);
        }
        DB::beginTransaction();
        try {
            $ketua_kelompok->score += $request->poin;
            $ketua_kelompok->save();
            DB::commit();
            return $this->helper->poinSuccess($ketua_kelompok);
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->helper->poinError($th->getMessage(), 500);
        }
    }

    /**
     * Handles the creation of a new QR code for a user.
     * If the user_id is not provided or invalid, returns an error page.
     * Generates a new QR code if the existing one is expired or not found.
     *
     * @return \Inertia\Response Inertia response with QR code generation page or error message.
     */
    public function createQrCode()
    {
        return $this->helper->createQr();
    }

    /**
     * Generates and displays a QR code for a specific user.
     * Returns an error page if the user_id is missing or the user cannot be found.
     * Generates a new QR code if the existing one is expired or not found.
     *
     * @param int $user_id The ID of the user to generate QR code for.
     * @return \Inertia\Response Inertia response with QR code data or error message.
     */
    public function generateQrCode($user_id)
    {
        if ($user_id == 0) {
            return $this->helper->qrError('User ID is required', 404);
        }
        $user = User::find($user_id);
        if (!$user) {
            return $this->helper->qrError('User not found', 404);
        }
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

        $qrcodeImage = QrCode::format('png')->size(300)->generate($qrUrl);
        $qrcodeBase64 = base64_encode($qrcodeImage);


        return $this->helper->qrSuccess($qrcodeBase64, $qrUrl);
    }

    /**
     * Redirects to a specific page based on the QR code.
     * If the QR code is expired, returns an error page.
     *
     * @param string $code The QR code to validate and process.
     * @return \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse | \Inertia\Response Redirects to a specific route or returns an error page.
     */
    public function redirect($code)
    {
        $qrCode = PoinQrCode::where('code', $code)->firstOrFail();

        if ($qrCode->expired_at->isPast()) {
            return $this->helper->qrError('QR code expired', 400);
        }

        return to_route('poin', ['user_id' => $qrCode->user_id]);
    }
}
