import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:[]
    },
    reducers: {
        AddToCartAll:(state, action) => {
            state.cart = action.payload
        },
        AddToCart:(state, action) => {
            state.cart.push(action.payload)
        }
    }
})

export const {
    AddToCart,
    AddToCartAll
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer
