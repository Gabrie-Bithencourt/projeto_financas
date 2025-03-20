<?php

namespace App\Http\Controllers;

use App\Services\ExchangeRateService;
use Illuminate\Http\Request;

class ExchangeRateController extends Controller
{
    private $exchangeRateService;

    public function __construct(ExchangeRateService $exchange_rate_service)
    {
        $this->exchangeRateService = $exchange_rate_service;
    }

    public function __invoke(Request $request)
    {

        try {

            $currency     = strtoupper($request->input('currency'));
            $for_currency = strtoupper($request->input('for_currency'));
            $value        = trim($request->input('value')); 
     
            $response = $this->exchangeRateService->exchange_rate($currency, $for_currency, $value);

            return $response;

        } catch (\Exception $e) {
            return [
                'error' => true,
                'message' => $e->getMessage()
            ];
        }

    }
}
