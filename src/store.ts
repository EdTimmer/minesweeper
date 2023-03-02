import create from 'zustand';

import { CellProps } from './types';
import { getCells } from './utils/getCells';
import { getZeroCells } from './utils/getZeroCells';

interface MinesweeperState {
  cells: CellProps[];
  isFinished: boolean;
  totalMineCount: number;
  correctCount: number;
  adjacentMineCount: number;
  isVictory: boolean;
  showCell: (index: number) => void;
  flagCell: (index: number) => void;
  handleExplode: (index: number) => void;
  removeFlag: (index: number) => void;
  showEmptyCells: (index: number) => void;
  reset: () => void;
  handleFinish: () => void;
  incrementCorrectCount: () => void;
  decrementCorrectCount: () => void;
  checkIfVictory: () => void;
}

const updateCell = (index: number, arr: CellProps[], isFinished: boolean) => {
  const newArr = [...arr];
  if (newArr[index].isMine && !newArr[index].isFlagged && isFinished) {
    newArr.forEach(cell => {
      if (cell.isMine) {
        cell.isHidden = false
      }
    })
  }
  else {
    newArr[index].isHidden = false;
  }
  return newArr;
}

const flagCell = (index: number, arr: CellProps[]) => {
  const newArr = [...arr];
  newArr[index].isFlagged = true;
  return newArr;
}

const removeFlag = (index: number, arr: CellProps[]) => {
  const newArr = [...arr];
  newArr[index].isFlagged = false;
  return newArr;
}

const checkForWin = (mineCount: number, correctCount: number) => {
  if (mineCount === correctCount) {
    return true;
  }
  return false;
}

const handleExplodeHelper = (index: number, arr: CellProps[]) => {
  const newArr = [...arr];
  newArr[index].isExplodedMine = true;
  return newArr;  
}

export const useStore = create<MinesweeperState>((set) => ({
  cells: getCells(),
  isFinished: false,
  totalMineCount: 15,
  correctCount: 0,
  adjacentMineCount: 0,
  showCell: (index) => set((state) => ({ cells: updateCell(index, state.cells, state.isFinished) })),
  flagCell: (index) => set((state) => ({ cells: flagCell(index, state.cells) })),
  removeFlag: (index) => set((state) => ({ cells: removeFlag(index, state.cells) })),
  showEmptyCells: (index) => set((state) => ({ cells: getZeroCells(index, state.cells) })),
  reset: () => set(() => ({ cells: getCells(), isFinished: false, correctCount: 0, isVictory: false })),
  handleFinish: () => set(() => ({ isFinished: true, correctCount: 0 })),
  incrementCorrectCount: () => set((state) => ({ correctCount: state.correctCount + 1 })),
  decrementCorrectCount: () => set((state) => ({ correctCount: state.correctCount - 1 })),
  isVictory: false,
  checkIfVictory: () => set((state) => ({ isVictory: checkForWin(state.totalMineCount, state.correctCount), isFinished: checkForWin(state.totalMineCount, state.correctCount) })),
  handleExplode: (index) => set((state) => ({ cells: handleExplodeHelper(index, state.cells) })),
}))
