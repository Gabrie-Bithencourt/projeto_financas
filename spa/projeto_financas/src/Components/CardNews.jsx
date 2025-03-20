import styles from './CardNews.module.css'
import { Link } from 'react-router-dom'

import { getTranslation } from '../../helpers/helpers'

const CardNews = ({ news }) => {
    return (
        <div id={styles.containerCardNews} className='p-2 rounded' style={{
            backgroundImage: `linear-gradient(rgba(25, 26, 25, 0.79), rgba(25, 26, 25, 0.79)), url(${news.urlToImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <h4 className='text-light fw-bold'>{news.title}</h4>
            <div className="d-flex flex-column gap-4">
                <span className='text-light'>{news.description !== 'Comments' && news.description  !== null ? news.description.substr(0, 130) + '...' : ''}</span>
                <Link to={news.url} target='_blank' className='btn btn-success'>
                    { getTranslation('news_button_access_material') }
                </Link>
            </div>
        </div>
    )
}

export default CardNews;