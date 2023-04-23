/**
  * Inserts an element into an array at the specified index and returns a new array.
  * @param {Array} array - The array to insert the element into.
  * @param {*} element - The element to insert.
  * @param {number} idx - The index at which to insert the element.
  * @returns {Array} A new array with the element inserted at the specified index.
 */
export default function insert(array: any[], idx: number, element: any): Array<any>{
  return [...array.slice(0, idx), element, ...array.slice(idx)]
}