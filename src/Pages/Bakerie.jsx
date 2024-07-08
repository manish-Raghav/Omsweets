import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Mycard from '../Components/Mycard';
import MyFooter from '../Components/MyFooter';
import Loading from '../Components/Loading';

const Bakerie = () => {
  const [ast ,setast] = useState([]);
  const [page,setpg] = useState(1);

  const swet = useSelector((stat) => stat.productcart.productList);
  useEffect(()=>{
  setast( swet.filter((item) => item.product_name ==="bakeries" ))

  
  },[swet])



  var dty= ast.length


  const datashow =(pg) =>{
    if(pg >=1 && pg <dty && pg!==page)
    setpg(pg);
  }
  // console.log(ast);
  return (
    <div className='flex flex-col  items-center    '> 
    <div className='flex justify-center mt-20 sm:  md:mx-8   gap-2 flex-wrap  md:max-w-full sm:w-auto '>
       {
        ast.length<1  ? <div className=' flex justify-center items-center  mt-24'> <Loading /> </div>:
      ast.slice(page*10-10, page*10).map((el, index) => {
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




        <div>

         {
           
          ast.length>0 && <div className='flex gap-2 mt-10 text-lg'>

          <span className='cursor-pointer  w-20 ml-5 font-hind font-normal rounded-xl text-center text-base items-center flex justify-center  border-[1px] border-orange-900  hover:bg-[#6e4600] hover:text-white' onClick={()=>datashow(page-1)}>Previous</span>
          
          {[...Array(Math.ceil(dty / 10))].map((_, i) => {
        return <span key={i}>{i + 1}</span>; 
      })}
         
             
            
              <span className='cursor-pointer  w-14 ml-5 font-hind font-normal rounded-xl text-center text-base items-center flex justify-center  border-[1px] border-orange-900  hover:bg-[#6e4600] hover:text-white' onClick={()=>datashow(page+1)}>Next</span>
          </div>

         }

         </div>



           




         <div className='mt-32 w-full'>
        <MyFooter />
       </div>
    </div>
  )
}

export default Bakerie
