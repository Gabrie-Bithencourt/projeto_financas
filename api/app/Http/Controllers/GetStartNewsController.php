<?php

namespace App\Http\Controllers;

use App\Services\NewsApiService;
use Exception;
use Illuminate\Http\Request;

class GetStartNewsController extends Controller
{
    
    private $newsApiService;

    public function __construct(NewsApiService $news_api_service)
    {
        $this->newsApiService = $news_api_service;
    }


    public function __invoke(Request $request)
    // Request virá com os filtros | isso vai ficar pra ser feito mais para frente //
    {
        
        try {

            $page   = $request->input('page') ?? 0;

            // Implementação de filtros | Criar um form request para isso ||
            // $request = validacao
            $news = $this->newsApiService->getStartNews('pt', $page, $request->all());

            return response()->json([
                'start_news' => $news
            ]);


        } catch (\Exception $e) {
            return response()->json([
                'error'   => true,
                'message' => $e->getMessage() 
            ]);
        }

    }


}
