<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventories extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'Moonlight Elixir',
        'Shadowfire Brew',
        'Starfall Salad',
        'Bloodmoon Infusion',
        'Frostfire Tea',
        'Twilight Tonic',
        'Sunfire Elixir',
        'Whisperwind Potion',
        'Celestial Brew',
        'Astral Essence'
    ];
}
