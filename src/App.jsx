import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Sweet from './Pages/Sweet'
import Bakerie from './Pages/Bakerie'
import Food from './Pages/Food'
import Chocolate from './Pages/Chocolate'
import Upload from './Pages/Upload'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Pages/Cart'


 


function App() {
  

  return (
    <div>
      
     <Header />
     <div className=''>
    <Routes>
      <Route path="/" element ={ <Home/> } />
      <Route path="/Sweet" element={<Sweet />} />
      <Route path="/Chocolate" element={<Chocolate/>} />
      <Route path="/Bakerie" element={<Bakerie/>} />
      <Route path="/Food" element={<Food/>} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/Cart" element={<Cart/>} />
    </Routes>
    </div>
    </div>
  )
}

export default App
