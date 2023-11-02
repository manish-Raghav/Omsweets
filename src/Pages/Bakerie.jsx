import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Mycard from '../Components/Mycard';
import Footer from '../Components/Footer';
const Bakerie = () => {
  const [ast ,setast] = useState([]);

  const swet = useSelector((stat) => stat.productcart.productList);
  useEffect(()=>{
    // axios.get('http://localhost:4000/all')
    // .then(res =>{
    //   setast(res.data);
  setast( swet.filter((item) => item.product_name ==="bakeries" ))

  
  },[swet])
  // console.log(ast);
  return (
    <div className='flex flex-col max-w items-center    '> 
    <div className='flex md:justify-center mt-20  md:mx-8 md:border-[1px] md:border-black  gap-2 flex-wrap  md:max-w-full sm:w-auto sm:border-4 sm:border-y-emerald-500'>
       {
      ast.map((el, index) => {
                return (
                  <Mycard
                 
                    id={el._id}
                    name={el.Name}
                    catego={el.product_name}
                    price={el.prise}
                    image={el.img1}
                    quant ={el.quantity}
                  />
                );
              })
     }
       </div>

       <div className='mt-20 w-full'>
    <Footer/>
    </div>
    </div>
  )
}

export default Bakerie
