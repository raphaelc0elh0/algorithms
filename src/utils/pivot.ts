import swap from "./swap";

/**
  * Rearranges the elements of an array such that all elements smaller than the first element (i.e. array[startIdx])
  * are moved before it and all elements greater than or equal to it are moved after it.
  * @param {any[]} array - The array to pivot.
  * @param {number} [startIdx=0] - The starting index of the subarray to pivot.
  * @param {number} [endIdx=array.length] - The ending index of the subarray to pivot.
  * @returns {number} - The final index of the pivot element after the pivot operation is complete.
*/
export default function pivot(array: any[], startIdx: number = 0, endIdx: number = array.length): number {
  let pivotIdx = startIdx;

  for (let i = startIdx + 1; i < endIdx; i++) {
    if (array[i] < array[startIdx]) {
      pivotIdx++
      array = swap(array, pivotIdx, i)
    }
  }

  array = swap(array, startIdx, pivotIdx)

  return pivotIdx;
}