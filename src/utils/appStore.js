import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";

const appStore = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default appStore;
