import baseApi from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => `/tasks`,
      providesTags: ["Task"],
    }),
    // getPostById: builder.query({
    //   query: (id) => `/tasks/${id}`,
    // }),
    updateStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const { useGetTaskQuery, useUpdateStatusMutation } = taskApi;
