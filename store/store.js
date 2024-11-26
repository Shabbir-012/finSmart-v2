import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false, // Disable serializable checks
  //   }),
});

export default store;
