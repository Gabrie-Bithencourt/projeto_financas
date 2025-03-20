<?php

namespace App\Repository;

use App\Models\DigitalCurrency;
use Illuminate\Support\Facades\Cache;

class DigitalCurrencyRepository
{
    public function getAllCurrency()
    {

        if(!Cache::has('digital_currency')){
            Cache::forever('digital_currency', DigitalCurrency::select('currency_code', 'currency_name', 'url_image')->get()->toArray());
        }

        return Cache::get('digital_currency');

    }
}