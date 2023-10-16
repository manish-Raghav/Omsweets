import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import { Mydt } from './Mydt';




const MainCarousel = () => {
   const items = Mydt.map((item)=> <img className='cursor-pointer object-cover object-top w-full h-[30rem] ' role='presentation' src={item.img} alt=''  />)
    return(
        <AliceCarousel
         items={items}
         disableButtonsControls
         autoPlay
         autoPlayInterval={1000}
         infinite
        />

        // <div>
        //     {
        //       Mydt.map(item =>{
        //           return(
        //             <img src={item.img} alt='my' />
        //           )
        //         })
        //     }
        // </div>



        
    )
}
 
export default MainCarousel



