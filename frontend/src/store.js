import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./fearures/counter/counterSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
