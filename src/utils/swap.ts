/**
  Swaps two elements in an array.
  @param {Array<any>} arr - The array in which to swap the elements.
  @param {number} idx1 - The index of the first element to swap.
  @param {number} idx2 - The index of the second element to swap.
  @returns {Array<any>} The array with the swapped elements.
*/
export default function swap(arr: any[], idx1: number, idx2: number): Array<any> {
  let temp = arr[idx2];
  arr[idx2] = arr[idx1];
  arr[idx1] = temp;
  return arr;
}
