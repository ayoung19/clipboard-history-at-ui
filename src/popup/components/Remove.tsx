import React from "react";
import { Action } from "./Action";

export const Remove = ({ disabled, onClick }) => {
  return (
    <Action onClick={onClick} disabled={disabled}>
      <i className="feather icon-trash-2" />
    </Action>
  );
};
