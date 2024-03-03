import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3300",
  }),
  tagTypes: ["Task"],

  endpoints: (builder) => ({}),
});

export const { useGetTaskQuery, useUpdateStatusMutation } = baseApi;

export default baseApi;
