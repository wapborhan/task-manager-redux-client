import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const testApi = createApi({
  reducerPath: "testApi",
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
      query: () => ({
        url: `/users`,
      }),
    }),
    setPost: builder.mutation({
      query: (post) => ({
        url: `/posts`,
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const {
  useGetPostQuery,
  useGetUserQuery,
  useGetPostByIdQuery,
  useSetPostMutation,
} = testApi;

export default testApi;
