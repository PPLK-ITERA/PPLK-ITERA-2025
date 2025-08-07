<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dokumentasi extends Model
{
    use HasFactory;

    /**
     * Nama tabel yang digunakan oleh model ini
     */
    protected $table = 'dokumentasi';

    /**
     * Field yang boleh diisi secara mass assignment
     */
    protected $fillable = [
        'hari_ke',
        'judul',
        'deskripsi',
        'link_gdrive'
    ];

    /**
     * Relasi one-to-many dengan FotoDokumentasi
     * Satu dokumentasi bisa memiliki banyak foto
     */
    public function fotos()
    {
        return $this->hasMany(FotoDokumentasi::class, 'dokumentasi_id');
    }

    /**
     * Accessor untuk mendapatkan jumlah foto
     */
    public function getJumlahFotoAttribute()
    {
        return $this->fotos()->count();
    }

    /**
     * Scope untuk mendapatkan dokumentasi berdasarkan hari
     */
    public function scopeByHari($query, $hari)
    {
        return $query->where('hari_ke', $hari);
    }

    /**
     * Scope untuk mengurutkan berdasarkan hari
     */
    public function scopeOrderByHari($query)
    {
        return $query->orderBy('hari_ke', 'asc');
    }
}