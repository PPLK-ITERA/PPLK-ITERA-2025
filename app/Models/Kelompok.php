<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelompok extends Model
{
    use HasFactory;

    protected $table = 'kelompok';
    protected $primaryKey = 'id';
    protected $fillable = [
        'no_kelompok',
        'nama_kelompok',
        'logo_kelompok',
        'daplok_id',
        'mentor_id'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function scoreboard()
    {
        return $this->hasOne(Scoreboard::class, 'kelompok_id', 'id');
    }
    public function user()
    {
        return $this->hasMany(User::class, 'kelompok_id', 'id');
    }

    public function unlock_status()
    {
        return $this->hasOne(UnlockStatus::class, 'kelompok_id', 'id');
    }

    public function daplok()
    {
        return $this->belongsTo(User::class, 'daplok_id', 'id');
    }
    public function mentor()
    {
        return $this->belongsTo(User::class, 'mentor_id', 'id');
    }
}
