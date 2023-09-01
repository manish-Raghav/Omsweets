import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gv from '../assets/gv2.jpeg'
import Sweet from './Sweet';
import Mycard from '../Components/Mycard';




const Home = () => {
    const [arr ,setarr] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:4000/all')
      .then(res =>{
       // console.log(res.data);
        setarr(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    },[])

  return (
    <div className='flex flex-col  '> 
     
     <div>
        <img className='h-screen w-screen bg-cover' src={gv} />
     </div>
    <div className='flex flex-col justify-center mt-11  '>
      <div className=' flex  mx-5'>
       <h1 className='text-3xl font-medium text-slate-800 ' >All Products </h1>
     </div>
    
     <div className='flex flex-row '>
     {/* {
   arr.length !=0 ? {cards} ( arr.map((val)=>{ }    
  return(
    
    
    <div className='bg-white w-48 h-60 ml-10 mt-9 '>
    <div>
      <img src={`http://localhost:4000/${val?.img1}`} />
    </div>
    
    
    
    <div className='flex'>
  
    <h4>
      {val.Name}
    </h4>
    <h4>
      {val.quantity}
    </h4>
       
    <h4>
      {val.prise}
    </h4>



    </div>
    <div className='mt-3 ml-1 w-24'>
      <button className='bg-red-700 text-sm text-white rounded-lg p-1'>+ Add To Cart</button>
    </div>
      
    </div>
    

  ) 
{ })):  <div className=' w-full h-60 ml-10 mt-44  '><h1 className='text-2xl text-red-700 '> Please Connect YourSelf to Server </h1> </div> 




     }  */}
      <Mycard mani={arr} />
     </div>
       
     <div className=' flex mt-14 justify-center'>
       <h1 className='text-3xl font-medium' >Sweets </h1>
     </div>
     <div>
       < Sweet />
     </div>
    </div>
    </div>
  )
}

export default Home



//  {arr.map((val)=>{
//   return(
//     <div>
//     <h4>
//       {val.product_name}
//     </h4>
//     <h4>
//       {val.Name}
//     </h4>
//     <h4>
//       {val.quantity}
//     </h4>
       
//     <h4>
//       {val.prise}
//     </h4>

//     </div>

//   )
// })}