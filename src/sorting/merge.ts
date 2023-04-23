import merge from "src/utils/merge";

/**
  * Merge sort is a popular sorting algorithm that uses the divide-and-conquer technique.
  * It works by dividing an array into two halves, recursively sorting each half,
  * and then merging the sorted halves back together.
 */
export default function mergeSort(array: any[]): any[] {
  if (array.length <= 1) return array;
  let midPoint = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, midPoint));
  let right = mergeSort(array.slice(midPoint));

  return merge(left, right);
}




