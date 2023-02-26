export interface CellProps {
  index: number,
  column: number,
  row: number,
  isHidden: boolean,
  isMine: boolean,
  isFlagged: boolean,
  mineCount: number,
  isCheckedForZeros: boolean,
}