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
      userData.totalbalance = action.payload.deposit;
      state.users.push(userData);
    },
    signInUser: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutUser: (state) => {
      state.currentUser = null;
    },
    amountWithDraw: (state, action) => {
      const withdraw = Number(action.payload);

      const userId = state.currentUser.id;
      state.users = state.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            totalbalance: Number(user.totalbalance) - withdraw,
          };
        }
        return user;
      });

      state.currentUser = state.users.find((user) => user.id === userId);
    },
    depositAmount: (state, action) => {
      const deposit = Number(action.payload);

      const id = state.currentUser.id;

      state.users = state.users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            totalbalance: Number(user.totalbalance) + deposit,
          };
        }
        return user;
      });

      state.currentUser = state.users.find((user) => user.id === id);
    },
  },
});

export const {
  storeUsers,
  signInUser,
  signOutUser,
  depositAmount,
  amountWithDraw,
} = userSlice.actions;

export default userSlice.reducer;
