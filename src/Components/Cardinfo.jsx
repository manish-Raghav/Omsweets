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
          <RxCross1 size={30} className=' fixed absolute right-3 top-3 z-50'
           onClick={()=>data(false)}
          />


         <div className='flex flex-col md:flex-row'>
            <div className=' p md:ml-1  relative bottom-4  '>
                <img src={` http://localhost:4000/${img}`} alt='img' className='bg-cover mt-4 sm:w-[60wh] sm:h-[20vh] md:w-[18vw] md:h-[40vh]   rounded-md' />
            </div>

            <div className='flex flex-col ml-4 '> 
            <div className='relative left-5 top-2 '>
            <h1 className=' text-3xl capitalize font-semibold text-orange-900'>{name}  </h1>
            </div>


            <div className='pt-3 relative left-5 top-2 pr-4 max-w-screen-sm max-h-[5vh] md:w-[50rem] '>
             <p className='font-sans text-[1rem]'>
               {desc}
             </p>
            </div>



             <div className='bg-red-50 p-2 mt-3'>
            <div  >
              <h4 className='text-orange-900 font-bold text-lg'>₹{ps}</h4> 
             </div>
          
             <div className='pt-3'>
              <h4 className='text-orange-900 font-bold text-lg'>weight  : {quant}</h4> 
             </div>
           
           </div>

           <button className='bg-yellow-400 p-[1px] w-24 h-10 rounded-sm  relative left-8 top-5 text-lg font-medium shadow-lg' onClick={myfun}>Add to cart</button>
            </div>
         </div> 
     </div>
    </div>
    </div>
  )
}

export default Cardinfo
