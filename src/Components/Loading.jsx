import React, { useState } from 'react'


import PropagateLoader from "react-spinners/PropagateLoader";
const Loading = () => {
    const [color,setclr] = useState('#880808')
  return (
    <div className='flex justify-center items-center '>
       <PropagateLoader 
        color= {color}
        loading={true}
        

        />
    </div>
  )
}

export default Loading
