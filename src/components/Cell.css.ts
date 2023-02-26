import styled from 'styled-components/macro';

export const StyledCell = styled.div<{ isHidden: boolean }>`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background: ${({ isHidden }) => isHidden ? 'lightblue' : 'white'};
  display: grid;
  place-items: center;
`;