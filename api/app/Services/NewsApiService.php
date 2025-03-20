<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class NewsApiService
{

    private $apiKey;

    public function __construct()
    {
        $this->apiKey = env('API_KEY_NEWS_API');
    }


    public function getStartNews($language = 'pt', $page = 1, $filtros)
    {
        $start_news = $this->cacheStartNews();
        $filtered_news = $this->applyFilters($start_news, $filtros);

        $count = count($filtered_news['pack_news']);
        $nextPage = $count - ($page * 18 + 18);

        $offset = ($page * 18);

        $return_news = array_slice($filtered_news['pack_news'], $offset, 18);

        return [
            'pack_news' => $return_news,
            'next_page' => $nextPage > 0 ? true : false
        ];
    }

    public function cacheStartNews()
    {
        $physical_news = Cache::remember('start_news_physical', now()->addDay(4), function () {
            $start_date = now()->subDay(7)->format('Y-m-d');
            $end_date = now()->format('Y-m-d');

            $total_news = array();

            for ($i = 1; $i <= 3; $i++) {
                $request = Http::get("https://newsapi.org/v2/everything?q=finance&from=$start_date&to=$end_date&sortBy=popularity&apiKey=$this->apiKey&page=$i");

                $response = $request->json();

                if($response['status'] == 'ok'){
                    $total_news = array_merge($response['articles'], $total_news);
                }
            }

            return $total_news;
        });

        $digital_news = Cache::remember('start_news_digital', now()->addDay(4), function () {
            $start_date = now()->subDay(7)->format('Y-m-d');
            $end_date = now()->format('Y-m-d');

            $total_news = array();

            for ($i = 0; $i <= 3; $i++) {
                $request = Http::get("https://newsapi.org/v2/everything?q=crypto&from=$start_date&to=$end_date&sortBy=popularity&apiKey=$this->apiKey&page=$i");

                $response = $request->json();

                if($response['status'] == 'ok'){
                   $total_news = array_merge($response['articles'], $total_news);
                }
            }
   
            return $total_news;
     
        });


        return [
            'pack_news' => array_merge($physical_news, $digital_news)
        ];
    }

    public function applyFilters($news, array $filtros) : array
    {

        $news = array_filter($news['pack_news'], function($news_filtered) use($filtros){

            if(isset($filtros['search']) && !empty($filtros['search'])){
                $search = $filtros['search'];
                $function = fn($texto) => str_contains(strtolower(trim($texto)), strtolower(trim($search)));

                if(
                    !$function($news_filtered['title']) &&
                    !$function($news_filtered['description'])
                ){
                    return false;
                }
            }

            return true;

        });


        return [
            'pack_news' => $news
        ];
    }
}