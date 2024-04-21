import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./apis/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "./apis/categoriesApi";
import { prodCateReducer } from "./slices/prodCateSlice";

export const store = configureStore({
    reducer: {
        prodCateSlice: prodCateReducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                .concat(productApi.middleware)
                .concat(categoriesApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useFetchProductsQuery } from "./apis/productsApi"
export { useFetchCategoriesQuery } from "./apis/categoriesApi"
export { AddManyProducts } from "./slices/prodCateSlice"