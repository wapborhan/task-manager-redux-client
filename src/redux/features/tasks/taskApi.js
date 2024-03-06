import baseApi from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => `/tasks`,
      providesTags: ["Task"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    updateStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTaskQuery,
  useAddTaskMutation,
  useUpdateStatusMutation,
  useDeleteTaskMutation,
} = taskApi;
