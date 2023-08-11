import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [
    {
      name: "John",
      admin: true,
    },
    {
      name: "Jack",
      admin: true,
    },
  ],
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = false;
    },
    createUser: (state, action) => {
      state.users.unshift(action.payload);
      state.loading = false;
    },
    deleteUser: (state, action) => {
      state.users.filter((user) => user.id !== action.payload.id);
      state.loading = false;
    },
  },
});

export const { createUser, deleteUser, getUser } = userSlice.actions;

export default userSlice.reducer;
