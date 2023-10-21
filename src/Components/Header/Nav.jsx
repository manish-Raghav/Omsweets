import React from 'react'
 import img from '../../assets/oms.png'
 import img2 from '../../assets/om.png'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import Cart from '../../Pages/Cart';
import {FaBars} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa';

const Nav = () => {
  return (
    <div>
       <nav className=' flex gap-4  text-base md:text-lg '>

                  
<Link to='/' className='font-serif text-xl '>HOME</Link>

<Link to='/Sweet ' className='font-serif text-xl'>SWEET</Link>

<Link to='/Bakerie' className='font-serif text-xl'>BAKERIES</Link>
<Link to='/Chocolate'className='font-serif text-xl'>CHOCOLATES</Link>
<Link to='/Food'className='font-serif text-xl'>FOODS</Link>



    
<Link to="/Cart">
 <div className='relative cursor-pointer '>
 <Badge badgeContent={data.length} color="success">
 <img  src={img2} alt='img2' className='h-10'  />
  </Badge>   

 
 </div>
 </Link>

 <Link to='/upload'>
 <div className='relative cursor-pointer p-2'>
 <FaUser />   
   </div>
 </Link>




<div className='cursor-pointer md:hidden'>
<FaBars />
</div>



</nav>
    </div>
  )
}

export default Nav
