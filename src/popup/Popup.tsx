import React, { useEffect, useState } from "react";
import { Checkbox } from "./components/Checkbox";

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
            <tr className="transition hover:bg-blue-100 cursor-pointer">
              <td className="border-t border-b px-4 py-3">
                <Checkbox />
              </td>
              <td className="border-t border-b px-4 py-3 truncate select-none">
                {item.replace("\n", "")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-12"></div>

      <button onClick={resetHandler}>reset</button>
    </div>
  );
};
