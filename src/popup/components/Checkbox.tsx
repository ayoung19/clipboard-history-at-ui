import React, { useState } from "react";
import { classNames } from "../util/helpers";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      htmlFor=""
      className={classNames(
        "transition-all w-checkbox h-checkbox rounded flex justify-center items-center cursor-pointer hover:border-blue-400",
        checked ? "bg-blue-400" : "bg-white border"
      )}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <span
        className={classNames(
          "transition w-1 h-2 border-b-2 border-r-2 border-white transform rotate-45",
          checked ? "scale-100" : "scale-0"
        )}
      ></span>
      <input type="checkbox" className="hidden" />
    </label>
  );
};
