import React, { useEffect, useState } from "react";
import { classNames, Type } from "../util/helpers";
import { Checkbox } from "./Checkbox";
import Tippy from "@tippyjs/react";
import { add } from "../store/messages";
import { useAppDispatch } from "../util/hooks";

export const TableRow = ({ rowHeight, index, text }) => {
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
      chrome.runtime.sendMessage({ type: "copy", payload: text });
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
      <div
        className={classNames(
          "absolute transition duration-300 border-t border-gray-100 cursor-pointer transform scale-100 flex items-center w-full",
          checked ? "bg-bg-light" : "hover:bg-bg-lighter",
          flash ? "flash" : ""
        )}
        onClick={clickHandler}
        style={{
          transform: `translateY(${rowHeight * index}px)`,
          height: `${rowHeight}px`,
        }}
      >
        <div className="px-4 w-col1">
          <Checkbox checked={checked} setChecked={setChecked} />
        </div>
        <div className="px-4 flex-grow min-w-0 truncate select-none text-brand-text">
          {text}
        </div>
      </div>
    </Tippy>
  );
};
