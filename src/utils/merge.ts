/**
  Merges two arrays in ascending order.
  @param {Array<any>} arr1 - The first array to merge.
  @param {Array<any>} arr2 - The second array to merge.
  @returns {Array<any>} The merged array.
*/
export default function merge(arr1: any[], arr2: any[]): Array<any> {
  const result: any[] = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
