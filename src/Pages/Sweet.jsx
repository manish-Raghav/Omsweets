import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Mycard from '../Components/Mycard';








const Sweet = () => {
  const [ast ,setast] = useState([]);
  
  const [page,setpg] = useState(1);

  const swet = useSelector((stat) => stat.productcart.productList);
  useEffect(()=>{
    // axios.get('http://localhost:4000/all')
    // .then(res =>{
    //   setast(res.data);
   setast( swet.filter((item) => item.product_name ==="sweet" ))

   

  
  },[])
   
  return (
    <div className='flex h-screen relative flex-col border-2 border-orange-700 max-w items-center    '> 
      
       <div className='flex justify-center mt-20  md:mx-8 md:border-[1px] md:border-black  gap-2 flex-wrap  md:max-w-full sm:w-auto '>
       {
      ast.map((el, index) => {
        
                return (
                  <Mycard
                 
                    id={el._id}
                    name={el.Name}
                    catego={el.product_name}
                    price={el.price}
                    image={el.img1}
                    quant ={el.quantity}
                    discount = {el.discount}
                    desc ={el.description}
                  />
                );
              })
     }
       </div>
       {/* <div  className='relative w-full bottom-0 top-20 '>
       <Footer/>
       </div> */}
    </div>
  )
}

export default Sweet
