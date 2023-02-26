import styled from 'styled-components/macro';

export const Container = styled.div`
  height:100vh;
  width: 100vw;
  /* border: 1px solid blue;
  margin: 1rem; */
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;  */
  display: grid;
  /* grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px); */
  place-items: center;
`;

export const CellsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
  place-items: center;
`