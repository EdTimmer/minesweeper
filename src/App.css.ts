import styled from 'styled-components/macro';
import { Colors } from './styles/colors';

export const Container = styled.div`
  height:100vh;
  width: 100vw;
  background: ${Colors.green};
  display: grid;
  place-items: center;
  font-size: 16px;
`;

export const CellsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
  place-items: center;
`

export const StyledButton = styled.button`
  width: 120px;
  height: 50px;
  background: ${Colors.yellow};
  margin-top: 40px;
  color: ${Colors.red};
  border: 3px solid rgba(189, 195, 199, 1);
  font-size: 16px;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
