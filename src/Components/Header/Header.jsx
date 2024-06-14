   import React, { useState } from 'react'
   import img from '../../assets/oms.png'
      
   import img2 from '../../assets/om.png'
   import { Link } from 'react-router-dom'
   import Badge from '@mui/material/Badge';
   import Cart from '../../Pages/Cart';
   import {FaBars} from 'react-icons/fa'
   import {RxCross2} from 'react-icons/rx'
   import {FaUser} from 'react-icons/fa';
   import { useSelector } from 'react-redux'
   import Nav from './Nav';
    import Icon from './Icon'
    import { CiSearch } from "react-icons/ci";
    import Search from '../../Pages/Search';
import { data } from 'autoprefixer';
   // import IconButton from "@mui/material/IconButton";
   // import SearchIcon from "@mui/icons-material/Search";
   // import TextField from "@mui/material/TextField";

   //import { Mydt } from '../../Carousel/Mydt';



   
   const Header = () => {
   const [isset ,setisset] = useState(false);
   const [dt ,setdt] = useState("")


   const mn =  useSelector((stat) => stat.productcart.productList)
    
   const [dta ,setdta] = useState(mn)
   // console.log(dt);

   const setclick = ()=>{
      setisset(true)
   }

   const stopdt = ()=>{
      setisset(false)
   }
  


    const fn =(e) =>{

      setdt(e);
      const k = e.toLowerCase();
      console.log(k);
      setdta(mn.filter((itm) => itm.Name.toLowerCase().includes(k)) );  
   

    }
 
      return (
      <header className='fixed shadow-md w-screen h-16 md:px-4 z-50 bg-white border-2 border-green-800'>
         
               <div className=' flex  md:items-center  relative top-1   '>
               <Link to="/" >
                  <div className='sm:mx-2 md:mx-6 sm:mt-2 md:mt-0   md:p-2'>
                        <img src={img} alt='img' className=' z-20 sm:w-[4rem] sm:h-[2rem] md:[3rem] md:w-[5rem] h-14  ' />
                  </div>      
                  </Link>



                  <div className='flex absolute left-20 md:left-32 sm:top-2 md:w-56 sm:w-36  sm:z-0 md:z-20 w-auto rounded-2xl  shadow-xl'>
                     <input    type='text' placeholder='Search here.. '   onChange={(e) =>{fn(e.target.value)}} className='md:w-56 sm:w-40  h-9 border-[1px] focus:border-none
                      border-red-600 rounded-xl px-2 box-border-none   text-black' />
                     <div className='absolute md:left-48  sm:left-32 justify-center  '>
                     <CiSearch  size={30}  className=' cursor-pointer text-red-700   ' /> 
                     </div>
                    
                      
                  </div>

                  
                  <nav className=' md:flex  sm:hidden gap-4 uppercase relative left-64 '>
                     
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


               <div className=' relative md:right-14  left-44 gap-2 cursor-pointer  flex py-3   md:hidden'>
                  <div className=''>
                  <Icon />
                  </div>
                  <div className='relative right-2'>
                  <FaBars size={30} onClick={setclick}/>
                  </div>
               
                  </div>
               

               
                  
                  {
                     isset ? (<div className=' w-screen h-screen z-50 absolute  top-0 '> 
                           <div className='w-screen  bg-[#00000090]  h-screen z-50   ' onClick={stopdt}> 

                           <div className='flex z-50  absolute right-10   top-5 '> 
                              <RxCross2 size={50} className='text-slate-100 font-extrabold' onClick={stopdt}/>
                              </div>
                              
                           <div className='flex justify-center relative top-20' > 
                           
                           <Nav /></div>
                           {
                        
                        }
                           </div>
                        
                     </div>
                     
                     ) : null
                  } 

                 




                  <div className='w-60 absolute top-12  flex justify-center shadow-md sm:left-12 md:left-32 z-60 bg-white   '>

                   {
                     dt ? <Search dta={dta} /> : null
                   }


                  </div>   
                  
                              
         </div>
         
      
      </header>
      )
   }
   
   export default Header
   