import React from 'react'
import { useSelector } from 'react-redux'
import Cartproduct from '../Components/Cartproduct'



const Cart = () => {
    console.log('we are hre in cart')
     
     const data= useSelector((stat) => stat.productcart.cartItem);
    console.log("ha ha ha ha ha  ==>" ,data);

     const totalPrice = data.reduce(
      (acc, curr) => acc + parseInt(curr.total),
      0
    );
    const totalQty = data.reduce(
      (acc, curr) => acc + parseInt(curr.qty),
      0
    );

    const handlePayment = ()=>{

    }
  return (
    <div className=' flex justify-center flex-row   '>
        <div  className=' mt-20 mx-6  '>
       <div className="  flex justify-center p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>
        </div>

        {data[0] ?
        <div className="  md:flex  md:gap-4 ">
           
        
          <div className="  w-full max-w-3xl  ">
             {data.map((el) => {
              return (
                <Cartproduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.img}
                  catego={el.catego}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                  quant={el.quant}
                />
              );
            })}
          </div>

          {/* total cart item  */}

          
          <div className="w-full my-20 md:my-0  md:ml-14 ">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>
            <button className="bg-red-500 w-full text-lg font-bold py-2 text-white" onClick={handlePayment}>
              Payment
            </button>
          </div>




        </div>

        : 
        <>
          <div className="flex w-full justify-center items-center flex-col">
            {/* <img src={emptyCartImage} className="w-full max-w-sm"/> */}
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        </>
      }
      </div> 
    
    </div>
  )
}

export default Cart
