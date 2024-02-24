import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";

const store = configureStore({
  reducer: {
    taskStore: taskSlice,
  },
});

export default store;
