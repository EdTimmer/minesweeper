import styled from 'styled-components/macro';

export const StyledCell = styled.button<{ isHidden: boolean, isFlagged: boolean, isMine: boolean }>`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background: ${({ isHidden, isFlagged, isMine }) => {
    if (isHidden && isFlagged) {
      return 'orange';
    } else if (!isHidden && isMine && !isFlagged) {
      return 'red';
    } else if (isHidden && !isFlagged) {
      return 'lightblue';
    } else if (!isHidden && !isFlagged && !isMine) {
      return 'white';
    }
  }};
  display: grid;
  place-items: center;
`;