import axios from 'axios';
import React, { useState } from 'react'

const Upload = () => {

      const[pro,setpro] = new useState("");
      const[nm,setnm] =  new useState('');
      const[img,setimg] = new useState("");
      const[qnt ,setqnt] = new useState(0);
      const[ps,setps] = new useState(0);
    
  const formdata= new FormData();
    formdata.append('pro',pro);
    formdata.append('nm',nm);
    formdata.append('img',img);
    formdata.append('qnt',qnt);
    formdata.append('ps',ps);
 

    const myfun =()=>{

       axios.post('http://localhost:4000/give',formdata)
       .then((rs) =>{
        console.log('result is succsess',rs)
       })
       .catch((e)=>console.log( e,'result is errror'))
      console.log(pro)
      console.log(nm)
      console.log(img)
      console.log(qnt)
      console.log(ps)
     console.log("myfundata");
     console.log(formdata);
    }
    

  return (
    <div>
    <div>
    <label >Product_nmae</label>
      <input type='text' onChange={e=>setpro(e.target.value)} />
      </div>
      <div>
      <label >Name</label>
      <input type='text' onChange={e=>setnm(e.target.value)} />
      </div>
      <div>
      <label >Quantity</label>
      <input type='number'  onChange={e=>setqnt(e.target.value)} />
      </div>
      <div>
      <label >prise</label>
      <input type='number'  onChange={e=>setps(e.target.value)} />
      </div>
      <div>
      <label >images</label>
      <input type='file' name='img' onChange={e=>setimg(e.target.files[0])} />
      </div>
      <div>
     
      <button className='bg-lime-500' onClick={myfun}> Submit</button>
      </div>

    </div>
  )
}

export default Upload
