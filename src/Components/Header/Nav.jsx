import React from "react"
import { Link } from 'react-router-dom'



const Nav = () => {
  // const arr = [{name:"home"} ,{name:"sweet"}, {name:"bakeries"},{name:"chocolates"},{name:"food"}];
  return (
 
         
        
          
              
                 <div className="flex gap-4">
                 <Link to='/' className='font-serif text-xl hover:text-red-700 focus:text-red-700'>HOME</Link>
               
               <Link to='/Sweet ' className='font-serif text-xl  hover:text-red-700 focus:text-red-700'>SWEET</Link>
              
               <Link to='/Bakerie' className='font-serif text-xl hover:text-red-700 focus:text-red-700'>BAKERIES</Link>
               <Link to='/Chocolate' className='font-serif text-xl  hover:text-red-700 focus:text-red-700'>CHOCOLATES</Link>
               <Link to='/Food' className='font-serif text-xl hover:text-red-700 focus:text-red-700'>FOODS</Link>
                </div>
         

   
  )
}

export default Nav
