import { createSlice } from "@reduxjs/toolkit";
import { TbTextColor } from "react-icons/tb";
// import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
  dtList:[],
};

 const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
     
    add:(state ,action) =>{
      state.dtList= action.payload;   
    },


    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      console.log( " here is action data ",action)
      
      const check = state.cartItem.some((el) => el._id === action.payload._id);
     
       var total =0;
      if (check) {
        alert("Already Item in Cart" );
      } else {
        // toast("Item Add successfully");
         total = action.payload.price;
        console.log("total is here ----> " , total)
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total  },
        ];
      }
    },
    deleteCartItem: (state, action) => {
      // toast("one Item Delete");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      const price = state.cartItem[index].price;
      const total = price * qtyInc;

      state.cartItem[index].total = total;
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDec = --qty;
        state.cartItem[index].qty = qtyDec;

        const price = state.cartItem[index].price;
        const total = price * qtyDec;

        state.cartItem[index].total = total;
      }
    },
  },
});

export const {
  add,
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} =productSlice.actions;

export default productSlice.reducer;