import React, { useState } from "react";
import { classNames } from "../utils";

export const Favorite = ({ favorited, onClick }) => {
  return (
    <span
      className="rounded px-2 py-1 cursor-pointer text-base hover:bg-border-light text-black-100 hover:text-black-500"
      onClick={onClick}
    >
      <i
        className={classNames(
          "feather",
          favorited ? "icon-star-on text-yellow-500" : "icon-star"
        )}
      />
    </span>
  );
};
