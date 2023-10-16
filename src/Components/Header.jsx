 import React from 'react'
 import img from '../assets/oms.png'
 import img2 from '../assets/om.png'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import Cart from '../Pages/Cart';
import {FaUser} from 'react-icons/fa';
import { useSelector } from 'react-redux'


 
 const Header = () => {

   const data= useSelector((stat) => stat.productcart.cartItem);
   return (
     <header className='fixed shadow-md w-full h-20 md:px-4 z-50 bg-white'>
        
            <div className=' flex items-center h-full justify-between'>
             <Link to="/" >
                <div className='mx-6 '>
                    <img src={img} alt='img' className='h-14' />
                </div>
                </Link>
               
                   <div className=' mt-2 mr-6 flex items-center gap-4 md:gap-7'>
                   <nav className=' flex gap-4 md:gap-6 text-base md:text-lg '>

                  
                <Link to='/' className='font-serif text-xl'>HOME</Link>
               
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

               
         

              </nav>

     

            
           </div>  
                   
                
                            
        </div>
        
     
     </header>
   )
 }
 
 export default Header
 