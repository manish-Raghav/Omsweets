import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DiffCard from '../Components/diffCard';




const Sweet = () => {
  const [ast ,setast] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/all')
    .then(res =>{
      setast(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <div className='flex  w-screen items-center '> 
        
    <DiffCard mani = {ast} />
    </div>
  )
}

export default Sweet
