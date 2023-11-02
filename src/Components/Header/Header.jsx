 import React, { useState } from 'react'
  import img from '../../assets/oms.png'
   
  import img2 from '../../assets/om.png'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import Cart from '../../Pages/Cart';
import {FaBars} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa';
import { useSelector } from 'react-redux'
import Nav from './Nav';
import Icon from './Icon';
//import { Mydt } from '../../Carousel/Mydt';



 
 const Header = () => {
  const [isset ,setisset] = useState(false);

  //  const data= useSelector((stat) => stat.productcart.cartItem);
   return (
     <header className='fixed shadow-md w-screen h-16 md:px-4 z-50 bg-white'>
        
            <div className=' flex items-center   '>
             <Link to="/" >
                <div className='mx-6 md:p-2'>
                     <img src={img} alt='img' className=' h-14  ' />
                </div>      
                </Link>
                
                  <nav className=' md:flex  hidden gap-4 uppercase relative left-72 '>
                    
                     <div>
                     <Nav />
                     </div>
                     
                     <div className='relative left-32'>
                      <Icon />
                      </div> 

                      

                  </nav>
                  
             {/* <div className=' mt-2 mr-6 flex items-center gap-4 md:gap-7'>
             
                   <nav className=' flex  gap-4  text-base md:text-lg '>

                  
                <Link to='/' className='font-serif text-xl hover:text-red-700 focus:text-red-700'>HOME</Link>
               
                <Link to='/Sweet ' className='font-serif text-xl  hover:text-red-700 focus:text-red-700'>SWEET</Link>
               
                <Link to='/Bakerie' className='font-serif text-xl hover:text-red-700 focus:text-red-700'>BAKERIES</Link>
                <Link to='/Chocolate'className='font-serif text-xl  hover:text-red-700 focus:text-red-700'>CHOCOLATES</Link>
                <Link to='/Food'className='font-serif text-xl hover:text-red-700 focus:text-red-700'>FOODS</Link>
      


                    
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




               
               
         

              </nav>
              </div> */}




              <div className='cursor-pointer  relative left-40 py-3 w-44 md:hidden'>
               <FaBars />
               </div>
                   
                
                            
        </div>
        
     
     </header>
   )
 }
 
 export default Header
 