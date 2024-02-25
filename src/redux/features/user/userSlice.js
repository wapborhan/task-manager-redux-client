import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Borhan Uddin",
    email: "borhanuddin979@gmail.com",
    usertasks: [],
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
