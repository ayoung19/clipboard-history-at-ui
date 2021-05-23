import React, { useEffect, useRef, useState } from "react";
import { TableRow } from "./TableRow";

export const Table = ({ rowHeight }) => {
  const [history, setHistory] = useState([]);
  const [range, setRange] = useState([0, 0]);
  const rangeRef = useRef(range);

  useEffect(() => {
    chrome.storage.local.get("clipboard-history", (result) => {
      result["clipboard-history"].reverse();
      setHistory(result["clipboard-history"] || []);
    });
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      console.log("add listener");
      updateRange();
      document.addEventListener("scroll", updateRange);
    }
  }, [history]);

  const updateRange = () => {
    const prev = rangeRef.current;
    const curr = getRange();

    if (prev[0] !== curr[0] || prev[1] !== curr[1]) {
      setRange(curr);
      rangeRef.current = curr;
    }
  };

  const getRange = () => {
    const row = Math.floor(document.documentElement.scrollTop / rowHeight);
    const elems = Math.floor(window.innerHeight / rowHeight);

    const renderStart = Math.max(row - elems + 1, 0);
    const renderLength = 3 * elems;

    return [renderStart, renderStart + renderLength];
  };

  return (
    <div style={{ height: `${history.length * rowHeight}px` }}>
      {history.slice(...range).map((item, i) => (
        <TableRow
          key={range[0] + i}
          index={range[0] + i}
          text={item.value.replace("\n", "")}
          rowHeight={rowHeight}
        />
      ))}
    </div>
  );
};
