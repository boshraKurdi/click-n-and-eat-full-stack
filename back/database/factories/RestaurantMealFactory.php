<?php

namespace Database\Factories;

use App\Models\Meal;
use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RestaurantMeal>
 */
class RestaurantMealFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'restaurant_id' => Restaurant::inRandomOrder()->first()->id,
            'meal_id' => Meal::inRandomOrder()->first()->id,
            'price' => rand(100, 5000)
        ];
    }
}