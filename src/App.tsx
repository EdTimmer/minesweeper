import './App.css';
import Cell from './components/Cell';
import Banner from './components/Banner';
import {
  Container,
  CellsWrapper,
  StyledButton,
  CenterContainer,
} from './App.css';
import { useStore } from './store';
import { CellProps } from './types';

function App() {
  const cells = useStore((state) => state.cells);
  const reset = useStore((state) => state.reset);
  const isVictory = useStore((state) => state.isVictory);
  const isFinished = useStore((state) => state.isFinished);

  const getMessage = () => {
    if (isVictory) {
      return 'YOU WIN!'
    } else if (isFinished) {
      return 'YOU LOSE'
    } else {
      return 'MINESWEEPER'
    }
  }

  return (
    <Container>
      <CenterContainer>
        <Banner message={getMessage()} />
        <CellsWrapper>
          {cells.map((cell: CellProps, index: number) => {
            return (
              <Cell
                key={index}
                index={index}
                column={cell.column}
                row={cell.row}
                isHidden={cell.isHidden}
                isMine={cell.isMine}
                isFlagged={cell.isFlagged}
                adjacentMineCount={cell.adjacentMineCount}
                isCheckedForZeros={cell.isCheckedForZeros}
                isExplodedMine={cell.isExplodedMine}
              />
            );
          })}
        </CellsWrapper>
        <StyledButton onClick={reset}>RESET</StyledButton>
      </CenterContainer>
    </Container>
  );
}

export default App;
