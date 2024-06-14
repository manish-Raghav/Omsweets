
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
      const [eml ,seteml] = useState('');
      const [pas,setpas] = useState('');
       const navi = useNavigate()
    const log =()=>{


        if(eml === 'abcd@gmail.com' && pas === '12345')
              navi('/Upload');

        else
           {
            alert('email and password problem');
           }
          
        //   useEffect(()=>{
        //    axios.post()
        //    .then(res => console.log('login is=>',res))
        //    .catch(err =>console.log(err))
        //   })
    }
  return (
     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-red-700 underline">
                   Sign in
                </h1>
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
                        abcd@gmail.com
                  </p>

                  </div>
                        <input
                            type="email"
                            name='email'
                            onChange={(e => seteml(e.target.value))}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                           <div className='flex gap-4'>
                           <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                                 <p className='text-sm text-red-500'>
                               123456
                                </p>
                                  </div>
                       
                        <input
                            type="password"
                            name='password'
                            onChange={(e => setpas(e.target.value))}
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
                          onClick={log}>
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login
