import styled from 'styled-components/macro';
import { Colors } from '../styles/colors';

export const BannerWrapper = styled.div<{ isFinished: boolean, isVictory: boolean}>`
  width: 220px;
  height: 50px;
  background: ${Colors.yellow};
  border: 3px solid rgba(189, 195, 199, 1);
  margin-bottom: 40px;
  font-family: 'Press Start 2P', cursive;
  color: ${Colors.red};
  display: grid;
  place-items: center;
`;