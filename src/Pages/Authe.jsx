import React from 'react'

import Login from './Login'
import { useNavigate } from 'react-router-dom';


const Authe = () => {
  const navigate = useNavigate();
  const action=()=>{
     navigate('/login');
  }
  return ( 
    <div className=' flex flex-col    gap-2 '>
     {/* <div className='cursor-pointer sm:text-base md:text-lg hover:transform hover:scale-105'>
     <h4  >Login as user</h4>
     </div> */}
        

       <div  className='cursor-pointer  sm:text-base md:text-lg hover:scale-90 hover:text-red-700 focus:text-red-700'>
       <h4 onClick={action}>Login for owner</h4>
       </div> 
        
    </div>
  )
}

export default Authe
