import React, { useEffect, useRef, useState } from "react";
import { TableRow } from "./TableRow";

export const Table = ({ rowHeight }) => {
  const [history, setHistory] = useState([]);
  const [range, setRange] = useState([0, 0]);
  const historyRef = useRef(history);
  const rangeRef = useRef(range);

  useEffect(() => {
    chrome.storage.local.get("clipboard-history", (result) => {
      setHistory(result["clipboard-history"] || []);
      historyRef.current = result["clipboard-history"];
    });

    document.addEventListener("scroll", () => {
      const prev = rangeRef.current;
      const curr = getRange();

      if (prev[0] !== curr[0] || prev[1] !== curr[1]) {
        updateRange(curr);
      }
    });
  }, []);

  useEffect(() => {
    if (historyRef.current.length > 0) {
      updateRange(getRange());
    }
  }, [history]);

  const updateRange = (newRange) => {
    setRange(newRange);
    rangeRef.current = newRange;
  };

  console.log(range)

  // get the range of rows to render based on current view
  const getRange = () => {
    // topmost row in view(will be the 1/3rd row in all rows)
    let row = Math.floor(document.documentElement.scrollTop / rowHeight);
    // number of viewable elements
    let elems = Math.floor(window.innerHeight / rowHeight);
    // top most rendered row
    let renderStart = row - elems + 1;
    // total length of rendered rows(1/3 are above screen and 1/3 are below screen)
    let renderLength = 3 * elems;

    console.log(row, elems, renderStart, renderLength, historyRef.current.length)

    // top off rendered rows
    if (row < elems) {
      return [0, renderLength];
    }

    // bottom off rendered rows
    if (row > historyRef.current.length - renderLength + elems) {
      return [historyRef.current.length - renderLength, historyRef.current.length + 1];
    }

    // return the range of rendered rows
    return [renderStart, renderStart + renderLength];
  };

  let getRows = () => {
    return Array.from(Array(range[1] - range[0]).keys()).map((i) => {
      return (
        <TableRow
          key={range[0] + i}
          text={history[range[0] + i].replace("\n", "")}
          index={range[0] + i}
          rowHeight={rowHeight}
        />
      );
    });
  };

  return <div style={{ height: `${historyRef.current.length * rowHeight}px` }}>{getRows()}</div>;
};
