import React from 'react'

import img from '../../assets/oms.png'
import {FaBars} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'; 
import img2 from '../../assets/om.png'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux'

const Icon = () => {

    const data= useSelector((stat) => stat.productcart.cartItem);
  return (
    <div className='flex  gap-12 '>
           <Link to="/Cart">
                 <div className='relative cursor-pointer hover:text-red-700 focus:text-red-700 '>
                 <Badge badgeContent={data.length} color="success">
                 <img  src={img2} alt='img2' className='h-10'  />
                  </Badge>   
              
                 
                 </div>
                 </Link>

                 <Link to='/upload'>
                 <div className='relative cursor-pointer p-2 hover:text-red-700 focus:text-red-700'>
                 <FaUser />   
                   </div>
                 </Link>
    </div>
  )
}

export default Icon