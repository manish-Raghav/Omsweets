import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Bakerie = () => {
  const [abak ,setabak] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:4000/bak')
      .then(res =>{
        console.log(res.data);
        setabak(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    },[])
  return (
    <div>
      {abak.map((val)=>{
        return(
          <div>
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

        )
      })}
    </div>
  )
}

export default Bakerie
