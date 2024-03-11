import React, { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/cell/Cell";

export interface IMatrix {
  pos: number[];
  isSelected: boolean;
}

const App = () => {
  const [twoDMatrix, setTwoDMatrix] = useState<IMatrix[]>([]);
  const [start, setStart] = useState<number[]>([]);
  const [end, setEnd] = useState<number[]>([]);

  const initialize2DMatrix = () => {
    let matrix: IMatrix[] = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        matrix.push({
          pos: [i, j],
          isSelected: false,
        });
      }
    }

    setTwoDMatrix(matrix);
  };

  const handleDrag = (startPosition: number[]) => {
    setStart(startPosition);
    initialize2DMatrix();
  };

  const handleDragEnd = (endPosition: number[]) => setEnd(endPosition);

  const fillCells = (start: number[], end: number[]) => {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

    let selectedGrid: string[] = [];

    //if user selects a cells from bottom to top
    //it will adjust the loop params
    const rowStart = Math.min(startRow, endRow);
    const rowEnd = Math.max(startRow, endRow);
    const colStart = Math.min(startCol, endCol);
    const colEnd = Math.max(startCol, endCol);

    //loop to get selected grid cells
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        selectedGrid.push([i, j].join(""));
      }
    }

    let copyMatrix = [...twoDMatrix];

    copyMatrix = copyMatrix.map((item) => {
      const { pos } = item;
      const positionString = pos.join("");

      if (selectedGrid.includes(positionString)) {
        item.isSelected = true;
      }
      return item;
    });

    setTwoDMatrix(copyMatrix);
  };

  //whenever there is a change in start and end it will run
  useEffect(() => {
    if (start.length > 1 && end.length > 1) {
      fillCells(start, end);
    }
  }, [start, end]);

  //initially make a grid
  useEffect(() => {
    initialize2DMatrix();
  }, []);

  return (
    <div className="wrapper flex-center">
      <div className="grid">
        {twoDMatrix?.map((item, idx) => {
          return (
            <Cell
              handleDragStart={handleDrag}
              handleDragEnd={handleDragEnd}
              item={item}
              key={item.pos[0] + idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
