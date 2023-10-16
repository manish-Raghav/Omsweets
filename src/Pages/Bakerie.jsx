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
    <div className='flex flex-col  '> 
    <div className='flex justify-center mt-16 mx-8   gap-2 flex-wrap '>
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
