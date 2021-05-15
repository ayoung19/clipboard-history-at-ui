import React from "react";
import { Checkbox } from "./Checkbox";

export const TableRow = ({ item }) => {

  const clickHandler = () => {
    chrome.runtime.sendMessage({ type: "copy", payload: item });
  }
  return (
    <tr
      className="transition hover:bg-blue-100 cursor-pointer transform scale-100"
      onClick={clickHandler}
    >
      <td className="border-t border-b px-4 py-3">
        <Checkbox />
      </td>
      <td className="border-t border-b px-4 py-3 truncate select-none">
        {item}
      </td>
    </tr>
  );
};
