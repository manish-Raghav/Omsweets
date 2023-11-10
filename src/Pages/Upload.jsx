import axios from 'axios';
import React, { useState } from 'react'

const Upload = () => {

      const[pro,setpro] =  useState("");
      const[nm,setnm] =   useState('');
      const[img,setimg] =  useState("");
      const[qnt ,setqnt] =  useState(0);
      const[ps,setps] = useState(0);
      const[dscount,setsv] = useState("")
      const[dsc ,setdsc] = useState("");
    
  const formdata= new FormData();
    formdata.append('pro',pro);
    formdata.append('nm',nm);
    formdata.append('img',img);
    formdata.append('qnt',qnt);
    formdata.append('ps',ps);
    formdata.append('ds',dscount);
    formdata.append('dscr',dsc);
 

    const myfun =()=>{

       axios.post(' https://nice-pink-llama-cape.cyclic.app/give',formdata)
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
    <div className=' flex  justify-center w-full h-full'>
      <div className='mt-28 flex justify-center  items-center flex-col   '>

     
    <div >
   
      <input type='text' className='border-2 border-black pl-1' placeholder='Product_name' onChange={e=>setpro(e.target.value)} />
      </div>


      <div className='flex flex-col'>
      <label >Name</label>
      <input type='text'  className='border-2 border-black pl-1' onChange={e=>setnm(e.target.value)} />
      </div>
      <div className='flex flex-col'>
      <label >Quantity</label>
      <input type='text'  className='border-2 border-black pl-1'  placeholder='gm,kg,pack' onChange={e=>setqnt(e.target.value)} />
      </div>
      <div className='flex flex-col'>
      <label >prise</label>
      <input type='number' className='border-2 border-black pl-1'  onChange={e=>setps(e.target.value)} />
      </div>

      <div className='flex flex-col'>
      
      <label >Discount</label>
      <input type='text' className='border-2 border-black pl-1' onChange={e=>setsv(e.target.value)} />
      </div>
      
      <div className='flex flex-col ml-28'>
      <label >images</label>
      <input type='file' name='img' onChange={e=>setimg(e.target.files[0])} />
      </div>

        
      <div className='flex flex-col'>
      
      <label >Description</label>
      <input type='text' className='border-2 border-black pl-1 h-16' onChange={e=>setdsc(e.target.value)} />
      </div>



      <div className=' relative left-10 top-6'>
     
      <button className=' w-[4rem] h-[2.5rem] bg-yellow-600  mr-32 rounded-md hover:text-gray-100' onClick={myfun}> Submit</button>
      </div>
      </div>
    </div>
  )
}

export default Upload
