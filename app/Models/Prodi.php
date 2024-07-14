<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prodi extends Model
{
    use HasFactory;
    protected $table = 'prodis';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nama_prodi',
        'fakultas_id',
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function fakultas()
    {
        return $this->belongsTo(Fakultas::class, 'fakultas_id', 'id');
    }

    public function user(){
        return $this->hasMany(User::class, 'prodi_id', 'id');
    }
}
