<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, HasPermissions;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function courses() {
        return $this->belongsToMany(Course::class);
    }

    public function scores() {
        return $this->hasMany(Score::class);
    }

    public function scopeAllPaginate($query, $numbers)
    {
        return $query->orderBy('created_at', 'desc')->paginate($numbers);
    }

    public function scopeFindBySearch($query, $numbers, $name)
    {
        return $query->where("name", "like", "%".$name."%")->orderBy('created_at', 'desc')->paginate($numbers);
    }

    public function scopeFindById($query, $id)
    {
        return $query->where('id', $id)->firstOrFail();
    }
}