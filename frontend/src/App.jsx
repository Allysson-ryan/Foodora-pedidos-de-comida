import React from 'react'
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from './pages/Menu';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Verify from './pages/Verify';

const App = () => {
  return (
    <main className='overflow-hidden text-[#404040] bg-primary'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/verify' element={<Verify/>} />
      </Routes>
    </main>
  )
}

export default App
