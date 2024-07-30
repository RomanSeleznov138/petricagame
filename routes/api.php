<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\GameController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/init-user', [UserController::class, 'initUser'])->name('init-user');
Route::post('/game-controll', [GameController::class, 'gamestatus'])->name('game-controll');
