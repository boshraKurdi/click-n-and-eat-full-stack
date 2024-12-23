<?php

use App\Models\Meal;
use App\Models\RestaurantCategory;
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
        Schema::create('restaurant_category_meals', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(RestaurantCategory::class)->constrained();
            $table->foreignIdFor(Meal::class)->constrained();
            $table->float('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restaurant_category_meals');
    }
};
