import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messages";

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;