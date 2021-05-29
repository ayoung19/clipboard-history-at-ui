import React from "react";
import { TableRowAction } from "./TableRowAction";

export const TableRowRemove = ({ disabled, onClick }) => {
  return (
    <TableRowAction onClick={onClick} disabled={disabled}>
      <i className="feather icon-trash-2" />
    </TableRowAction>
  );
};
