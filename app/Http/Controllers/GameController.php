<?php

namespace App\Http\Controllers;

use App\Models\GameStatus;
use App\Models\IngredientClicks;
use App\Models\Inventories;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
                    "last_crafted_time" => $request->last_crafted_time,
                    "is_collected" => $request->is_collected,
                    'level_point' => $request->level_point
                ]
            );
        foreach ($request->ingredients_clicks as $key => $clicks) {
            IngredientClicks::updateOrCreate(
                ['user_id'=>$request->user_id, "ingredient_index"=>$key],
                ['clicks'=>$clicks]
            );
        }
            # code...
        if ($request->completedRecipe) {
            Inventories::updateOrCreate(
                ['user_id'=>$request->user_id, 'recipe_name'=>$request->completedRecipe],
                ['count'=>DB::raw('count+1')]
            );
        }
        // return response([
        //     'gameStatus' => $gameStatus,
        // ], 200);
    }
}
