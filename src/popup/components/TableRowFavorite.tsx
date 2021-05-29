import React from "react";
import { TableRowAction } from "./TableRowAction";
import { classNames } from "../utils";

export const TableRowFavorite = ({ favorited, onClick }) => {
  return (
    <TableRowAction disabled={false} onClick={onClick}>
      <i
        className={classNames(
          "feather",
          favorited ? "icon-star-on text-yellow-500" : "icon-star"
        )}
      />
    </TableRowAction>
  );
};
