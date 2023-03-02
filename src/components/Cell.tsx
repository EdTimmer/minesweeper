import { useStore } from '../store';
import { CellProps } from '../types';
import { CellContainer, StyledCell } from './Cell.css';
import flag from '../icons/flag.png';
import mineBlack from '../icons/mine-black.png';
import mineColors from '../icons/mine-colors.png';
import wrongGuessIcon from '../icons/wrong-guess2.png';

const Cell = ({
  index,
  isHidden,
  isMine,
  isFlagged,
  adjacentMineCount,
  isExplodedMine,
}: CellProps) => {
  const showCell = useStore((state) => state.showCell);
  const flagCell = useStore((state) => state.flagCell);
  const showEmptyCells = useStore((state) => state.showEmptyCells);
  const isFinished = useStore((state) => state.isFinished);
  const handleFinish = useStore((state) => state.handleFinish);
  const incrementCorrectCount = useStore(
    (state) => state.incrementCorrectCount
  );
  const decrementCorrectCount = useStore(
    (state) => state.decrementCorrectCount
  );
  const removeFlag = useStore((state) => state.removeFlag);
  const checkIfVictory = useStore((state) => state.checkIfVictory);
  const handleExplode = useStore((state) => state.handleExplode);

  const handleLeftClick = () => {
    if (isFinished) {
      return;
    }
    if (isMine && !isFlagged && !isExplodedMine) {
      handleExplode(index);
      handleFinish();
    }
    if (isFlagged) {
      return;
    }

    showCell(index);
    showEmptyCells(index);
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isFinished) {
      return;
    }
    if (isHidden && !isExplodedMine && !isFlagged) {
      flagCell(index);
      if (isMine) {
        incrementCorrectCount();
        checkIfVictory();
      }
    }

    if (isFlagged) {
      removeFlag(index);
      if (isMine) {
        decrementCorrectCount();
      }
    }
  };

  return (
    <CellContainer
      isHidden={isHidden}
      isFlagged={isFlagged}
      isMine={isMine}
      isExplodedMine={isExplodedMine || false}
    >
      <StyledCell
        isHidden={isHidden}
        isFlagged={isFlagged}
        isMine={isMine}
        isExplodedMine={isExplodedMine || false}
        onClick={handleLeftClick}
        onContextMenu={(e) => handleRightClick(e)}
      >
        {isMine && !isHidden && !isFlagged && (
          <img src={mineBlack} width={28} height={28} alt="mine" />
        )}
        {!isMine && !isHidden && adjacentMineCount !== 0 && !isFlagged && (
          <div>{adjacentMineCount}</div>
        )}
        {isFlagged && !isFinished && (
          <img src={flag} width={30} height={30} alt="flag" />
        )}
        {isFinished && isFlagged && !isMine && (
          <img src={wrongGuessIcon} width={30} height={30} alt="wrong" />
        )}
        {isFinished && isFlagged && isMine && (
          <img src={flag} width={30} height={30} alt="flag" />
        )}
      </StyledCell>
    </CellContainer>
  );
};

export default Cell;
