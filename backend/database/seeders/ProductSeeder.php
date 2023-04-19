<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::all();
        $categories->each(function($category){
            \App\Models\Product::factory()->count(4)->create([
                'category_id' => $category->id
            ]);
        });
    }
}
