<?php

namespace App\Http\Controllers;

use App\Models\TelegramUser;
use App\Models\GameStatus;
use App\Models\Inventories;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UserController extends Controller
{
    public function initUser(Request $request)
    {
        TelegramUser::updateOrCreate(
            ['t_user_id' => $request->get('id')],
            [
                'first_name' => $request->get('first_name'),
                'last_name' => $request->get('last_name'),
                'username' => $request->get('username'),
            ]
        );
        $currentUser = TelegramUser::where('t_user_id', $request->get('id'))->first();
        if ($currentUser) {
            $currentDate = Carbon::now();
            $oneDayBefore = $currentDate->subDay();
            $formattedDate = $oneDayBefore->format('Y-m-d H:i:s');
            $gameStatus = GameStatus::firstOrCreate(
                ['user_id' => $currentUser->id],
                [
                    'balance' => 0,
                    'level_point' => 0,
                    'current_recipe' => 'Moonlight Elixir',
                    'ingredients_clicks' => '0,0,0,0,0',
                    'is_collected' => true,
                    'last_crafted_time' => $formattedDate
                ]
            );
            $inventories = Inventories::firstOrCreate(
                ['user_id' => $currentUser->id],
                [
                    'Moonlight Elixir' => 0,
                    'Shadowfire Brew' => 0,
                    'Starfall Salad' => 0,
                    'Bloodmoon Infusion' => 0,
                    'Frostfire Tea' => 0,
                    'Twilight Tonic' => 0,
                    'Sunfire Elixir' => 0,
                    'Whisperwind Potion' => 0,
                    'Celestial Brew' => 0,
                    'Astral Essence' => 0,
                ]
            );
        }
        return response([
            'user' => $currentUser,
            'gameStatus' => $gameStatus,
            'inventories' => $inventories
        ], 200);
    }
}
