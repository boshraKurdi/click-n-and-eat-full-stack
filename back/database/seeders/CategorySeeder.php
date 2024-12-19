<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $name = ['Meat', 'Pizza', 'Drink', 'Coffee', 'Healthy'];
        $name_ar = ['لحمة', 'بيتزا', 'مشروبات', 'قهوة', 'غذاء صحي'];
        for ($i = 0; $i <= 4; $i++) {
            Category::create([
                'name' => $name[$i],
                'name_ar' => $name_ar[$i]
            ]);
        }
    }
}
