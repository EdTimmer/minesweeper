import { CellProps } from "../types";
import { getRandomRange } from "./getRandomRange";

export const getCells = () => {
  // Cells without mines or counts
  const makeArr = () => {
    let arr: CellProps[] = [];
    for (let i = 0; i < 10; i++) {
      for (let k = 0; k < 10; k++) {
        arr.push({
          index: i + k,
          column: k,
          row: i,
          isHidden: true,
          isMine: false,
          isFlagged: false,
          adjacentMineCount: 0,
          isCheckedForZeros: false,
        });
      }
    }
    return arr;
  };
  const cellsArr = makeArr();

  // Mines
  const mines = getRandomRange(0, 100, 15);

  // Add mines to cells
  mines.forEach((mine) => {
    cellsArr[mine].isMine = true;
  })

  const numOfColumns = 10;

  // Add counts to cells
  const cellsWithCounts = cellsArr.map((cell, index) => {
    let count = 0;
    const isRowAbove = cell.row > 0;
    const isRowBelow = cell.row < 9;
    const isColumnToLeft = cell.column > 0;
    const isColumnToRight = cell.column < 9;

    // top left
    if (isRowAbove && isColumnToLeft && cellsArr[index - numOfColumns - 1].isMine) {
      count++;
    }
    // top center
    if (isRowAbove && cellsArr[index - numOfColumns].isMine) {
      count++;
    }
    // top right 
    if (isRowAbove && isColumnToRight && cellsArr[index - numOfColumns + 1].isMine) {
      count++;
    }
    // left  
    if (isColumnToLeft && cellsArr[index - 1].isMine) {
      count++;
    }
    // right
    if (isColumnToRight && cellsArr[index + 1].isMine) {
      count++;
    }
    // bottom left
    if (isRowBelow && isColumnToLeft && cellsArr[index + numOfColumns - 1].isMine) {
      count++;
    }
    // bottom center
    if (isRowBelow && cellsArr[index + numOfColumns].isMine) {
      count++;
    }
    // bottom right
    if (isRowBelow && isColumnToRight && cellsArr[index + numOfColumns + 1].isMine) {
      count++;
    }

    cell.adjacentMineCount = count;
    return cell;
  })

  return cellsWithCounts;
}
