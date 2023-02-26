import { useStore } from '../store';
import { CellProps } from '../types';
import { CellContainer, StyledCell } from './Cell.css';
import flag from '../icons/flag.png';
import mineBlack from '../icons/mine-black.png';
import mineColors from '../icons/mine-colors.png';


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

  const handleLeftClick = () => {
      showCell(index);
      showEmptyCells(index);
  };
  
  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isHidden) {
      flagCell(index);
    }
  }
  
  return (
    <CellContainer>
      <StyledCell
        isHidden={isHidden}
        isFlagged={isFlagged}
        isMine={isMine}
        onClick={handleLeftClick}
        onContextMenu={(e) => handleRightClick(e)}
      >
        {isMine && !isHidden && !isFlagged && (
          <img src={mineBlack} width={28} height={28} alt="mine" />
        )}
        {!isMine && !isHidden && mineCount !== 0 && <div>{mineCount}</div>}
        {isFlagged && <img src={flag} width={30} height={30} alt="flag" />}
      </StyledCell>
    </CellContainer>
  );
};

export default Cell;
