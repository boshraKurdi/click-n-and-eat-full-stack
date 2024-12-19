<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Meal extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\MealFactory> */
    use HasFactory, InteractsWithMedia;

    public function restaurant()
    {
        return $this->belongsToMany(
            Restaurant::class,
            'restaurant_meals',
            'meal_id',
            'restaurant_id',
        )->withPivot(['price']);
    }


    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('meals')->singleFile();
    }
}
