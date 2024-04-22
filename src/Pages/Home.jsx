import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

import gv from '../assets/gv2.jpeg'
import ad from '../assets/adv3.jpg'
import ad2 from '../assets/adv4.jpg'
import ad3 from '../assets/adv1.jpg'
import Sweet from './Sweet';
import Mycard from '../Components/Mycard';
import { GrPrevious,GrNext } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProduct } from '../reduxstore/productslice';
import Footer from '../Components/Footer';
import MainCarousel from '../Carousel/MainCarousel';
import Homesectioncaro from '../Components/Homesectioncaro';



  




const Home = () => {
    const [arr ,setarr] = useState([]);
    const [sw ,setsw] = useState([]);

    // const usedisp = useDispatch()

    
    // useEffect(()=>{
    //   axios.get('http://localhost:4000/all')
    //   .then(res =>{
    //      usedisp(setDataProduct(res.data));
         
    //     // setarr(res.data);

    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
    // },[])
       
         
    const setm = useSelector((stm) =>stm.productcart.productList);

    // useEffect(() =>{
    //   setsw( setm.filter((item) => item.product_name ==="sweet" ))
    // },[])
   
     console.log(setm , "hey i am here look my side ---->");  
      
     
    
    useEffect(()=>{
      axios.get('https://nice-pink-llama-cape.cyclic.app/Sweet')
      .then(res =>{
        setsw(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    },[])
    const slideproduct = useRef()

    const nextd = ()=>{
      slideproduct.current.scrollLeft +=200
    }
    const privious = ()=>{
      slideproduct.current.scrollLeft -=200
    }
    

  return (
    <div className='flex flex-col relative  max-h-full '> 
     
     <div className='mt-[4.1rem] w-full'>
      <MainCarousel />
     </div>




    <div className='flex  flex-col justify-center mt-11  '>

    <div className='flex flex-row justify-center' >
    <hr className='mt-4 md:w-96 h-1 bg-red-900' />
       <div className=' flex  '> 
       <h1 className='text-3xl  font-bold text-red-900 pr-2 ' >All </h1>
       <h1 className='text-3xl font-thin text-red-900 ' > Products </h1>
     </div>
     <hr className='mt-4 md:w-96 h-1 bg-red-900' />
     </div>


     {/* <div>
       <Homesectioncaro />
     </div> */}
    
     <div className='  sm:w-auto md:w-[78rem] h-[19rem] md:relative left-16 flex flex-row mt-3   overflow-scroll overflow-y-hidden scrollbar-none scroll-smooth transition-all border-[1px] border-black ' 
            ref={slideproduct}>
    



    <div className='  w-full  mt-28 sm:invisible md:visible absolute z-20 flex justify-between'>
     <div className='absolute  z-40 top-[1.2rem]  '>
     <button className='text-3xl font-bold bg-red-600 hover:bg-amber-400 rounded-md' onClick={privious} ><GrPrevious/></button>
     </div>

     <div className= ' absolute right-[0rem] top-[1.2rem] z-30'>
     <button className='text-3xl font-bold  bg-red-600 hover:bg-amber-400 rounded-md ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     
     {
      setm.map((el, index) => {
                return (
                  <Mycard
                 
                    id={el._id}
                    name={el.Name}
                    catego={el.product_name}
                    price={el.prise}
                    image={el.img1}
                    quant ={el.quantity}
                    discount = {el.discount}
                    desc ={el.description}
                  />
                );
              })
     }
    
     </div>





       
     
     <div className=' pt-5 flex flex-row justify-center' >
    <hr className='mt-4 md:w-96 h-1 bg-red-900' />
       <div className=' flex   '> 
       <h1 className='text-3xl  font-bold text-red-900 pr-2 ' >New  </h1>
       <h1 className='text-3xl font-thin text-red-900 ' > Products </h1>
     </div>
     <hr className='mt-4 md:w-96 h-1 bg-red-900' />
     </div>
       
     
    

     <div className='  sm:w-auto md:w-[78rem] h-[19rem] md:relative left-16 flex flex-row mt-3   overflow-scroll overflow-y-hidden scrollbar-none scroll-smooth transition-all border-[1px] border-black ' 
            ref={slideproduct}>
    



     <div className='  w-full sm:invisible md:visible mt-28 absolute  z-20 flex justify-between'>
     <div className='absolute  z-40 top-[1.2rem]  '>
     <button className='text-3xl font-bold bg-red-600 hover:bg-amber-400 rounded-md' onClick={privious} ><GrPrevious/></button>
     </div>

     <div className= ' absolute right-[0rem] top-[1.2rem] z-30'>
     <button className='text-3xl font-bold  bg-red-600 hover:bg-amber-400 rounded-md ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     {
     sw.map((el, index) => {
                return (
                  <Mycard
                    id={el._id}
                    name={el.Name}
                    catego={el.product_name}
                    price={el.prise}
                    image={el.img1}
                    quant ={el.quantity}
                    discount = {el.discount}
                    desc ={el.description}
                  />
                );
              })
     }
     </div>



     <div className='pt-5 flex flex-row justify-center' >
    <hr className='mt-4 md:w-96 h-1 bg-red-900' />
       <div className=' flex  '> 
       <h1 className='text-3xl  font-bold text-red-900 pr-2 ' >Bestseller </h1>
       <h1 className='text-3xl font-thin text-red-900 ' > Products </h1>
     </div>
     <hr className='mt-4 md:w-96 h-1 bg-red-900' />
     </div>
       

      

      
     

     <div className='  sm:w-auto md:w-[78rem] h-[19rem] md:relative left-16 flex flex-row mt-3   overflow-scroll overflow-y-hidden scrollbar-none scroll-smooth transition-all border-[1px] border-black ' >
       
            
    



     <div className='  w-full sm:invisible md:visible  mt-28 absolute z-20 flex justify-between'>
     <div className='absolute   z-40 top-[1.2rem]  '>
     <button className='text-3xl font-bold bg-red-600 hover:bg-amber-400 rounded-md' onClick={privious} ><GrPrevious/></button>
     </div>

     <div className= ' absolute right-[0rem] top-[1.2rem] z-30'>
     <button className='text-3xl font-bold  bg-red-600 hover:bg-amber-400 rounded-md ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     {
     sw.map((el, index) => {
     
                return (
                 
                  <Mycard
                    id={el._id}
                    name={el.Name}
                    catego={el.product_name}
                    price={el.prise}
                    image={el.img1}
                    quant ={el.quantity}
                    discount = {el.discount}
                    desc ={el.description}
                  />
                );
              })
     }
     </div>

    </div>

    {/* <div  className='relative w-full bottom-0 top-20 '>
       <Footer/>
       </div> */}


       <div className='flex h-[70vh] bg-[#f8ecd8] relative top-14'>
       {/* <div>
        <img src={ad} alt='ad' className='w-96'/>
       </div> */}
          
       <div className='ml-36 mt-10'>
        <img src={ad} alt='ad2' className='w-auto h-96'/>
       </div>


       <div className=' absolute right-96 top-10'>
            <div className='text-3xl  font-bold  text-red-900'>
            <h1>About Us</h1>

            </div> 
       </div>

{/*           
       <div>
        <img src={ad3} alt='ad3' className='w-auto h-96'/>
       </div> */}
       </div>


       <div className='mt-32'>
        <Footer />
       </div>
    </div>
    
  )
}

export default Home



