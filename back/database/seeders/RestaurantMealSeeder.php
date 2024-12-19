<?php

namespace Database\Seeders;

use App\Models\RestaurantMeal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestaurantMealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RestaurantMeal::factory(20)->create();
    }
}
