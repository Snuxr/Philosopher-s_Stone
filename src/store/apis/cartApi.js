import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
    reducerPath:'cart',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:5000'
    }),
    endpoints: (builder) => {
        return {
            fetchCart: builder.query({
                query: () => {
                    return {
                        url:'/cart',
                        method:'GET'
                    }
                }
            }),
            addToCart: builder.mutation({
                query: (cart) => {
                    return {
                        url:'/cart',
                        method:'POST',
                        body:cart
                    }
                }
            }),
            deleteCart: builder.mutation({
                query: (cart_id) => {
                    return {
                        url:`/cart/${cart_id}`,
                        method:'DELETE',
                    }
                }
            })
        }
    }
})

export { cartApi };
export const { useFetchCartQuery, useAddToCartMutation, useDeleteCartMutation } = cartApi