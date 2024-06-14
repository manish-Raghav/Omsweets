import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
  
import Home from './Pages/Home'
import Sweet from './Pages/Sweet'
import Bakerie from './Pages/Bakerie'
import Food from './Pages/Food'
import Chocolate from './Pages/Chocolate'
import Upload from './Pages/Upload'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Pages/Cart'

import { useDispatch, useSelector } from 'react-redux';
import { setDataProduct } from './reduxstore/productslice';
import Header from './Components/Header/Header';
import Login from './Pages/Login';
import Authe from './Pages/Authe';

import CardData from './Components/CardData';


// import Login from './Pages/Login'



 


function App() {


  const usedisp = useDispatch()
  // http://localhost:4000/all
  
  useEffect(()=>{
    axios.get('https://manish-omsweet-database.onrender.com/all')
    .then(res =>{
       usedisp(setDataProduct(res.data));
        // console.log(res.data);
      // setarr(res.data);

    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  

  return (
    <div >
      
     <Header />
     <div >
    <Routes>
      <Route path="/" element ={ <Home/> } />
      <Route path="/Sweet" element={<Sweet />} />
      <Route path="/Chocolate" element={<Chocolate />} />
      <Route path="/Bakerie" element={<Bakerie/>} />  
      <Route path="/Food" element={<Food/>} />
      <Route path="/Upload" element={<Upload/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/card" element={<CardData />} />
     
    </Routes> 
    
    </div>
     
    </div>
  )
}

export default App
