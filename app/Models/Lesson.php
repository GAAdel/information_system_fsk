<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = ["title", "lesson_file", "body", "course_id"];

    public $timestamps = false;

    public function course() {
        return $this->belongsToOne(Course::class);
    }

    // public function scopeFindLessonsById($query, $id)
    // {
    //     return $query->with('courses')->where('id', $id);
    // }
    public function scopeFindById($query, $id)
    {
        return $query->all()->where('id', $id);
    }
}