import styled from 'styled-components/macro';
import { Colors } from './styles/colors';

export const Container = styled.div`
  height:100vh;
  width: 100vw;
  background: ${Colors.green};
  display: grid;
  place-items: center;
`;

export const CellsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
  place-items: center;
`

export const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background: ${Colors.yellow};
  margin-top: 40px;
  font-family: 'Press Start 2P', cursive;
  color: ${Colors.red};
  border: 3px solid rgba(189, 195, 199, 1);
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
