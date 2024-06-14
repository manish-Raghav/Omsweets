import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { addCartItem } from '../reduxstore/productslice';

const CardData = () => {
  const [ct ,setct] = useState(1);
  const dt = useSelector((state) => state. productcart.dtList);
 
    const mydisp = useDispatch();

  const myfun =() =>{
  //   mydisp(addCartItem({
  //     _id:id,
  //     name:name,
  //     quant:quant,
  //     price:ps,
  //     catego:cat,
  //     img:img
  // }));
  } 


  const myfunt = ()=>{
      setct(ct+1);
  }
  const myfunb = ()=>{
       if(ct>1)
         {
          setct(ct-1);
         }
  }
  return (
    <div className='relative top-10 h-full'>
    {  dt.map((itm ,key) =>{
      return <>
      <div className=' sm:flex sm:flex-col    md:flex md:absolute  md:top-16 md:left-20 border-[1px] border-orange-700 w-[85vw] h-[60vh] '>
          <div className=' p-3'>
            <img src={`https://manish-omsweet-database.onrender.com/${itm.img1}`} alt={itm.name}  className=' sm:w-36 sm:h-56  md:w-[25vw] md:h-[50vh] ' />
          </div>

 
          <div className=' sm:ml-4 md:ml-0 md:absolute md:left-[25rem] p-3'>
            <div className='text-xl ml-7 font-poppins text-orange-900 font-bold  capitalize'>
              <h2>{itm.Name}</h2>
            </div>
             
             <div className=' sm:w-32 md:w-[53vw] p-2 font-roboto font-normal'>
                <p>{itm.description}</p>
            </div>
         <div className='pt-2 bg-red-50 mt-3 sm:h-64 md:h-auto'>
             <div className='ml-5 font-hind font-medium text-lg text-orange-900'>
              <h2> ₹{itm.price}</h2>
             </div>

             <div className=' ml-2 flex gap-5'>
               <h1 className='font-semibold text-lg text-orange-900'>Weight:</h1>
                <h3 className='bg-red-300 w-16 font-medium  text-orange-900'>{itm.quantity}</h3>
             </div>

            <div className='mt-3 ml-2 flex gap-6'>
            <h1 className='font-semibold text-lg mt-2 text-orange-900'>Quantiy:</h1>


           <div className='flex gap-1'>

          
              <div className='text-orange-900 border-[1px] border-black w-12 h-11 flex items-center justify-center text-lg font-semibold  bg-white'>
                 <p>{ct}</p>
              </div>

              <div  className='flex flex-col gap-1'>
              <div className='text-orange-900 cursor-pointer bg-white w-8 h-5 items-center flex justify-center border-[1px] border-black'>
              <p onClick={myfunt}>^</p>
              </div>
              <div className='text-orange-900 cursor-pointer bg-white w-8 h-5 items-center flex justify-center border-[1px] border-black'>
              <p onClick={myfunb}>v</p>
              </div>
                 
               
              </div>
              <div className='bg-yellow-400 w-40 flex items-center justify-center ml-8 hover:scale-105  '>
              <button onClick={myfun}>Add to Cart</button>
              </div>

              </div>
            </div>

          </div>
           
              

          </div>

         </div>

      </>
    })
     
    }
         
    </div>
  )
}

export default CardData
