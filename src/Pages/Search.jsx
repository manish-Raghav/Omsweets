import { Link } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../reduxstore/productslice';

const Search = ({dta}) => {
    //  console.log('search datata is herhehehehhehheh  --->' ,dta);
  const usenav = useNavigate();
  const dispe = useDispatch();
const action =(id) =>{
    usenav('/card') 
    const myselect = dta.find((item) => item.id === id)
    console.log('here is some data is living',myselect);
    dispe(add([myselect]));
}


  return (
    <div className='w-max h-96 pt-2 items-center overflow-hidden   flex  flex-col gap-2'>
    
      {





        
        dta.map((itm) =>{
          

             return( 
            <div className='text-xl text-black font-sans  '>
             <div className='w-full flex items-center gap-2 h-10 hover:border-[1px] hover:border-black hover:cursor-pointer '>
            <img  src={`https://manish-omsweet-database.onrender.com/${itm.img1}`} alt='im'  className='w-10 h-7'   />
                <div className=''>
                <h3 onClick={() => action(itm.id)} > {itm.Name} </h3> 
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
