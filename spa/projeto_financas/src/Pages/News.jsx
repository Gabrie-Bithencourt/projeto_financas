
import styles from './News.module.css'
import CardNews from '../Components/CardNews';
import { useEffect, useState } from 'react';
import ManagerPage from '../Components/ManagerPage';

import { getTranslation } from '../../helpers/helpers';

const News = () => {

    const [newsList, setNewsList] = useState({});
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [nextPage, setNextPage] = useState(true)

    const getNewsList = async () => {
        const url_api = import.meta.env.VITE_API_URL;

        const request = await fetch(`${url_api}get_start_news`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: page,
                search: search
            })
        });

        const result = await request.json();

        if(result){
            setNewsList(result.start_news.pack_news);
            setNextPage(result.start_news.next_page);
        }
    }

    const searchFilter = () => {
        setPage(PrevPage => 0);
        getNewsList();
    }

    const next_page = () => {
       setPage(prevPage => prevPage + 1)
    }

    const previous_page = () => {
        setPage(prevPage => prevPage - 1)
    }

    useEffect(() => {
        getNewsList()
    }, [page])

    return (
        <div id={styles.container_news}>
            <div>
                <span className="text-secondary">{ getTranslation('news_first_intro') }</span>
            </div>
            <div className="mt-3">
                <h5 className="text-secondary">{ getTranslation('news_second_intro') }</h5>
            </div>
            <div className="mt-5 d-flex justify-content-center gap-3">
                <div className='col-md-7'>
                    <input
                        className="form-control"
                        placeholder={ getTranslation('news_input_search_text') }
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <button onClick={() => searchFilter()} className='btn btn-info col-md-2'>{ getTranslation('news_button_search_text') }</button>
            </div>
            {newsList.length > 0 && (
                <>
                    <ManagerPage page={page} nextPage={nextPage} next_page={next_page} previous_page={previous_page}/>
                    <div className='mt-4 mb-5 col-md-12 d-flex justify-content-center flex-wrap gap-3'>
                            {newsList && newsList.length > 0 && newsList.map((news, index) => (
                                <div className='bg-secondary rounded' key={index}>
                                    <CardNews news={news}/>
                                </div>
                            )) }
                    </div>
                    <ManagerPage page={page} nextPage={nextPage} next_page={next_page} previous_page={previous_page}/>
                </>
            )}
  
            {newsList.length == 0 && (
                <div className='text-center mt-5'>
                    <h5 class="text-secondary">Nenhum resultado encontrado</h5>
                </div>
            )}
            
        </div>
    )
}

export default News;