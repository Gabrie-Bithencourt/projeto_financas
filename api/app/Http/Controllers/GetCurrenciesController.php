<?php

namespace App\Http\Controllers;

use App\Services\GetCurrenciesService;
use Illuminate\Http\Request;

class GetCurrenciesController extends Controller
{

    protected $get_currencies_service;

    public function __construct(GetCurrenciesService $get_currencies_service)
    {
        $this->get_currencies_service = $get_currencies_service;
    }


    public function __invoke()
    {
        
        try {

            $get_currencies = $this->get_currencies_service->getCurrencies();

            return response()->json([
                'physical_currency' => $get_currencies['physical'],
                'digital_currency'  => $get_currencies['digital']
            ]);


        } catch (\Exception $e){
            return $e->getMessage();
        }

    }
}
