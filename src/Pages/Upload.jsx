import axios from 'axios';
import React, { useState } from 'react'

const Upload = () => {

      const[pro,setpro] =  useState("");
      const[nm,setnm] =   useState('');
      const[img,setimg] =  useState("");
      const[qnt ,setqnt] =  useState("");
      const[ps,setps] = useState("");
      const[dscount,setsv] = useState()
      const[dsc ,setdsc] = useState();
    
  const formdata= new FormData();
    formdata.append('pro',pro);
    formdata.append('nm',nm);
    formdata.append('img1',img);
    formdata.append('qnt',qnt);
    formdata.append('ps',ps);
    formdata.append('ds',dscount);
    formdata.append('dscr',dsc);
 


    

    const myfun =()=>{
     
     // https://nice-pink-llama-cape.cyclic.app/give

     console.log('i have send the data ');
       axios.post('https://manish-omsweet-database.onrender.com/give',formdata)
       .then((rs) =>{
        console.log('result is succsess',rs)
       })
       .catch((e)=>console.log( e,'result is errror'))
      
       






    }
    

  return (
    <div className=' flex  justify-center w-full h-full'>
      <div className='mt-28 flex justify-center  items-center flex-col   '>

     
    <div >
   
      <input type='text' className='border-2 border-black pl-1' placeholder='Product_name' onChange={e=>setpro(e.target.value.toLowerCase())} />
      </div>


      <div className='flex flex-col'>
      <label >Name</label>
      <input type='text'  className='border-2 border-black pl-1' onChange={e=>setnm(e.target.value.toLowerCase())} />
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
      <input type='text'  className='border-2 border-black pl-1' onChange={e=>setsv(e.target.value)} />
      </div>
      
      <div className='flex flex-col ml-28'>
      <label >images</label>
      <input type='file' name='img' onChange={e=>setimg(e.target.files[0])} />
      </div>

        
      <div className='flex flex-col'>
      
      <label >Description</label>
      <input type='text' placeholder='write in 50 words' className='border-2 border-black pl-1 h-16' onChange={e=>setdsc(e.target.value)} />
      </div>



      <div className=' relative left-10 top-6'>
     
      <button className=' w-[4rem] h-[2.5rem] bg-yellow-600  mr-32 rounded-md hover:text-gray-100' onClick={myfun}> Submit</button>
      </div>
      </div>


      <form className="mt-6">
                    <div className="mb-2">
                    <div className='flex gap-4'>
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <p className='text-sm text-red-500'>
                    manishraghav@gmail.com
                  </p>

                  </div>
                        <input
                            type="email"
                            name='email'
                          
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                           <div className='flex gap-4'>
                           <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800" >
                            Password
                        </label>
                               
                                  </div>
                       
                        <input
                            type="password"
                            name='password'
                            
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                           <div className='flex gap-4'>
                           <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800" >
                            
                        </label>
                               
                                  </div>
                       
                        <input
                            type="password"
                            name='password'
                            
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                 
          



                    <div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    </div>
                   
                  

                 
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-slate-700 transition-colors duration-200 transform bg-yellow-400 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-purple-600"
                         >
                            Login
                        </button>
                    </div>
                </form>
    </div>
  )
}

export default Upload
  