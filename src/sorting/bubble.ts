import swap from "src/utils/swap";

/**
 * In the bubble sort algorithm, the inner loop iterates through the array
 * and compares adjacent elements.
 * If an adjacent pair of elements is in the wrong order
 * (i.e., the element at index j is greater than the element at index j + 1),
 * the swap function is called to swap the elements and rearrange them in ascending order.
 */
export default function bubbleSort(array: any[]) {
  for (let i = 0; i < array.length; i++) {
    /**
     * The purpose of the shouldBreak variable is to optimize the bubble sort algorithm
     * by allowing the outer loop to break early if no swaps were made during
     * a full iteration of the inner loop. This is done to avoid unnecessary iterations
     * when the array is already sorted, which can significantly improve
     * the algorithm's performance for large arrays.
     */
    let shouldBreak = true;

    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        array = swap(array, j, j + 1);
        shouldBreak = false;
      }
    }

    if (shouldBreak) break;
  }

  return array;
}

