import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    form1: {},
    countryTyped: "",
  },
  reducers: {
    fillForm1: (state, action) => {
      state.form1 = { ...action.payload };
    },

    addUser: (state, action) => {
      state.usersList.push({ ...state.form1, ...action.payload });
    },

    changeCountry: (state, action) => {
      state.countryTyped = action.payload;
    },

    clearFields: (state, action) => {
      state.form1 = {};
      state.countryTyped = "";
    },
  },
});

export const { fillForm1, addUser, changeCountry, clearFields } =
  usersSlice.actions;

export default usersSlice.reducer;
