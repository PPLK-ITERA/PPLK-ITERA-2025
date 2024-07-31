<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizAnswer extends Model
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
        return $this->hasMany(Quiz::class,'question_id','id');
    }
}
