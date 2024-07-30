import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Booking from './router/Booking.jsx'
import Home from './router/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Booking />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
