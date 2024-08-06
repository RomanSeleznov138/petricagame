<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientClicks extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'ingredient_index',
        'clicks'
    ];
}
