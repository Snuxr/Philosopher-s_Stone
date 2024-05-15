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
        },
        DeleteCart:(state, action) => {
            const filteredCart = state.cart.filter((cart_prod) => {
                return cart_prod.id !== action.payload
            })
            state.cart = filteredCart;
        }
    }
})

export const {
    AddToCart,
    AddToCartAll,
    DeleteCart
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer