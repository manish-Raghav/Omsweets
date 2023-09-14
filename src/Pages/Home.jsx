import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gv from '../assets/gv2.jpeg'
import Sweet from './Sweet';
import Mycard from '../Components/Mycard';
 import { GrPrevious,GrNext } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProduct } from '../reduxstore/productslice';

  




const Home = () => {
    const [arr ,setarr] = useState([]);
    const [sw ,setsw] = useState([]);

     const usedisp = useDispatch()
    useEffect(()=>{
      axios.get('http://localhost:4000/all')
      .then(res =>{
       // console.log(res.data);
       // console.log("manish tahaku r from mathura",res.data);
         usedisp(setDataProduct(res.data));

        setarr(res.data);

      })
      .catch(err=>{
        console.log(err);
      })
    },[])
    const setm = useSelector((stm) =>stm.productcart.productList);
    
    console.log("manish tahaku r from mathura", setm);

    useEffect(()=>{
      axios.get('http://localhost:4000/Sweet')
      .then(res =>{
        setsw(res.data);
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

    <div className='flex flex-row justify-between' >
      <div className=' flex  mx-5'>
       <h1 className='text-3xl font-medium text-slate-800 ' >ALL PRODUCTS </h1>
     </div>
     {/* <div className='w-32 lg:absolute  flex gap-3'>
     <div className='bottom-8'>
     <button className='text-xl bg-red-400'  ><GrPrevious/></button>
     </div>
          
          <button  className='text-xl bg-red-400' ><GrNext /></button>
          </div> */}
     </div>
    
     <div className='flex flex-row  border-b-2 border-red-500 border-solid'>
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
     <div className=' w-full  mt-28 absolute z-20 flex justify-between'>
     <div className=' '>
     <button className='text-3xl font-bold'  ><GrPrevious/></button>
     </div>

     

     <div className= ''>
     <button className='text-3xl font-bold '  ><GrNext /></button>
     </div>
     </div>
      <Mycard mani={arr} />
     </div>
       
     {/* <div className=' flex mt-14 justify-center'>
       <h1 className='text-3xl font-medium text-slate-800' >Sweets </h1>
     </div> */}
     
     <div className='flex  flex-row justify-between mt-6' >
      <div className=' flex  mx-5'>
       <h1 className='text-3xl font-medium text-slate-800 ' >SWEETS</h1>
     </div>
     <div className='w-32 flex gap-3'>
     <button className='text-xl bg-red-400'  ><GrPrevious/></button>
          {/* <button  className='text-xl bg-red-400' ><GrNext /></button> */}
          </div>
     </div>
    

     <div className='border-b-2 border-red-500 border-solid'>
     <Mycard mani={sw} />
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