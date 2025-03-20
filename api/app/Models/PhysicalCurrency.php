<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhysicalCurrency extends Model
{
    protected $table = 'physical_currency';

    protected $fillable = [
        'currency_code',
        'currency_name',
        'url_image',
        'country_code'
    ];
}
