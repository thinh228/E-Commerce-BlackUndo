import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Features/auth/authSlice";
import { authReducer } from "./Features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
  