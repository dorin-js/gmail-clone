import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authentificatedUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authentificatedUser = action.payload;
    },
    logout: (state) => {
      state.authentificatedUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectAuthentificatedUser = (state) =>
  state.user.authentificatedUser;

export default userSlice.reducer;
