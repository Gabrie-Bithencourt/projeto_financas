<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class CurrencyFreaksService
{

    private $apiKey;

    public function __construct()
    {
        $this->apiKey = env('API_KEY_CURRENCY_FREAKS');
    }

    public function exchange_rate($currency, $for_currency, $value)
    {
        $rates = $this->getRates();

        $value = str_replace(',', '', $value);
        
        $return_value = strtolower($currency) == 'usd' ? $rates[$for_currency] * $value:  $value / $rates[$currency];

        return [
            'exchange' => $currency !== 'BTC' && $for_currency !== 'BTC' ? number_format($return_value, 2) : $return_value
        ];
    }

    public function getRates($currency = 'usd')
    {
        return Cache::remember("rates_$currency", now()->addDay(1), function () use($currency) {

            $request = Http::get("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=$this->apiKey");
    
            $response = $request->json();
    
            return $response['rates'];
        });
    }
}
