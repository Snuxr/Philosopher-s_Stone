import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const productApi = createApi({
    reducerPath:'products',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.escuelajs.co/api/v1'
    }),
    endpoints: (builder) => {
        return {
            fetchProducts: builder.query({
                query: () => {
                    return {
                        url: '/products',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export { productApi };
export const { useFetchProductsQuery } = productApi;