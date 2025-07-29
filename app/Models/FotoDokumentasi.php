<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class FotoDokumentasi extends Model
{
    use HasFactory;

    /**
     * Nama tabel yang digunakan oleh model ini
     */
    protected $table = 'foto_dokumentasi';

    /**
     * Field yang boleh diisi secara mass assignment
     */
    protected $fillable = [
        'dokumentasi_id',
        'nama_file',
        'path_file'
    ];

    /**
     * Relasi belongs-to dengan Dokumentasi
     * Setiap foto terkait dengan satu dokumentasi
     */
    public function dokumentasi()
    {
        return $this->belongsTo(Dokumentasi::class, 'dokumentasi_id');
    }

    /**
     * Accessor untuk mendapatkan URL foto
     */
    public function getUrlAttribute()
    {
        return Storage::url($this->path_file);
    }

    /**
     * Method untuk menghapus file foto dari storage
     */
    public function deleteFile()
    {
        if (Storage::exists($this->path_file)) {
            Storage::delete($this->path_file);
        }
    }

    /**
     * Boot method untuk auto delete file ketika model dihapus
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($foto) {
            $foto->deleteFile();
        });
    }
}