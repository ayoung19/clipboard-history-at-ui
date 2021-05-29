import React, { useEffect, useRef, useState } from "react";
import { hydrate } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../utils";
import { TableRow } from "./TableRow";
import { Favorite } from "./Favorite";
import { Remove } from "./Remove";
import { Checkbox } from "./Checkbox";
import { favoriteItems, removeItems } from "../store/actions";

export const Table = ({ rowHeight }) => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.history);
  const checked = useAppSelector((state) => state.checked);
  const [range, setRange] = useState([0, 0]);
  const rangeRef = useRef(range);

  useEffect(() => {
    chrome.storage.local.get("storage", (result) => {
      const history = result["storage"].history.reverse() || [];
      const favorites = result["storage"].favorites;
      console.log(history, favorites);
      dispatch(hydrate(history, favorites));
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

  
  console.log(checked, history);

  return (
    <div style={{ height: `${history.length * rowHeight}px` }}>
      <div
        className="flex items-center"
        style={{
          height: `${rowHeight}px`,
        }}
      >
        <div className="w-col1 inline-block px-4">
          <Checkbox checked={false} onClick={() => {}} />
        </div>
        <div className="w-col3 inline-block">
          <Favorite
            favorited={false}
            disabled={checked.length === 0}
            onClick={() => {
              dispatch(favoriteItems(checked));
            }}
          />
          <Remove
            disabled={checked.length === 0}
            onClick={() => {
              dispatch(removeItems(checked));
            }}
          />
        </div>
      </div>
      {history.slice(...range).map((item, i) => (
        <TableRow
          key={item.id}
          id={item.id}
          index={range[0] + i}
          text={item.value.replace("\n", "")}
          rowHeight={rowHeight}
          checked={checked.includes(item.id)}
        />
      ))}
    </div>
  );
};
