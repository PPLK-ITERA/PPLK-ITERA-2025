<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fakultas extends Model
{
    use HasFactory;
    protected $table = 'fakultas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nama_fakultas',
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function prodi(){
        return $this->hasMany(Prodi::class, 'fakultas_id', 'id');
    }
}
