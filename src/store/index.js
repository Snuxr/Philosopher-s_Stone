import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./apis/productsApi";
import { cartApi } from "./apis/cartApi";
import { prodCateReducer } from "./slices/prodCateSlice";
import { cartReducer } from "./slices/cartSlice";
import { ordersApi } from "./apis/ordersApi";
import { orderReducer } from "./slices/ordersSlice";

export const store = configureStore({
    reducer: {
        prodCateSlice: prodCateReducer,
        cartSlice: cartReducer,
        ordersSlice: orderReducer,
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                .concat(productApi.middleware)
                .concat(cartApi.middleware)
                .concat(ordersApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useFetchProductsQuery } from "./apis/productsApi"
export { useFetchCartQuery, useAddToCartMutation, useDeleteCartMutation } from "./apis/cartApi"
export { useFetchOrderQuery, useCreateOrderMutation  } from "./apis/ordersApi"
export { AddManyProducts } from "./slices/prodCateSlice"
export { AddToCart, AddToCartAll } from "./slices/cartSlice"
export { AddAllOrders, AddSingleOrders } from "./slices/ordersSlice"