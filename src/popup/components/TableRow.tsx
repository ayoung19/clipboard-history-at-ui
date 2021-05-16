import React, { useState } from "react";
import { classNames } from "../util/helpers";
import { Checkbox } from "./Checkbox";

export const TableRow = ({ item }) => {
  const [checked, setChecked] = useState(false);

  const clickHandler = () => {
    chrome.runtime.sendMessage({ type: "copy", payload: item });
  };
  return (
    <tr
      className={classNames(
        "transition border-t border-b border-gray-100 cursor-pointer transform scale-100",
        checked ? "bg-bg-light" : "hover:bg-bg-lighter"
      )}
      onClick={clickHandler}
    >
      <td className="px-4 py-3">
        <Checkbox checked={checked} setChecked={setChecked} />
      </td>
      <td className="px-4 py-3 truncate select-none">{item}</td>
    </tr>
  );
};
