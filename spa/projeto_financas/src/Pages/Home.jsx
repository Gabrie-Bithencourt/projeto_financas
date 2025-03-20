import styles from './Home.module.css'
import SelectCurrencies from '../Components/SelectCurrencies'
import { FaArrowRightArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from 'react';
import { useState } from 'react';

import { getExchangeRate } from '../../helpers/helpers';
import { getTranslation } from '../../helpers/helpers';


const Home = () => {

    const [select1, setSelect1] = useState({ value: 'USD', label: 'Unite State America', icon: 'https://flagsapi.com/US/flat/64.png', code: 'USD'})
    const [select2, setSelect2] = useState({ value: 'BTC', label: 'Bitcoin', icon: 'https://www.cryptocompare.com/media/37746251/btc.png', code: 'BTC'})

    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()


    const reverse = () => {
        const value1 = select1;
        const value2 = select2

        setSelect1(value2);
        setSelect2(value1);
    }

    const handleChangeValue1 = async (event) => {
        if (/[a-zA-Z]/.test(event.target.value)) {
            return;
        }

        const newValue = formatCurrency(event.target.value); 
        setValue1(newValue)

        if(event.target.value == ''){
            setValue2('');
        
        }else {
            const result = await getExchangeRate(select1.code, select2.code, newValue)
            setValue2(result);
        }
    }

    const handleChangeValue2 = async (event) => {
        if (/[a-zA-Z]/.test(event.target.value)) {
            return;
        }

        const newValue = formatCurrency(event.target.value); 
        setValue2(newValue)
        
        if(event.target.value == ''){
            setValue1('')
        
        }else {
            const result = await getExchangeRate(select2.code, select1.code, newValue)
            setValue1(result);
        }
    }


    const formatCurrency = (value) => {
        if(!value) return '';

        console.error = () => {}

        const number = parseFloat(value.replace(/\D/g, "")) / 100;

        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true,
          }).format(number);
    }

    useEffect(() => {
        
    }, [])


    return (
        <div id={styles.container_home}>
            <div className='text-secondary'>
                { getTranslation('home_first_intro') }
            </div>
            <div className='mt-3'>
                <h2 className="text-secondary">{ getTranslation('home_second_intro') }</h2>
                <span className="text-secondary">{ getTranslation('home_third_intro') }</span>
            </div>
            <div className='p-2 mt-5 d-flex flex-column justify-content-between rounded'>
                <div className=' d-flex align-items-center gap-5'>
                    <h2 className='flex-wrap text-secondary'>
                        <span className='rounded-circle'>
                            <img style={{ width: 40, height: 40, marginRight: 10 }} src={select1.icon} />
                        </span>
                        {select1.code} - { select1.label }
                    </h2>
                    <h2 className='fs-4 text-secondary'><FaArrowRightLong/></h2>
                    <h2 className='flex-wrap text-secondary'>
                        {select2.icon != '' && (
                            <span className='rounded-circle'>
                                    <img style={{ width: 40, height: 40, marginRight: 10 }} src={select2.icon} />
                            </span>
                        )}
                        {select2.code} - { select2.label }
                    </h2>
                </div>
                <div className='col-md-12 d-flex justify-content-between align-items-center mt-5'>
                    <div className='col-md-5 d-flex gap-2'>
                        <div className='col-md-7'>
                            <SelectCurrencies id="select-1" valueSelected={select1} changeCurrency={setSelect1}/>
                        </div>
                        <div className='col-md-5'>
                            <input className='form-control text-center text-secondary fw-bold' type="text" value={value1} onChange={handleChangeValue1}/>
                        </div>
                    </div>
                    <div className='text-center col-md-2'>
                        <span className='btn btn-light' onClick={reverse}><FaArrowRightArrowLeft /></span>
                    </div>
                    <div className='col-md-5 d-flex gap-2'>
                        <div className='col-md-5'>
                        <input className='form-control text-center text-secondary fw-bold' type="text" value={value2} onChange={handleChangeValue2}/>
                        </div>
                        <div className='col-md-7'>
                            <SelectCurrencies id="select-1" valueSelected={select2} changeCurrency={setSelect2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home