/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import About from './pages/about'
import Faq from './pages/faq'
import Contact from './pages/contact'
import Login from './pages/login'
import Signup from './pages/signup'
import Forgotpasword from './pages/forgotpasword'

import Blog from './pages/blog'
import BusList from './pages/buslist'
import Passenger from './pages/passenger'
import Showticket from './components/showticket'
import CancelTicketComponent from './components/canceltick'
import Payment from './pages/payment'
import './App.css'


import { ToastContainer } from "react-toastify";

// import ShopContext from './components/shopcontext'
// import Details from './pages/details'

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <>
    {/* <ShopContext> */}
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='faq' element={<Faq />} />
        <Route path='blog' element={<Blog />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgotpasword' element={<Forgotpasword />} />
        <Route path="/buses" element={<BusList />} />
       <Route path='passenger' element={<Passenger/>} /> 
       <Route path='showticket' element={<Showticket/>}/>
       <Route path='canceltick' element={<CancelTicketComponent/>}/>
       <Route path='payment'    element={<Payment/>}/>
        {/* <Route path='AllRoutes' element={<AllRoutes/>}  />
      <ToastContainer autoClose={3000} />  */}
    
        {/* <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='details' element={<Details />} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
    {/* </ShopContext> */}
    </>
  )
}

export default App
