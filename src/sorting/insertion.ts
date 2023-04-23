import insert from "src/utils/insert";

/**
  * Insertion sort is a simple sorting algorithm that builds the final sorted array
  * one item at a time.
  * It works by iterating through an array of unsorted elements, and inserting
  * each element into its proper position in a sorted subarray that is built
  * from left to right.
 */
export default function insertionSort(array: any[]) {
  let result = [...array]

  for (let i = 1; i < result.length; i++) {
    const selected = result[i];

    let inserted = false;
    for (let j = i - 1; j >= 0; j--) {
      const compare = result[j];

      if (selected > compare) {
        inserted = true;
        result.splice(i, 1);
        result = insert(result, j + 1, selected)
        break;
      }
    }

    if (!inserted) {
      result.splice(i, 1);
      result = insert(result, 0, selected)
    }
  }

  return result;
}
