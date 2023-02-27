import './App.css';
import Cell from './components/Cell';
import { Container, CellsWrapper } from './App.css';
import { useStore } from './store';
import { CellProps } from './types';

function App() {
  const cells = useStore((state) => state.cells);
  const reset = useStore((state) => state.reset);

  return (
    <Container>
      <button onClick={reset} >Reset</button>
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
              mineCount={cell.mineCount}
              isCheckedForZeros={cell.isCheckedForZeros}
            />
          );
        })}
      </CellsWrapper>
    </Container>
  );
}

export default App;
