import { CellProps } from "../types";

export const getRandomRange = (start: number, end: number, length: number) => {
  let tem: number, A: number[] | [] = [], L = 0, i = 0;
  randomRangeLoop:
  while (L < length) {
    tem = Math.floor(Math.random() * end) + start;
    i = 0;
    while (i < L) {
      if (A[i++] === tem) continue randomRangeLoop;
    }
    A[L++] = tem;
  }
  return A;
}
