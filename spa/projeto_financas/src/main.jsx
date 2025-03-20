import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import News from './Pages/News.jsx'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Home />}/>
            <Route path='/news' element={<News />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
