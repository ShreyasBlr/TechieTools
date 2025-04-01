import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5, // Keep data for 5 seconds before refetching
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
