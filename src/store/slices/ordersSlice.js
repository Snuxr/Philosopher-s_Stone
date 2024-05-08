import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: 'orders',
    initialState:{
        orders:[]
    },
    reducers: {
        AddAllOrders: (state, action) => {
            state.orders = action.payload;
        },
        AddSingleOrders: (state, action) => {
            state.orders.push(action.payload);
        },
    }
})

export const {
    AddAllOrders,
    AddSingleOrders
} = ordersSlice.actions;
export const orderReducer = ordersSlice.reducer;