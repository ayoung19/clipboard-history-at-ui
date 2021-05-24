import React, { useEffect, useState } from "react";
import { classNames, useAppDispatch } from "../utils";
import { Type } from "../enums";
import { Checkbox } from "./Checkbox";
import Tippy from "@tippyjs/react";
import { addMessage, toggleChecked } from "../store/actions";

export const TableRow = ({ id, index, rowHeight, text, checked }) => {
  const dispatch = useAppDispatch();
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
      chrome.runtime.sendMessage({ type: "copy", payload: text });
      setFlash(true);
      dispatch(addMessage(Type.success, "Item has been copied to clipboard!"));
    }
  };

  const checkHandler = (event) => {
    event.stopPropagation();
    dispatch(toggleChecked(id));
  }

  return (
    <Tippy
      content={
        <span className="bg-bg-black bg-opacity-75 text-white px-2 py-1 rounded">
          Click to copy
        </span>
      }
      delay={[750, null]}
    >
      <div
        className={classNames(
          "absolute transition duration-300 border-t border-gray-100 cursor-pointer transform scale-100 flex items-center",
          checked ? "bg-bg-light" : "hover:bg-bg-lighter",
          flash ? "flash" : ""
        )}
        onClick={clickHandler}
        style={{
          transform: `translateY(${rowHeight * index}px)`,
          height: `${rowHeight}px`,
        }}
      >
        <div className="w-col1 inline-block px-4">
          <Checkbox checked={checked} onClick={checkHandler} />
        </div>
        <div className="w-col2 inline-block px-4 truncate select-none text-brand-text">
          {text}
        </div>
      </div>
    </Tippy>
  );
};
