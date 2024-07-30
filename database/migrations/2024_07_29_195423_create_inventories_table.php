<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('Moonlight Elixir');
            $table->integer('Shadowfire Brew');
            $table->integer('Starfall Salad');
            $table->integer('Bloodmoon Infusion');
            $table->integer('Frostfire Tea');
            $table->integer('Twilight Tonic');
            $table->integer('Sunfire Elixir');
            $table->integer('Whisperwind Potion');
            $table->integer('Celestial Brew');
            $table->integer('Astral Essence');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventories');
    }
}
