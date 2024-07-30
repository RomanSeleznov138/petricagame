<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameStatus extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'balance',
        'level_point',
        'current_recipe',
        'ingredients_clicks',
        'is_collected',
        'last_crafted_time',
    ];
}
