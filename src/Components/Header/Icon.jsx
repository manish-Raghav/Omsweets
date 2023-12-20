import React, { useState } from 'react'

import img from '../../assets/oms.png'
import {FaBars} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'; 
import img2 from '../../assets/om.png'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux'
import Authe from '../../Pages/Authe';

const Icon = () => {
   
   const [isopen ,setisopen] = useState(false);
   
    const data= useSelector((stat) => stat.productcart.cartItem);

    const open = ()=>{

      setisopen( isopen ?false :true);
        
     }
  



  return (
    <div className='flex '>

  
    {/* <Link>


    </Link> */}<div className='flex  sm:gap-2     md:gap-12 '>
           <Link to="/Cart"> 
                 <div className='relative cursor-pointer hover:text-red-700 focus:text-red-700 '>
                 <Badge  badgeContent={data.length} color="success">
                 <img  src={img2}  alt='img2' className=' sm:h-6 md:h-8'  />
                  </Badge>   
              
                 
                 </div>
                 </Link>

                 {/* <Link to='/Upload'> */}
                 <div className='cursor-pointer p-2 hover:text-red-700 focus:text-red-700'>
                 <FaUser className='text-xl' onClick={open}   />   
                   </div>
                 {/* </Link> */}
</div>

      <div className=' absolute  w-44 sm:top-12 md:top-11  md:left-12 z-30 shadow-md bg-slate-50 capitalize'>
          {
            isopen ? (<Authe /> ): null
          }  
          </div>
    </div>
  )
}

export default Icon
