import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ordersApi = createApi({
    reducerPath:'order',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:5000'
    }),
    endpoints: (builder) => {
        return {
            fetchOrder: builder.query({
                query: () => {
                    return {
                        url:'/orders',
                        method:'GET'
                    }
                }
            }),
            createOrder: builder.mutation({
                query: (order) => {
                    return {
                        url:'/orders',
                        method:'POST',
                        body:order
                    }
                }
            })
        }
    }
})

export { ordersApi };
export const { useFetchOrderQuery, useCreateOrderMutation } = ordersApi;