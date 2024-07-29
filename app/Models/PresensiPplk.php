<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PresensiPplk extends Model
{
    use HasFactory;
    protected $table = 'presensi_pplks';
    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id',
        'tanggal_presensi',
        'kehadiran',
        'keterangan',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
