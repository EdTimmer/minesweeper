import styled from 'styled-components/macro';
import { Colors } from '../styles/colors';

export const CellContainer = styled.div`
  height: 50px;
  width: 50px;
    
  background-image: linear-gradient(to bottom right, rgba(236, 240, 241, 1) 35px, rgba(189, 195, 199, 1) 35px);
  display: grid;
  place-items: center;
`

export const StyledCell = styled.button<{ isHidden: boolean, isFlagged: boolean, isMine: boolean }>`
  height: 45px;
  width: 45px;
  border: none;
  /* border: 1px solid black; */
  background: ${({ isHidden, isFlagged, isMine }) => {
    if (isHidden && isFlagged) {
      return `${Colors.yellow}`;
    } else if (!isHidden && isMine && !isFlagged) {
      return `${Colors.red}`;
    } else if (isHidden && !isFlagged) {
      return `${Colors.blue}`;
    } else if (!isHidden && !isFlagged && !isMine) {
      return `${Colors.lightBlue}`;
    }
  }};
  display: grid;
  place-items: center;
`;