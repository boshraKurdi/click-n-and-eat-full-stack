<?php

namespace App\Http\Controllers;

use App\Models\RestaurantMeal;
use App\Http\Requests\StoreRestaurantMealRequest;
use App\Http\Requests\UpdateRestaurantMealRequest;

class RestaurantMealController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRestaurantMealRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(RestaurantMeal $restaurantMeal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRestaurantMealRequest $request, RestaurantMeal $restaurantMeal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RestaurantMeal $restaurantMeal)
    {
        //
    }
}
