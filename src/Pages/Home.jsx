import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

import gv from '../assets/gv2.jpeg'
import Sweet from './Sweet';
import Mycard from '../Components/Mycard';
 import { GrPrevious,GrNext } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProduct } from '../reduxstore/productslice';
import Footer from '../Components/Footer';



  




const Home = () => {
    const [arr ,setarr] = useState([]);
    const [sw ,setsw] = useState([]);

     const usedisp = useDispatch()

    
    useEffect(()=>{
      axios.get('http://localhost:4000/all')
      .then(res =>{
         usedisp(setDataProduct(res.data));
         
        // setarr(res.data);

      })
      .catch(err=>{
        console.log(err);
      })
    },[])
       
         
    const setm = useSelector((stm) =>stm.productcart.productList);

    useEffect(() =>{
      setsw( setm.filter((item) => item.product_name ==="sweet" ))
    },[])
   
     //console.log(setm , "hey i am here look my side ---->");  
      
     
    
    // useEffect(()=>{
    //   axios.get('http://localhost:4000/Sweet')
    //   .then(res =>{
    //     setsw(res.data);
    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
    // },[])
    const slideproduct = useRef()

    const nextd = ()=>{
      slideproduct.current.scrollLeft +=200
    }
    const privious = ()=>{
      slideproduct.current.scrollLeft -=200
    }
    

  return (
    <div className='flex flex-col  '> 
     
     <div>
        <img className=' h-60 w-screen bg-cover' src="" />
     </div>
    <div className='flex flex-col justify-center mt-11  '>

    <div className='flex flex-row justify-between' >
      <div className=' flex  mx-5'>
       <h1 className='text-3xl font-medium text-slate-800 ' >ALL PRODUCTS </h1>
     </div>
     
     </div>
    
     <div className=' flex flex-row mt-3 gap-3 overflow-scroll overflow-y-hidden scrollbar-none scroll-smooth transition-all border-b-2 border-red-500 border-solid' 
            ref={slideproduct}>
    
     <div className=' w-full  mt-28 absolute z-20 flex justify-between'>
     <div className=' '>
     <button className='text-3xl font-bold' onClick={privious} ><GrPrevious/></button>
     </div>

     <div className= ''>
     <button className='text-3xl font-bold ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     {
      setm.map((el, index) => {
                return (
                  <Mycard
                 
                    id={el._id}
                    name={el.Name}
                    catego={el.product_name}
                    price={el.prise}
                    image={el.img1}
                    quant ={el.quantity}
                  />
                );
              })
     }
    
     </div>
       
     
     <div className='flex  flex-row justify-between mt-6' >
      <div className=' flex  mx-5'>
       <h1 className='text-3xl font-medium text-slate-800 ' >SWEETS</h1>
     </div>
    
     </div>
    

      <div className='flex flex-row mt-3 gap-3 overflow-scroll overflow-y-hidden scrollbar-none scroll-smooth transition-all border-b-2 border-red-500 border-solid'  ref={slideproduct}>
      
      <div className=' w-full  mt-28 absolute z-20 flex justify-between'>
     <div className=' '>
     <button className='text-3xl font-bold' onClick={privious} ><GrPrevious/></button>
     </div>

     

     <div className= ''>
     <button className='text-3xl font-bold ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     {
     sw.map((el, index) => {
                return (
                  <Mycard
                 
                    id={el._id}
                    name={el.Name}
                    catego={el.product_name}
                    price={el.prise}
                    image={el.img1}
                    quant ={el.quantity}
                  />
                );
              })
     }
     </div>



     <div className='flex  flex-row justify-between mt-6' >
      <div className=' flex  mx-5'>
       <h1 className='text-3xl font-medium text-slate-800 ' >Bakries</h1>
     </div>
    
     </div>
    

      <div className='flex flex-row mt-3 gap-3 overflow-scroll overflow-y-hidden scrollbar-none scroll-smooth transition-all border-b-2 border-red-500 border-solid'  ref={slideproduct}>
      
      <div className=' w-full  mt-28 absolute z-20 flex justify-between'>
     <div className=' '>
     <button className='text-3xl font-bold' onClick={privious} ><GrPrevious/></button>
     </div>

     

     <div className= ''>
     <button className='text-3xl font-bold ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     {
     sw.map((el, index) => {
                return (
                  <Mycard
                 
                    id={el._id}
                    name={el.Name}
                    catego={el.product_name}
                    price={el.prise}
                    image={el.img1}
                    quant ={el.quantity}
                  />
                );
              })
     }
     </div>

    </div>
    <div className='mt-20'>
    <Footer />
    </div>
      
    </div>
  )
}

export default Home



