import './App.css';
import Cell from './components/Cell';
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
  const correctCount = useStore((state) => state.correctCount);
  const isVictory = useStore((state) => state.isVictory);
  
  console.log('isVictory', isVictory);

  return (
    <Container>
      <CenterContainer>
        {isVictory && <div>VICTORY!</div>}
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
