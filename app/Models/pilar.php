<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pilar extends Model
{
    use HasFactory;
    protected $table = 'pilar';
    protected $primaryKey = 'id';
    protected $fillable = [
        'pilar_name',
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
