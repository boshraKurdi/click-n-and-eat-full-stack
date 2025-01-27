<?php

use App\Models\RestaurantCategoryMeal;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained();
            $table->string('type');
            $table->integer('phone');
            $table->string('address');
            $table->integer('bankNumber');
            $table->text('bankPassword');
            $table->string('firstName');
            $table->string('lastName');
            $table->string('priceTotal');
            $table->enum('status', ['ordered', 'delivered', 'canceled'])->default('ordered');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
