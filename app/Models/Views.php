<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Views extends Model
{
    protected $table = 'views';
    protected $fillable = [
        'viewing_user_id', 'viewed_user_id'
     ];
  
     protected $hidden = ['created_at', 'updated_at'];
  
     public function viewingUser()
     {
        return $this->belongsTo(User::class, 'viewing_user_id');
     }
  
     public function viewedUser()
     {
        return $this->belongsTo(User::class, 'viewed_user_id');
     }
    use HasFactory;
}
