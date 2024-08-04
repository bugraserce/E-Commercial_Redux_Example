import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    totalQuantity: 0,
    totalAmount: 0

}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart: (store,action) => {
            const indexOfProduct = store.items.findIndex(item => item.id === action.payload.id)
            if(indexOfProduct >=0) {
                store.items[indexOfProduct].quantity +=1;
            } else {
                const newItem = {...action.payload,quantity: 1}
                store.items.push(newItem)
                store.totalQuantity+=1
            }

            store.totalAmount = store.totalAmount + action.payload.price ;
        },

        removeItem: (store,action) => {
            const indexOfProduct = store.items.findIndex((item) => item.id === action.payload)
            store.totalQuantity-=1;
            store.totalAmount = (store.items[indexOfProduct].price * store.items[indexOfProduct].quantity)
            store.items.splice(indexOfProduct,1)
        }


    }


})

export const {addToCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer
