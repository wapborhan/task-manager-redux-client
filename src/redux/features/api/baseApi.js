import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => `/posts`,
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    getUser: builder.query({
      query: () => `/user`,
    }),
  }),
});

export const { useGetPostQuery, useGetUserQuery, useGetPostByIdQuery } =
  baseApi;

export default baseApi;
