<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function getAvatarAttribute($avatar){
        return $avatar ? asset("/storage/categories/".$avatar) : null;
    }

    public function products(){
        return $this->hasMany(Product::class);
    }
}
