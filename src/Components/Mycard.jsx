import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addCartItem,add } from '../reduxstore/productslice';
import { useNavigate } from 'react-router-dom';


const Mycard = ({ id, name, image,catego, price , quant,discount,desc}) => {

  const [ld,setld]  = useState(true); 
//{ id, name, image,catego, price , quant}

  // console.log("my name is  ->>",name);
  // console.log("my name is  ->>",image);
  // console.log("my name is  ->>",catego);
  // console.log("my name is  ->>",discount);

  // const setm = useSelector((stm) =>stm.productcart.productList);

   const navi = useNavigate();

 

  const usedisp = useDispatch()


  const mydt = ()=>{
    navi('/card')
    usedisp (add([{
             id:id,
            product_cat:catego,
           Name:name,
            img1:image,
            price:price,
            quantity:quant,
            discount:discount,
            description:desc
    }]));
   
}



    
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
    <div className=' flex flex-row mt-3 gap-3   ' >
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


       { id === undefined ? <div>  Please Wait Data is Fetching from Server </div> :

     <div className=' '> 
       <Card className=' md:w-56   hover:border-1  hover:border-solid  hover:border-black hover: cursor-pointer'   >
       <div className='flex justify-center py-1 ' onClick={mydt}>
      <Card.Img className='sm:w-[10rem] md:w-52 h-28 ' src={`https://manish-omsweet-database.onrender.com/${image}`}  />
      </div>
      <div className='absolute top-2 left-3 w-6 items-center bg-red-600 rounded-sm'>
        <h5 className='text-slate-200 text-sm font-roboto'>-₹{discount}</h5>
      </div>
      <Card.Body className=''>

      <div className='flex justify-center my-2'>
      <button className='p-[2px] bg-yellow-400 w-[8rem] text-lg font-normal text-slate-800  h-[2rem] rounded-2xl active:bg-yellow-600 ' onClick={handlecart}>Add to cart</button>
        {/* <Button className='bg-yellow-300' onClick={handlecart}>Add To cart</Button> */}
        </div>
        <Card.Title className='text-orange-900 text-base ml-5 font-sans'>{name}</Card.Title>
        
        <div  className='flex ml-5 space-x-1 relative bottom-1'>
         <h3 className='text-orange-900 font-medium'>Weight :</h3>
        <h3 className='text-orange-900'>{quant}</h3>
       </div>
       <div>
       
        <h3 className='text-orange-900 text-xl font-bold ml-5'>₹{price}</h3>

       </div>
       
      
      </Card.Body>
    </Card>
      </div> 
       }
      {/* seopen={setopen} ope={open} */}
      {/* {
        open ? (
          <Cardinfo  data={setopen} id={id} name={name} img ={image} cat={catego} ps ={price}  quant= {quant} dis={discount} desc={desc} />

         ) : null
      } */}
    </div>
  )
}

export default Mycard