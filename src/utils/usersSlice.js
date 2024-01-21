import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    form1: {},
  },
  reducers: {
    fillForm1: (state, action) => {
      state.form1 = { ...action.payload };
    },

    addUser: (state, action) => {
      state.usersList.push({ ...state.form1, ...action.payload });
    },
  },
});

export const { fillForm1, addUser } = usersSlice.actions;

export default usersSlice.reducer;
