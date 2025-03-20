<?php

namespace App\Repository;

use App\Models\PhysicalCurrency;
use Illuminate\Support\Facades\Cache;

class PhysicalCurrencyRepository
{

    public function getAllCurrency()
    {

        if(!Cache::has('physical_currency')){
            Cache::forever('physical_currency', PhysicalCurrency::select('currency_code', 'currency_name', 'url_image')->get()->toArray()); 
        }

        return Cache::get('physical_currency');
     

    }

}