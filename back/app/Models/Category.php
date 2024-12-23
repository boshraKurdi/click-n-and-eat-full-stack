<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory, InteractsWithMedia;

    public function restaurant()
    {
        return $this->belongsToMany(Restaurant::class);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('categories')->singleFile();
    }
}
