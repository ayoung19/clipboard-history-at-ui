import React from "react";
import { classNames } from "../utils";

//disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black-50
export const Action = ({ children, disabled, onClick }) => {
  const handleClick = (event) => {
    if (!disabled) {
      onClick(event);
    } else {
      event.stopPropagation();
    }
  }
  
  return (
    <span
      className={classNames(
        "rounded px-2 py-1 text-base",
        disabled ? "cursor-not-allowed text-black-50" : "cursor-pointer text-black-100 hover:text-black-500 hover:bg-border-light"
      )}
      onClick={handleClick}
    >
      {children}
    </span>
  );
};
