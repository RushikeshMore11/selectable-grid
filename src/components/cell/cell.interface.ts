import { IMatrix } from "../../App";

export interface ICellProps {
  handleDragStart: (pos: number[]) => void;
  handleDragEnd: (pos: number[]) => void;
  item: IMatrix;
}
