import merge from "../../utils/merge";
import pivot from "../../utils/pivot";

export default function quickSort(array: any[], left = 0, right = array.length): any[] {
  if(left < right) {
    let pivotIdx = pivot(array, left, right)

    quickSort(array, left, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, right);
  }

  return array;
}
