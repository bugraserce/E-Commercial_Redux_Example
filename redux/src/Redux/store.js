import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/productSlice"
import cartSlice from "../Features/cartSlice"

 const reduxStore =  configureStore({

    reducer : {
        productsStore: productSlice,
        cartStore : cartSlice
    }

})


export default reduxStore