import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        // state.task.push({ id: state.task.length + 1, ...payload });
        state.task.push({
          id: state.task.at(-1).id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
