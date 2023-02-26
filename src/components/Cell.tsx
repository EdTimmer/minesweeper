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
  const flagCell = useStore((state) => state.flagCell);
  const showEmptyCells = useStore((state) => state.showEmptyCells);

  // const handleClick = () => {
  //   showCell(index);
  //   showEmptyCells(index);
  // };
  const handleLeftClick = () => {
      showCell(index);
      showEmptyCells(index);
  };
  
  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('right click');
    flagCell(index);
  }
  
  return (
    <StyledCell isHidden={isHidden} isFlagged={isFlagged} isMine={isMine} onClick={handleLeftClick} onContextMenu={(e) => handleRightClick(e)}>
      {isMine && !isHidden && <div>M</div>}
      {!isMine && !isHidden && mineCount !== 0 && <div>{mineCount}</div>}
    </StyledCell>
  );
};

export default Cell;
