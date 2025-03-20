// Arrays Traduções //
import { EnglishTranslation } from './Translation/en';
import { SpanishTranslation } from './Translation/es';
import { PortugueseTranslation } from './Translation/pt';

// Funções de helper //
import Cookies from 'js-cookie'

export const setCookie = (name, value, days) => {
    Cookies.set(`${name}`, JSON.stringify(value), { expires: (days || 7) })
};

export const getCookie = (name) => {
    return JSON.parse(Cookies.get(name) || '[]');
};

//localStorage
export const setLocalStorage = (name, value) => {
    localStorage.setItem(`${name}`, JSON.stringify(value));
};

export const getLocalStorage = (name) => {
    const item = localStorage.getItem(`${name}`);
    return typeof item != "undefined" && item !== 'undefined' && item != null? JSON.parse(item) : []
};

export const getLocalStorageLanguage = () => {
    const storage = getLocalStorage('language') ?? [];
    if(storage.length == 0){
        setLocalStorage('language', 'en');
    }

    return getLocalStorage('language');
}

export const getExchangeRate =  async (currency, for_currency, value) => {
    const api_url = import.meta.env.VITE_API_URL;

    const request = await fetch(api_url + `exchange_rate?currency=${currency}&for_currency=${for_currency}&value=${value}`, {
        method: 'GET'
    });

    const result = await request.json();
    return result.exchange ?? '';
};

export const getTranslation = (text) => {
    const language = getLocalStorage('language');

    switch (language) {
        case 'en':  return EnglishTranslation(text); 
        case 'pt':  return PortugueseTranslation(text); 
        case 'es':  return SpanishTranslation(text); 
        default:    return EnglishTranslation(text); 
    }
}

export const getLanguageDefault = () => {
    const language = getLocalStorage('language');

    switch (language) {
        case 'en':  return { value: 'en', label: `English`, icon:  'https://flagsapi.com/US/flat/64.png' };
        case 'pt':  return { value: 'pt', label: `Português`, icon:  'https://flagsapi.com/BR/flat/64.png' }; 
        case 'es':  return { value: 'es', label: `Español`, icon:  'https://flagsapi.com/ES/flat/64.png' };
        default:    return { value: 'en', label: `English`, icon:  'https://flagsapi.com/US/flat/64.png' };; 
    }
}

