import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const productApi = createApi({
    reducerPath:'products',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:5000'
    }),
    endpoints: (builder) => {
        return {
            fetchProducts: builder.query({
                query: () => {
                    return {
                        url: '/products?_limit=7',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export { productApi };
export const { useFetchProductsQuery } = productApi;