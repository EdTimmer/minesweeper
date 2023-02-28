import create from 'zustand';

import { CellProps } from './types';
import { getCells } from './utils/getCells';
import { getZeroCells } from './utils/getZeroCells';

interface MinesweeperState {
  cells: CellProps[];
  isFinished: boolean;
  totalMineCount: number;
  correctCount: number;
  mineCount: number;
  showCell: (index: number) => void;
  flagCell: (index: number) => void;
  showEmptyCells: (index: number) => void;
  reset: () => void;
  handleFinish: () => void;
  // isVictory: () => void;
  // incrementCorrectCount: () => void;
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

const checkForWin = (mineCount: number, correctCount: number) => {
  if (mineCount === correctCount) {
    return true;
  }
  return false;
}

export const useStore = create<MinesweeperState>((set) => ({
  cells: getCells(),
  isFinished: false,
  totalMineCount: 15,
  correctCount: 0,
  mineCount: 0,
  showCell: (index) => set((state) => ({ cells: updateCell(index, state.cells, state.isFinished) })),
  flagCell: (index) => set((state) => ({ cells: flagCell(index, state.cells) })),
  showEmptyCells: (index) => set((state) => ({ cells: getZeroCells(index, state.cells) })),
  reset: () => set(() => ({ cells: getCells(), isFinished: false })),
  handleFinish: () => set(() => ({ isFinished: true })),
  // isVictory: () => set((state) => ({ isFinished: checkForWin(state.totalMineCount, state.correctCount) })),
  // incrementCorrectCount: () => set((state) => ({ correctCount: state.correctCount + 1})),
}))
