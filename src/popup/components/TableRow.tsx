import React, { useEffect, useState } from "react";
import { classNames, Type } from "../util/helpers";
import { Checkbox } from "./Checkbox";
import Tippy from "@tippyjs/react";
import { add } from "../store/messages";
import { useAppDispatch } from "../util/hooks";

export const TableRow = ({ item }) => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (flash) {
      setTimeout(() => {
        setFlash(false);
      }, 1000);
    }
  }, [flash]);

  const clickHandler = () => {
    if (!flash) {
      chrome.runtime.sendMessage({ type: "copy", payload: item });
      setFlash(true);
      dispatch(
        add({
          type: Type.success,
          text: "Item has been copied to clipboard!",
        })
      );
    }
  };

  return (
    <Tippy
      content={
        <span className="bg-bg-black bg-opacity-75 text-white px-2 py-1 rounded">
          Click to copy
        </span>
      }
      delay={[750, null]}
    >
      <tr
        className={classNames(
          "transition duration-300 border-t border-b border-gray-100 cursor-pointer transform scale-100",
          checked ? "bg-bg-light" : "hover:bg-bg-lighter",
          flash ? "example" : ""
        )}
        onClick={clickHandler}
      >
        <td className="px-4 py-3">
          <Checkbox checked={checked} setChecked={setChecked} />
        </td>
        <td className="px-4 py-3 truncate select-none text-brand-text">
          {item}
        </td>
      </tr>
    </Tippy>
  );
};
