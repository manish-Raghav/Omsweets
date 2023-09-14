import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productslice"



const store= configureStore({
    reducer:{
     productcart:productSlice
    },
})

export default store