import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { useDispatch } from 'react-redux';

import { addCartItem } from '../reduxstore/productslice';
//{seopen,ope}
//seopen(false)
const Cardinfo = ({data, id, name, img  ,cat, ps ,  quant, dis, desc}) => {


  const mydisp = useDispatch();

  const myfun =() =>{
    mydisp(addCartItem({
      _id:id,
      name:name,
      quant:quant,
      price:ps,
      catego:cat,
      img:img
  }));
  } 

  return (
    <div className='bg-white'>
    <div className='fixed w-screen h-screen  bg-[#00000030] top-0 left-0 z-40 flex items-center justify-center'>
     <div className='w-[80%] 800px:w-[60%] h-[70vh] 800px:h-[75vh] border-[1px] border-black  bg-white rounded-md shadow-sm relative p-4'>
          <RxCross1 size={30} className=' cursor-pointer absolute right-3 top-3 z-50 border-[1px] border-black rounded-2xl'
           onClick={()=>data(false)}
          />


         <div className='flex flex-col md:flex-row md:justify-normal   sm:justify-center sm: items-center'>
            <div className='    relative bottom-4  '>
                <img src={` https://nice-pink-llama-cape.cyclic.app/${img}`} alt='img' className='bg-cover mt-4 sm:w-[30wh] sm:h-[10vh] md:w-[18vw] md:h-[40vh]   rounded-md' />
            </div>

            <div className='flex flex-col justify-center items-center '> 
            <div className=' md:relative left-5 top-2 '>
            <h1 className=' text-3xl capitalize font-semibold text-orange-900'>{name}  </h1>
            </div>


            <div className='pt-3 md:w-[30rem] '>
             <p className='font-sans text-[1rem]'>
               {desc}
             </p>
            </div>



             <div className='bg-red-50 w-[40vw]  relative sm:right-6 md:left-2'>
            <div  >
              <h4 className='text-orange-900 font-bold text-lg'>₹{ps}</h4> 
             </div>
          
             <div className='pt-3'>
              <h4 className='text-orange-900 font-bold text-lg'>weight  : {quant}</h4> 
             </div>
           
           </div>

           <button className='bg-yellow-400 p-[1px] w-24 h-10 rounded-md  relative top-5 text-lg font-medium shadow-lg' onClick={myfun}>Add to cart</button>
            </div>
         </div> 
     </div>
    </div>
    </div>
  )
}

export default Cardinfo
