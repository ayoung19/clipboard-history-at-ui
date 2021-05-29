import React from "react";
import { Action } from "./Action";
import { classNames } from "../utils";

export const Favorite = ({ favorited, disabled, onClick }) => {
  return (
    <Action disabled={disabled} onClick={onClick}>
      <i
        className={classNames(
          "feather",
          favorited ? "icon-star-on text-yellow-500" : "icon-star"
        )}
      />
    </Action>
  );
};
