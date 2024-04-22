import { createSlice } from '@reduxjs/toolkit'

const prodCateSlice = createSlice({
    name: 'prodCate',
    initialState: {
        categories: [
            {
                id: 1,
                title: "Clothes"
            },
            {
                id: 2,
                title: "Dope"
            },
            {
                id: 3,
                title: "Electronics"
            },
            {
                id: 4,
                title: "Furniture"
            },
            {
                id: 5,
                title: "Shoes"
            }
        ],
        products: []
    },
    reducers: {
        AddManyProducts(state, action) {
            state.products = action.payload
        }
    }
})

export const {
    AddManyProducts
} = prodCateSlice.actions;
export const prodCateReducer = prodCateSlice.reducer;