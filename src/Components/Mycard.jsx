import React from 'react'

import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../reduxstore/productslice';

const Mycard = ({ id, name, image,catego, price , quant}) => {
//{ id, name, image,catego, price , quant}

  console.log("my name is  ->>",name);
  console.log("my name is  ->>",image);
  console.log("my name is  ->>",catego);
  // const setm = useSelector((stm) =>stm.productcart.productList);
  const usedisp = useDispatch()
    
    const handlecart = () =>{
      usedisp(addCartItem({
          _id:id,
          name:name,
          quant:quant,
          price:price,
          catego:catego,
          img:image
      }));

       
    }
  
  return (
    <div className=' flex flex-row mt-3 gap-3  ' >
          {/* {
      mani.map(value =>{
        return(
          
      <div className=' '> 
       <Card className='w-56 h-64 shadow-2xl hover:border-2 hover:border-solid hover: border-red-500 '  >
       <div className='flex justify-center py-1'>
      <Card.Img className='w-52 h-28' src={`http://localhost:4000/${image}`} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className='flex justify-between'>
        <div >
        <h3>₹{price}</h3>
       </div>
       <div>
        <h3>{ quant}</h3>
       </div>
       </div>
       <div className='flex justify-center my-3'>
        <Button className='bg-red-500' onClick={handlecart()}>Add To cart</Button>
        </div>
      </Card.Body>
    </Card>
      </div> 
     
        )
     
       
    })

     } */}




     <div className=' '> 
       <Card className=' sm:w-20 md:w-56  hover:border-1  hover:border-solid  hover:border-black hover: cursor-pointer'  >
       <div className='flex justify-center py-1'>
      <Card.Img className=' md:w-52 h-28 sm:w-3' src={`http://localhost:4000/${image}`} />
      </div>
      <div className='absolute top-2 left-3 bg-red-600 rounded-sm'>
        <h5 className='text-slate-200 text-base'>-₹20%</h5>
      </div>
      <Card.Body>

      <div className='flex justify-center my-2'>
      <button className='p-[2px] bg-yellow-400 w-[8rem] text-lg font-normal text-slate-800  h-[2rem] rounded-2xl active:bg-yellow-600 ' onClick={handlecart}>Add to cart</button>
        {/* <Button className='bg-yellow-300' onClick={handlecart}>Add To cart</Button> */}
        </div>
        <Card.Title className='text-orange-900 text-base font-sans'>{name}</Card.Title>
        
        <div  className='flex space-x-1 relative bottom-1'>
         <h3 className='text-orange-900 font-medium'>Weight :</h3>
        <h3 className='text-orange-900'>{quant}kg</h3>
       </div>
       <div>
       
        <h3 className='text-orange-900 text-xl font-bold'>₹{price}</h3>

       </div>
       
      
      </Card.Body>
    </Card>
      </div> 
    </div>
  )
}

export default Mycard