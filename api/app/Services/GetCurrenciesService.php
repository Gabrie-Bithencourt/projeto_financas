<?php

namespace App\Services;

use App\Repository\DigitalCurrencyRepository;
use App\Repository\PhysicalCurrencyRepository;

class GetCurrenciesService
{

    protected $physical_currency_repository;
    protected $digital_currency_repository;


    public function __construct(PhysicalCurrencyRepository $physical_currency_repository, DigitalCurrencyRepository $digital_currency_repository)
    {
        $this->physical_currency_repository = $physical_currency_repository;
        $this->digital_currency_repository  = $digital_currency_repository;
    }

    
    public function getCurrencies()
    {

        return [
            'physical' => $this->physical_currency_repository->getAllCurrency(),
            'digital'  => $this->digital_currency_repository->getAllCurrency()
        ];

    }

}