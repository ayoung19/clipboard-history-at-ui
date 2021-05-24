import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Messages } from "./components/Messages";
import { Table } from "./components/Table";

export const Popup = () => {
  return (
    <Provider store={store}>
      <Messages />
      <Table rowHeight={40} />
    </Provider>
  );
};
