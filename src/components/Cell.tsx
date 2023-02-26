import { useStore } from '../store';
import { CellProps } from '../types';
import { StyledCell } from './Cell.css';

const Cell = ({
  index,
  column,
  row,
  isHidden,
  isMine,
  isFlagged,
  mineCount,
}: CellProps) => {
  const showCell = useStore((state) => state.showCell);
  const showEmptyCells = useStore((state) => state.showEmptyCells);
  
  const handleClick = () => {
    showCell(index);
    showEmptyCells(index);
  }

  return (
  <StyledCell isHidden={isHidden} onClick={handleClick}>
    {isMine && !isHidden && (<div>M</div>)}  
    {!isMine && !isHidden && (<div>{mineCount}</div>)}
  </StyledCell>);
};

export default Cell;
