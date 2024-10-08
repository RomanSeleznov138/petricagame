<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TelegramUser extends Model
{
    use HasFactory; 

    protected $fillable = [
        't_user_id',
        'first_name',
        'last_name',
        'username',
    ];
}
