import { Link } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const Search = ({dta}) => {
     
  console.log("we are i dta file and we want add this");
  return (
    <div className='w-96 h-96 pt-2 items-center overflow-hidden   flex  flex-col gap-2'>
    
      {
        dta.map((itm) =>{
          

             return( 
            <div className='text-xl text-black font-sans  '>
             <div className='w-full flex items-center gap-2 h-10'>
            <img  src={`https://nice-pink-llama-cape.cyclic.app/${itm.img1}`} alt='im'  className='w-10 h-7'   />
                <div className=''>
                <h3  >{itm.Name} </h3>
                 </div>
            </div>
            
             </div>
             
             )
          
        })
      }
            
    
    </div>
  )
}

export default Search
