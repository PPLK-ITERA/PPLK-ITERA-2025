<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizActivity extends Model
{
    use HasFactory;
    protected $table ='quiz_activities';
    protected $primaryKey ='id';
    protected $fillable = [
        'user_id',
        'question_id'
        ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
    public function quiz(){
        return $this->hasMany(quiz::class,'question_id','id');
    }

    public function user(){
        return $this->hasMany(User::class,'user_id','id');
    }
}
