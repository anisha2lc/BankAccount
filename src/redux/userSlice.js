import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  users: [],
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUsers: (state, action) => {
      const id = nanoid();
      const userData = action.payload;
      userData.id = id;
      state.users.push(userData);
    },
    signInUser: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { storeUsers, signInUser, signOutUser } = userSlice.actions;

export default userSlice.reducer;
