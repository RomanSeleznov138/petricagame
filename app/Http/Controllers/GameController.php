<?php

namespace App\Http\Controllers;

use App\Models\GameStatus;
use App\Models\Inventories;

use Illuminate\Http\Request;

class GameController extends Controller
{
    //
    public function gameStatus(Request $request)
    {
        $gameStatus = GameStatus::where("user_id", $request->user_id)
            ->update(
                [
                    "balance" => $request->balance,
                    "current_recipe" => $request->current_recipe,
                    "ingredients_clicks" => $request->ingredients_clicks,
                    "last_crafted_time" => $request->last_crafted_time,
                    "is_collected" => $request->is_collected,
                    'level_point' => $request->level_point
                ]
            );
        if ($request->completedRecipe) {
            $inventory = Inventories::where('user_id', $request->user_id)->first();
            $currentNumber = $inventory[$request->completedRecipe];
            $inventory = Inventories::where("user_id", $request->user_id)
                ->update([$request->completedRecipe => $currentNumber + 1]);

            return response([
                'gameStatus' => $gameStatus,
                'inventory' => $inventory
            ], 200);
        }
        return response([
            'gameStatus' => $gameStatus,
        ], 200);
    }
}
