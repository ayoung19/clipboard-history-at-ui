import React, { useEffect, useRef, useState } from "react";
import { TableRow } from "./TableRow";

export const Table = ({ rowHeight }) => {
  const [history, setHistory] = useState([]);
  const [range, setRange] = useState([0, 0]);
  const tableRef = useRef();

  useEffect(() => {
    chrome.storage.local.get("clipboard-history", (result) => {
      setHistory(result["clipboard-history"] || []);
    });
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      //updateRange();
      setRange([0, 20]);
    }
  }, [history]);

  const updateRange = (event) => {
    const curr = getRange(event);

    if (range[0] !== curr[0] || range[1] !== curr[1]) {
      setRange(curr);
    }
  };

  console.log("render");

  // get the range of rows to render based on current view
  const getRange = (event) => {
    // topmost row in view(will be the 1/3rd row in all rows)
    let row = Math.floor(event.target.scrollTop / rowHeight);
    // number of viewable elements
    let elems = Math.floor(event.target.offsetHeight / rowHeight);
    // top most rendered row
    let renderStart = row - elems + 1;
    // total length of rendered rows(1/3 are above screen and 1/3 are below screen)
    let renderLength = 3 * elems;

    console.log(row, elems, renderStart, renderLength, history.length)

    // top off rendered rows
    if (row < elems) {
      return [0, renderLength];
    }

    // bottom off rendered rows
    if (row > history.length - renderLength + elems) {
      return [history.length - renderLength, history.length + 1];
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

  return (
    <div className="relative w-table h-table overflow-y-scroll" onScroll={updateRange} ref={tableRef}>
      <div style={{ height: `${history.length * rowHeight}px` }}>
        {getRows()}
      </div>
    </div>
  );
};
