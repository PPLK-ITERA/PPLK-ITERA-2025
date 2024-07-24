<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quiz extends Model
{
    use HasFactory;
    protected $table ='quiz';
    protected $primaryKey ='id';
    protected $fillable = [
        'quiz_question',
        'gedung_id'
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];
    public function QuizAnswer(){
        return $this->hasOne(quiz_answer::class,'question_id','id');
    }
    public function QuizActivity(){
        return $this->hasOne(QuizActivity::class,'question_id','id');
    }

}
