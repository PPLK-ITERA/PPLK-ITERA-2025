<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quiz_answer extends Model
{
    use HasFactory;
    protected $table ='quiz_answer';
    protected $primaryKey ='id';
    protected $fillable = [
        'teks_jawaban',
        'is_correct'
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];
    public function quiz(){
        return $this->hasMany(quiz::class,'question_id','id');
    }
}
