import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../reduxstore/productslice';

const Mycard = ({ id, name, image,catego, price , quant}) => {
  
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
       <Card className='w-56 h-64 shadow-2xl hover:border-2 border-solid  border-zinc-500 hover: cursor-pointer'  >
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
        <h3>{quant}</h3>
       </div>
       </div>
       <div className='flex justify-center my-3'>
        <Button className='bg-red-500' onClick={handlecart}>Add To cart</Button>
        </div>
      </Card.Body>
    </Card>
      </div> 
    </div>
  )
}

export default Mycard
