import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Mycard from '../Components/Mycard';


const Sweet = () => {
  const [ast ,setast] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/Sweet')
    .then(res =>{
      console.log(res.data);
      setast(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <div>
        
    <Mycard mani={ast} />
    </div>
  )
}

export default Sweet
