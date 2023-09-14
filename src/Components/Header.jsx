 import React from 'react'
 import img from '../assets/oms.png'
 import img2 from '../assets/om.png'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import Cart from '../Pages/Cart';


 
 const Header = () => {
   return (
     <header className='fixed shadow-md w-full h-16 md:px-4 z-50 bg-white'>
        
            <div className=' flex items-center h-full justify-between'>
             <Link to="/" >
                <div className='mx-6 '>
                    <img src={img} alt='img' className='h-14' />
                </div>
                </Link>
               
                   <div className='flex items-center gap-4 md:gap-7'>
                   <nav className=' flex gap-4 md:gap-6 text-base md:text-lg '>

                  
                <Link to='/'>HOME</Link>
               
                <Link to='/Sweet'>SWEET</Link>
               
                <Link to='/Bakerie'>BAKERIES</Link>
                <Link to='/Chocolate'>CHOCOLATES</Link>
                <Link to='/Food'>FOODS</Link>
                <Link to='/Upload'>Upload</Link>
               
            
             
       





              </nav>
              <Link to="/Cart">
                 <div className='relative cursor-pointer'>
                 <Badge badgeContent={3} color="success">
                 <img  src={img2} alt='img2' className='h-10'  />
                  </Badge>   
                 


                
                 
                 </div>
                 </Link>
           </div>  
                   
                
                            
        </div>
        
     
     </header>
   )
 }
 
 export default Header
 