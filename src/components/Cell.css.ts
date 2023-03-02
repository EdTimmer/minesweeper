import styled from 'styled-components/macro';
import { Colors } from '../styles/colors';

export const CellContainer = styled.div<{ isHidden: boolean, isFlagged: boolean, isMine: boolean, isExplodedMine: boolean }>`
  height: 50px;
  width: 50px;    
  background-image: ${({ isHidden }) => isHidden ? `linear-gradient(to bottom right, rgba(236, 240, 241, 1) 35px, rgba(189, 195, 199, 1) 35px)` : 'none'};
  background-color: ${({ isHidden, isFlagged, isMine, isExplodedMine }) => {
    if (isFlagged) {
      return `${Colors.yellow}`;
    } else if (!isHidden && isMine && isExplodedMine && !isFlagged) {
      return `${Colors.red}`;
    } else if (!isHidden && !isFlagged) {
      return `${Colors.lightBlue}`;
    }
  }};
  border: ${({ isHidden }) => isHidden ? 'none' : '.1px solid rgba(189, 195, 199, 1)'};
  display: grid;
  place-items: center;
`

export const StyledCell = styled.button<{ isHidden: boolean, isFlagged: boolean, isMine: boolean, isExplodedMine: boolean }>`
  height: 43px;
  width: 43px;
  font-size: 18px;
  color: ${Colors.blue};
  border: none;
  background: ${({ isHidden, isFlagged, isMine, isExplodedMine }) => {
    if (isFlagged) {
      return `${Colors.yellow}`;
    } else if (!isHidden && isMine && isExplodedMine && !isFlagged ) {
      return `${Colors.red}`;
    } else if (isHidden && !isFlagged) {
      return `${Colors.blue}`;
    } else if (!isHidden && !isFlagged) {
      return `${Colors.lightBlue}`;
    }
  }};
  display: grid;
  place-items: center;
`;