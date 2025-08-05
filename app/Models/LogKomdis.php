<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogKomdis extends Model
{
    use HasFactory;

    protected $table = 'log_komdis';

    protected $fillable = [
        'user_id',
        'kesalahan',
        'kategori',
        'keterangan',
        'status',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relationship dengan User
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Status options untuk form select
     */
    public static function getStatusOptions()
    {
        return [
            'belum diproses' => 'Belum Diproses',
            'proses' => 'Sedang Diproses',
            'selesai' => 'Selesai',
            'dibatalkan' => 'Dibatalkan',
        ];
    }

    /**
     * Get status badge class for UI
     */
    public function getStatusBadgeClassAttribute()
    {
        return match($this->status) {
            'selesai' => 'bg-green-100 text-green-800',
            'proses' => 'bg-yellow-100 text-yellow-800',
            'dibatalkan' => 'bg-red-100 text-red-800',
            default => 'bg-gray-100 text-gray-800'
        };
    }

    /**
     * Get formatted status for display
     */
    public function getFormattedStatusAttribute()
    {
        return match($this->status) {
            'belum diproses' => 'Belum Diproses',
            'proses' => 'Sedang Diproses',
            'selesai' => 'Selesai',
            'dibatalkan' => 'Dibatalkan',
            default => 'Belum Diproses'
        };
    }
}