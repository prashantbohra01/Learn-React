import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import{ BrowserRouter, Route, Routes } from 'react-router-dom'

export default function () {
  return (

    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<div>Login</div>}></Route>
        </Routes>
    </BrowserRouter>
 
  )
}
