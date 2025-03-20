<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DigitalCurrency extends Model
{
    protected $table = 'digital_currency';

    protected $fillable = [
        'currency_code',
        'currency_name',
        'url_image'
    ];
}
