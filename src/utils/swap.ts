export default function swap (arr: number[], idx1: number, idx2: number){
  let temp = arr[idx2];
  arr[idx2] = arr[idx1];
  arr[idx1] = temp;
  return arr;
};