import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { v4 as uuidv4 } from "uuid";
import { Type } from "../util/helpers";

interface Message {
  id: string;
  type: Type;
  text: string;
}

interface MessagesState {
  messages: Array<Message>;
}

// Define the initial state using that type
const initialState: MessagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    // TODO: figure out how to use ts magic to enforce payload props: type, text
    add: (state, action) => {
      state.messages.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    remove: (state) => {
      state.messages.shift();
    },
  },
});

export const { add, remove } = messagesSlice.actions;

export const selectMessages = (state: RootState) => state.messages.messages;

export default messagesSlice.reducer;
