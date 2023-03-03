import styled from 'styled-components/macro';
import { Colors } from '../styles/colors';

export const BannerWrapper = styled.div<{ isFinished: boolean, isVictory: boolean}>`
  width: 220px;
  height: 50px;
  border: 3px solid rgba(189, 195, 199, 1);
  margin-bottom: 40px;
  font-family: 'Press Start 2P', cursive;
  background: ${({ isFinished, isVictory }) => {
    // loss
    if (isFinished && !isVictory) {
      return `${Colors.red}`;
    // win
    } else if (isFinished && isVictory) {
      return `${Colors.blue}`;
    // default
    } else {
      return `${Colors.yellow}`;
    }
  }};
  color: ${({ isFinished, isVictory }) => {
    // loss
    if (isFinished && !isVictory) {
      return `${Colors.yellow}`;
    // win
    } else if (isFinished && isVictory) {
      return `${Colors.yellow}`;
    // default
    } else {
      return `${Colors.blue}`;
    }
  }};
  border-color: ${({ isFinished, isVictory }) => {
    // loss
    if (isFinished && !isVictory) {
      return `${Colors.yellow}`;
    // win
    } else if (isFinished && isVictory) {
      return `${Colors.yellow}`;
    // default
    } else {
      return `${Colors.blue}`;
    }
  }};
  display: grid;
  place-items: center;
`;