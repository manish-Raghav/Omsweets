import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Chocolate = () => {

  const [acho ,setacho] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/choco')
    .then(res =>{
      console.log(res.data);
      setacho(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div>
        {acho.map((val)=>{
          return(
    
    <>
    <div className='bg-white w-48 h-60 ml-10 mt-9 rounded-xl shadow-lg '>
    <div>
      <img src={`http://localhost:4000/${val?.img1}`} />
    </div>
    <h4>
      {val.product_name}
    </h4>
    <h4>
      {val.Name}
    </h4>
    <h4>
      {val.quantity}
    </h4>
       
    <h4>
      {val.prise}
    </h4>
    </div>
    </>

  )
      })}
    </div>
  )
}

export default Chocolate
