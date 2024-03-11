import React from "react";
import { ICellProps } from "./cell.interface";

const Cell = ({ handleDragStart, item, handleDragEnd }: ICellProps) => {
  return (
    <div
      draggable
      onDrag={() => handleDragStart(item.pos)}
      className={`flex-center cell ${item.isSelected && "selected-cell "}`}
      onDragOver={() => handleDragEnd(item.pos)}
    >
      {item.pos}
    </div>
  );
};

export default Cell;
