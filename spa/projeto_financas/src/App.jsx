import { Outlet  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react';
import './index.css'
import './App.css'
import Footer from './Components/Footer';

import { getLocalStorageLanguage, setLocalStorage } from '../helpers/helpers';

function App() {
  const [language, setLanguage] = useState(getLocalStorageLanguage);

  const changeLanguage = (text) => {
    setLanguage(PrevLanguage => text)
    setLocalStorage('language', text)
    window.location.reload();
  }

  return (
      <div className='app'>
        <Navbar language={language} setLanguage={changeLanguage}/>
        <div className='outlet_container'>
          <Outlet />
        </div>
        <Footer />
      </div>
  )
}

export default App
