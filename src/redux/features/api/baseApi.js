/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3300",
  }),
  tagTypes: ["Task"],
  /*eslint no-unused-vars: "error"*/
  endpoints: (builder) => ({}),
});

export const { useGetTaskQuery, useUpdateStatusMutation } = baseApi;

export default baseApi;
