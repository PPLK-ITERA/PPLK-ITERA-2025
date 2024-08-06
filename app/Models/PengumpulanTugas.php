<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PengumpulanTugas extends Model
{
    use HasFactory;

    protected $table = 'pengumpulan_tugas';

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'jawaban',
        'isReturn',
        'catatan',
        'user_id',
        'tanggal_submit',
        'tugas_id'
    ];

    public function tugas()
    {
        return $this->belongsTo(Tugas::class, 'tugas_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}