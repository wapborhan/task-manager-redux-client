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
    removeTask: (state, { payload }) => {
      state.task.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.task.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
  },
});

export const { addTask, removeTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;
