import { CellProps } from "../types";

export const getZeroCells = (index: number, cellsArr: CellProps[]) => {
  const numOfColumns = 10;
  const newArr = [...cellsArr];
  let zerosArr: number[] = [];

  const showAdjacentZeroCells = (index: number) => {
    const cell = cellsArr[index];
    const isRowAbove = cell.row > 0;
    const isRowBelow = cell.row < 9;
    const isColumnToLeft = cell.column > 0;
    const isColumnToRight = cell.column < 9;

    const indTopLeft = index - numOfColumns - 1;
    const indTopCenter = index - numOfColumns;
    const indTopRight = index - numOfColumns + 1;
    const indLeft = index - 1;
    const indRight = index + 1;
    const indBottomLeft = index + numOfColumns - 1;
    const indBottomCenter = index + numOfColumns;
    const indBottomRight = index + numOfColumns + 1;

    const buildZerosArr = (index: number, cellsArr: CellProps[]) => {
      if (cellsArr[index].mineCount === 0) {
        zerosArr.push(index);
      }
    }

    if (cellsArr[index].mineCount === 0 && !cellsArr[index].isMine) {
      newArr[index].isCheckedForZeros = true;
      // top left
      if (isRowAbove && isColumnToLeft && !cellsArr[indTopLeft]?.isMine) {
        newArr[indTopLeft].isHidden = false;
        buildZerosArr(indTopLeft, cellsArr);
      }
      // top center
      if (isRowAbove && !cellsArr[indTopCenter]?.isMine) {
        newArr[indTopCenter].isHidden = false;
        buildZerosArr(indTopCenter, cellsArr);
      }
      // top right 
      if (isRowAbove && isColumnToRight && !cellsArr[indTopRight]?.isMine) {
        newArr[indTopRight].isHidden = false;
        buildZerosArr(indTopRight, cellsArr);
      }
      // left  
      if (isColumnToLeft && !cellsArr[indLeft]?.isMine) {
        newArr[indLeft].isHidden = false;
        buildZerosArr(indLeft, cellsArr);
      }
      // right
      if (isColumnToRight && !cellsArr[indRight]?.isMine) {
        newArr[indRight].isHidden = false;
        buildZerosArr(indRight, cellsArr);
      }
      // bottom left
      if (isRowBelow && isColumnToLeft && !cellsArr[indBottomLeft]?.isMine) {
        newArr[indBottomLeft].isHidden = false;
        buildZerosArr(indBottomLeft, cellsArr);
      }
      // bottom center
      if (isRowBelow && !cellsArr[indBottomCenter]?.isMine) {
        newArr[indBottomCenter].isHidden = false;
        buildZerosArr(indBottomCenter, cellsArr);
      }
      // bottom right
      if (isRowBelow && isColumnToRight && !cellsArr[indBottomRight]?.isMine) {
        newArr[indBottomRight].isHidden = false;
        buildZerosArr(indBottomRight, cellsArr);
      }
    }

  }
  showAdjacentZeroCells(index);

  // Recursion
  let cycleArr = [...zerosArr];
  zerosArr = [];
  while (cycleArr.length) {
    const arrEl = cycleArr.pop();
    if (arrEl && !newArr[arrEl].isCheckedForZeros) {
      getZeroCells(arrEl, newArr);
    }    
  }

  return newArr;
}
