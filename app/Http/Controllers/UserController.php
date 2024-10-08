<?php

namespace App\Http\Controllers;

use App\Models\IngredientClicks;
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
                    'is_collected' => true,
                    'last_crafted_time' => $formattedDate
                ]
            );
            $ingredient_clicks = IngredientClicks::where('user_id', $currentUser->id)
                ->select('ingredient_index', 'clicks')
                ->get()
                ->map(function ($item) {
                    return $item->clicks;
                })
                ->toArray();
            $inventories = Inventories::where('user_id', $currentUser->id)
                ->select('recipe_name', 'count')
                ->get();
        }
        return response([
            'user' => $currentUser,
            'gameStatus' => $gameStatus,
            'ingredient_clicks' => $ingredient_clicks,
            'inventories' => $inventories
        ], 200);
    }
}
