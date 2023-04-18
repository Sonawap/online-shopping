<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get();
        return response()->json($products);
    }

    public function show($id)
    {
        $product = Product::with('category')->find($id);
        if (!$product) {
            return response()->json(['error' => 'product not found'], 404);
        }
        return response()->json($product);
    }

    public function store(ProductRequest $request)
    {
        $category = Category::where('id', $request->category_id)->first();
        if(!$category){
            return response()->json(['error' => 'Category not found'], 404);
        }

        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->category_id = $category->id;
        $product->price = $request->price;

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->storeAs('public/products', $filename);
            $product->avatar = $filename;
        }

        $product->save();

        return response()->json([
            'success' => true,
            'message' => 'product created successfully.',
            'product' => $product
        ], 201);
    }

    public function update(ProductRequest $request, $id)
    {
        $category = Category::where('id', $request->category_id)->first();
        if(!$category){
            return response()->json(['error' => 'Category not found'], 404);
        }


        $product = Product::findOrFail($id);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->category_id = $category->id;
        $product->price = $request->price;

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->storeAs('public/products', $filename);
            $product->avatar = $filename;
        }


        $product->save();

        return response()->json([
            'success' => true,
            'message' => 'product updated successfully.',
            'product' => $product
        ], 200);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['error' => 'product not found'], 404);
        }

        $product->delete();

        return response()->json(['message' => 'product deleted']);
    }
}
