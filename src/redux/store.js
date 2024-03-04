import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import userSlice from "./features/user/userSlice";
import baseApi from "./features/api/baseAPi";
import testApi from "./features/api/testAPI";

const store = configureStore({
  reducer: {
    taskStore: taskSlice,
    userStore: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, testApi.middleware),
  // getDefaultMiddleware().concat(testApi.middleware),
});

export default store;
