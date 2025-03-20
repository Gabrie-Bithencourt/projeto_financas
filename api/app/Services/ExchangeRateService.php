<?php

namespace App\Services;

use App\Models\PhysicalCurrency;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ExchangeRateService 
{

    private $currencyFreaksService;
    private $cryptoCompareService;

    public function __construct(
        CurrencyFreaksService $currency_freaks_service,
        CryptoCompareService $crypto_compare_service
    )
    {
        $this->currencyFreaksService = $currency_freaks_service;
        $this->cryptoCompareService = $crypto_compare_service;
    }

    public function exchange_rate($currency, $for_currency, $value)
    {

        $digital_currencies = array_column((Cache::get('digital_currency')), 'currency_code');
   
        if($currency == 'USD' || $for_currency == 'USD'){
            /* Apenas moedas físicas | No momento apenas dólar ou para o dólar 
            Em breve as principais moedas do mundo [ USD, EUR, YPY, GBP,  CHF, CAD, CNY ] */
            
            return $this->currencyFreaksService->exchange_rate($currency, $for_currency, $value);
        
        }else {
            throw new \Exception('Lamentamos, mas no momento não conseguimos converter está moeda.');
        }


        if(in_array($currency, $digital_currencies) || in_array($for_currency, $digital_currencies)){

            return $this->cryptoCompareService->exchange($currency, $for_currency, $value);

        }else {
            throw new \Exception('Lamentamos, mas no momento não conseguimos converter está moeda.');
        }

    }

}