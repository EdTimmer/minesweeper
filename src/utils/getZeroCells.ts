import { CellProps } from "../types";

export const getZeroCells = (index: number, cellsArr: CellProps[]) => {
  console.log('got zero cell at ' + index);
  const numOfColumns = 10;
  const newArr = [...cellsArr]

  const showAdjacentZeroCells = () => {
    const cell = cellsArr[index];
    const isRowAbove = cell.row > 0;
    const isRowBelow = cell.row < 9;
    const isColumnToLeft = cell.column > 0;
    const isColumnToRight = cell.column < 9;

    if (cellsArr[index].mineCount === 0) {
      // top left
      if (isRowAbove && isColumnToLeft && cellsArr[index - numOfColumns - 1].mineCount === 0 && !cellsArr[index - numOfColumns - 1]?.isMine) {
        newArr[index - numOfColumns - 1].isHidden = false;
      }
      // top center
      if (isRowAbove && cellsArr[index - numOfColumns].mineCount === 0 && !cellsArr[index - numOfColumns - 1]?.isMine) {
        newArr[index - numOfColumns].isHidden = false;
      }
      // top right 
      if (isRowAbove && isColumnToRight && cellsArr[index - numOfColumns + 1].mineCount === 0 && !cellsArr[index - numOfColumns - 1]?.isMine) {
        newArr[index - numOfColumns + 1].isHidden = false;
      }
      // left  
      if (isColumnToLeft && cellsArr[index - 1].mineCount === 0 && !cellsArr[index - numOfColumns - 1]?.isMine) {
        newArr[index - 1].isHidden = false;
      }
      // right
      if (isColumnToRight && cellsArr[index + 1].mineCount === 0 && !cellsArr[index - numOfColumns - 1]?.isMine) {
        newArr[index + 1].isHidden = false;
      }
      // bottom left
      if (isRowBelow && isColumnToLeft && cellsArr[index + numOfColumns - 1].mineCount === 0 && !cellsArr[index - numOfColumns - 1]?.isMine) {
        newArr[index + numOfColumns - 1].isHidden = false;
      }
      // bottom center
      if (isRowBelow && cellsArr[index + numOfColumns].mineCount === 0 && !cellsArr[index - numOfColumns - 1]?.isMine) {
        newArr[index + numOfColumns].isHidden = false;
      }
      // bottom right
      if (isRowBelow && isColumnToRight && cellsArr[index + numOfColumns + 1].mineCount === 0 && !cellsArr[index - numOfColumns - 1]?.isMine) {
        newArr[index + numOfColumns + 1].isHidden = false;
      }
    }
  }
  showAdjacentZeroCells();
  return newArr;
}
