<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    use HasFactory;

    protected $fillable = ["score_percentage", "score_count", "user_id", "test_id",];

    public function user() {
        return $this->belongsTo(User::class);
    }
}