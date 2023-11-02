import React from 'react'
import {RxCross1} from 'react-icons/rx'
//{seopen,ope}
//seopen(false)
const Cardinfo = ({data, id, name, img  ,cat, ps ,  quant, dis, desc}) => {
  return (
    <div className='bg-white'>
    <div className='fixed w-full h-screen mt-8 bg-[#00000030] top-0 left-0 z-40 flex items-center justify-center'>
     <div className='w-[90%] 800px:w-[60%] h-[70vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4'>
          <RxCross1 size={30} className=' fixed absolute right-3 top-3 z-50'
           onClick={()=>data(false)}
          />


         <div className='flex md:flex-col'>
            <div>
                <img src={`http://localhost:4000/${img}`} alt='img' className='bg-cover w-[30vw] h-[40vh] 800px:w[50vw] rounded-md' />
            </div>

            <div className='flex flex-col relative left-10'> 
            <div>
            <h1>{name}  </h1>
            </div>
            <div>
             <p>
                {desc}
             </p>
            </div>

          <div>
           <h4>{quant}</h4> 
          </div>
          

           <button>Add to cart</button>
            </div>
         </div> 
     </div>
    </div>
    </div>
  )
}

export default Cardinfo
