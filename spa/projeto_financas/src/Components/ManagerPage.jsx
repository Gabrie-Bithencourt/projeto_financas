import { getTranslation } from "../../helpers/helpers";

const ManagerPage = ({page, nextPage, next_page, previous_page}) => {
    return (
        <div className='col-md-12 d-flex justify-content-center align-items gap-3 mt-5 mb-5'>
            <span className={`btn btn-light border  ${page == 0 ? 'disabled' : ''}`} onClick={(e) => previous_page()}>{ getTranslation('news_previous_page') }</span>
            <span className={`btn btn-light border  ${nextPage ? '' : 'disabled'}`}  onClick={(e) => next_page()}>{ getTranslation('news_next_page') }</span>
        </div>
    )
}

export default ManagerPage;