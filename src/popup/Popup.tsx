import React, { useEffect, useState } from "react";
import { TableRow } from "./components/TableRow";

export const Popup = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    chrome.storage.local.get("clipboard-history", (result) => {
      setHistory(result["clipboard-history"] || []);
    });
  }, []);

  const resetHandler = () => {
    chrome.storage.local.set({ "clipboard-history": [] }, () => {});
  };

  return (
    <div>
      <table className="w-full table-fixed">
        <colgroup>
          <col width="50"></col>
          <col width="650"></col>
        </colgroup>
        <tbody>
          {history.reverse().map((item) => (
            <TableRow item={item.replace("\n", "")} />
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-12"></div>

      <button onClick={resetHandler}>reset</button>
    </div>
  );
};
