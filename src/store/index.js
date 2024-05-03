import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./apis/productsApi";
import { cartApi } from "./apis/cartApi";
import { prodCateReducer } from "./slices/prodCateSlice";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        prodCateSlice: prodCateReducer,
        cartSlice: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                .concat(productApi.middleware)
                .concat(cartApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useFetchProductsQuery } from "./apis/productsApi"
export { useFetchCartQuery, useAddToCartMutation  } from "./apis/cartApi"
export { AddManyProducts } from "./slices/prodCateSlice"
export { AddToCart, AddToCartAll } from "./slices/cartSlice"