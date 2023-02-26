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