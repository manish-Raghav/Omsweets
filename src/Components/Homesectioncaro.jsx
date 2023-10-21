import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useDispatch, useSelector } from 'react-redux';
import Mycard from './Mycard';



const Homesectioncaro = () => {


  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
};
//  const setm = useSelector((stm) =>stm.productcart.productList);
//  var items= "";

  return(
  
  <div>
{/*   
   {items = setm.map((el, index) => {
      
    <Mycard
      id={el._id}
      name={el.Name}
      catego={el.product_name}
      price={el.prise}
      image={el.img1}
      quant ={el.quantity}
    />
   
 
})} */}
  
        <AliceCarousel
         items={<Mycard />}
         disableButtonsControls
         autoPlay
         autoPlayInterval={1000}
         responsive={responsive}
    />
  </div>
  
  )
}

export default Homesectioncaro
