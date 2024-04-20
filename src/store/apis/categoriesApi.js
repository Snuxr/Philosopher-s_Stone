import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoriesApi = createApi({
    reducerPath:'categories',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:5000'
    }),
    endpoints: (builder) => {
        return {
            fetchCategories: builder.query({
                query: () => {
                    return {
                        url:'/categories'
                    }
                }
            })
        }
    }
})

export { categoriesApi };
export const { useFetchCategoriesQuery } = categoriesApi