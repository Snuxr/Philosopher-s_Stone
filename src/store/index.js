import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./apis/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                .concat(productApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useFetchProductsQuery } from "./apis/productsApi"