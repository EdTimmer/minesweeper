import create from 'zustand';

import { CellProps } from './types';
import { getCells } from './utils/getCells';
import { getZeroCells } from './utils/getZeroCells';

interface MinesweeperState {
  cells: CellProps[];
  showCell: (index: number) => void;
  showEmptyCells: (index: number) => void;
}

const updateCell = (index: number, arr: CellProps[]) => {
  const newArr = [...arr];
  newArr[index].isHidden = false;
  return newArr;
}

export const useStore = create<MinesweeperState>((set) => ({
  cells: getCells(),
  showCell: (index) => set((state) => ({ cells: updateCell(index, state.cells) })),
  showEmptyCells: (index) => set((state) => ({ cells: getZeroCells(index, state.cells) })),
}))
