<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\{
    CategoryController,
    PaymentController,
    ProductController
};
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'payment'], function() {

    Route::post('/', [PaymentController::class, 'makePayment']);
    
});

Route::apiResource('categories', CategoryController::class);
Route::apiResource('products', ProductController::class);
