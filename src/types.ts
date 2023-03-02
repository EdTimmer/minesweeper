export interface CellProps {
  index: number,
  column: number,
  row: number,
  isHidden: boolean,
  isMine: boolean,
  isFlagged: boolean,
  adjacentMineCount: number,
  isCheckedForZeros: boolean,
  isExplodedMine: boolean,
}