import React from "react";
import { classNames, Type } from "../util/helpers";

export const Message = ({ text, index, type }) => {
  const TYPE_TO_CLASSNAME = {
    [Type.success]: "icon-check-circle text-green-300",
    [Type.error]: "icon-x-circle text-red-300",
    [Type.warning]: "icon-alert-circle text-yellow-300",
    [Type.info]: "icon-info text-blue-300",
  };
  
  return (
    <div
      className="fixed right-4 z-10 px-4 py-2 bg-white rounded text-brand-text shadow-toast"
      style={{
        top: `${16 + index * 50}px`,
        transition: "transform 300ms ease, top 300ms ease, opacity 300ms ease",
      }}
    >
      <i className={classNames("feather mr-3", TYPE_TO_CLASSNAME[type])} />
      <span>{text}</span>
    </div>
  );
};

export { Type };
