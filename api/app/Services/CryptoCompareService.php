<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CryptoCompareService
{

    public function exchange($currency, $for_currency, $value)
    {
        
        $request = Http::get("https://min-api.cryptocompare.com/data/price?fsym=$currency&tsyms=$for_currency");
        $response = $request->json();

        return [
            'exchange' => $response[$for_currency] * $value
        ];

    }

}