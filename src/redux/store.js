import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    taskStore: taskSlice,
    userStore: userSlice,
  },
});

export default store;
