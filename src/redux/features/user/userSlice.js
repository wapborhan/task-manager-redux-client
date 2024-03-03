import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../../utils/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const initialState = {
  name: "",
  email: "",
  avatar: "",
  isLoading: true,
  isError: false,
  error: "",
  // usertasks: [],
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password, name, photoLink }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoLink,
    });
    // console.log(`data`, data);

    return {
      name: data.user.displayName,
      avatar: data.user.photoURL,
      email: data.user.email,
    };
  }
);

export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data);
  }
);
export const signOutUser = createAsyncThunk(
  "userSlice/signOutUser",
  async () => {
    await signOut(auth);
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.avatar = payload.avatar;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.avatar = payload.avatar;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, actions) => {
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.isLoading = false;
        state.isError = true;
        state.error = actions.error.message;
      });
    builder.addCase(signOutUser.fulfilled, (state) => {
      state.name = "";
      state.email = "";
    });
    builder
      .addCase(loginUser.pending, (state) => {
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.email = payload.email;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, actions) => {
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.isLoading = false;
        state.isError = true;
        state.error = actions.error.message;
      });
  },
});

export const { setUser, toggleLoading } = userSlice.actions;

export default userSlice.reducer;
