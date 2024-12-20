<?php

use App\Models\Meal;
use App\Models\Restaurant;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('restaurant_meals', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Meal::class);
            $table->foreignIdFor(Restaurant::class);
            $table->float('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restaurant_meals');
    }
};
