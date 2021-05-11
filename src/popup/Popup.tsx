import React, { useEffect, useState } from "react";

export const Popup = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    chrome.storage.local.get("clipboard-history", (result) => {
      setHistory(result["clipboard-history"] || []);
    });
  }, []);

  const resetHandler = () => {
    chrome.storage.local.set({ "clipboard-history": [] }, () => {});
  }

  return (
    <div className="w-custom h-custom overflow-y-scroll">
      {history.reverse().map((item) => <div className="w-full truncate">{item.replace("\n", "")}</div>)}
      <button onClick={resetHandler}>reset</button>
    </div>
  );
}
