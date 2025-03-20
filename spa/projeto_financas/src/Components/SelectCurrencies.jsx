import { useState, useEffect } from 'react'
import Select from 'react-select'
import { setLocalStorage, getLocalStorage } from '../../helpers/helpers'

const SelectCurrencies = ({ id, valueSelected, changeCurrency }) => {
    const [physicalCurrency, setPhysicalCurrency] = useState([]);
    const [digitalCurrency, setDigitalCurrency] = useState([]);

    const getCurricies = async () => {

        const digital_currency  = getLocalStorage('digital_currency');
        const physical_currency = getLocalStorage('physical_currency');

        if(digital_currency.length == 0 || physical_currency.length == 0
            
        ){
            const currencies = await requestGetCurrencies();

            if(currencies){
                setPhysicalCurrency(currencies.physical_currency);
                setDigitalCurrency(currencies.digital_currency);

                setLocalStorage('digital_currency', currencies.digital_currency);
                setLocalStorage('physical_currency', currencies.physical_currency);
            }
            
        
        }else {
            setPhysicalCurrency(physical_currency);
            setDigitalCurrency(digital_currency);
        }
   
    }


    const requestGetCurrencies = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/v1/get_currencies', {
            method: 'GET'
        });

        if(!response.ok){
            console.error('Erro ao buscar currencies');
            return;
        }

        const result = await response.json();
        return result;
    }

    const groupedOPtions = [
        {
            label: 'Moedas Físicas',
            options: physicalCurrency.length > 0 && physicalCurrency.map((currency) => ({
                value: currency.currency_code,
                code:  `${currency.currency_code}`,
                label: `${currency.currency_name}`,
                icon:  currency.url_image ? `${currency.url_image}` : ''
            }))
        },
        {
            label: 'Moedas Digitais',
            options: digitalCurrency.length > 0 && digitalCurrency.map((currency) => ({
                value: currency.currency_code,
                code:  `${currency.currency_code}`,
                label: `${currency.currency_name}`,
                icon:  currency.url_image ? `${currency.url_image}` : ''
            }))
        }
    ];

    const onChangeCurrency = (selectedOption) => {
        changeCurrency(selectedOption)
    }


    // Componentes de estilização das Options //
    const CustomOption = (props) => {
        const { data, innerRef, innerProps } = props

        return (
            <div ref={innerRef} {...innerProps} style={{ cursor: 'pointer' }} className='custom-option gap-1 p-2'>
                <span style={{ fontSize: 18 }}>
                {data.label && data.icon && (
                    <img src={data.icon} onError={(e) => e.target.src = ''} alt={data.label} style={{ width: 20, height: 20, marginRight: 10 }} />
                )}
                {data.code}</span><br />
                <span className='text-secondary'>{data.label}</span>
            </div>
        )
    }
    
    
    useEffect(() => {
        getCurricies();

    },[])


    return (
        <Select
            id={id} options={groupedOPtions} 
            value={valueSelected}
            onChange={(selectedOption) => onChangeCurrency(selectedOption)}
            components={{ Option: CustomOption }}
        />
    );

}

export default SelectCurrencies;

