import { useEffect, useState, useRef } from 'react';
import styles from './Navbar.module.css'
import logo from '../../public/imagens/logo.png'
import { Link } from 'react-router-dom'
import { getTranslation, getLanguageDefault } from '../../helpers/helpers';
import { MdFeedback } from "react-icons/md";
import Select from 'react-select';
import FeedbackModal from './FeedbackModal';


const Navbar = ({ language, setLanguage }) => {
    const [valueSelected, setValueSelected] = useState(getLanguageDefault);
    const [feedbackModal, setFeedbackModal] = useState(true);

    const openModalFeedback = () => {
        
    }

    const groupedOPtions = [
        {
            value: 'en',
            label: `English`,
            icon:  'https://flagsapi.com/US/flat/64.png'
        },
        {
            value: 'pt',
            label: `Português`,
            icon:  'https://flagsapi.com/BR/flat/64.png'
        },
        {
            value: 'es',
            label: `Español`,
            icon:  'https://flagsapi.com/ES/flat/64.png'
        },
    ];

    const CustomOption = (props) => {
        const { data, innerRef, innerProps } = props

        return (
            <div ref={innerRef} {...innerProps} style={{ cursor: 'pointer' }} className='custom-option gap-1 p-2'>
                <span style={{ fontSize: 18 }} className='d-flex gap-2 text-secondary'>
                    <img className='text-center' src={data.icon} onError={(e) => e.target.src = ''} alt={data.label} style={{ width: 30, height: 30}} />
                    { data.label }
                </span>
            </div>
        )
    }


    return (
        <div id={styles.container_navbar} className='mb-5'>

            <FeedbackModal />

            <nav id={styles.navbar} className="container d-flex justify-content-between align-items-center">
                <div className="col-md-3">
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="col-md-9 d-flex justify-content-end align-items-center gap-4">
                    <ul className="col-md-4 d-flex align-self-stretch align-items-center justify-content-end gap-3 m-0 p-0">
                        <li><Link to="/" className='text-secondary'>{ getTranslation('navbar_conversor') }</Link></li>
                        <li><Link to="/news" className='text-secondary'>{ getTranslation('navbar_news') }</Link></li>
                    </ul>
                    <div className="d-flex gap-3 col-md-2">
                        <Select
                            options={groupedOPtions}
                            className='col-md-12'
                            value={valueSelected}
                            isSearchable={false}
                            onChange={(e) => {setLanguage(e.value), setValueSelected(PrevSelecValue => e) }}
                            components={{ Option: CustomOption}}
                        />
                        {/*
                            <button className={`${styles.auth_options} btn btn-light`}>{ getTranslation('navbar_login') }</button>
                            <button className={`${styles.auth_options} btn btn-light`}>{ getTranslation('navbar_register') }</button>
                        */}
                    </div>
                    <div className="text-center btn">
                        <MdFeedback className='text-primary' 
                            data-bs-toggle='modal' 
                            data-bs-target='#exampleModal' 
                            title='Feedback' 
                            size={30}
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;