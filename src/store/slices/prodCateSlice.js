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
                title: "Electronics"
            },
            {
                id: 3,
                title: "Furniture"
            },
            {
                id: 4,
                title: "Shoes"
            },
            {
                id: 5,
                title: "Miscellaneous"
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