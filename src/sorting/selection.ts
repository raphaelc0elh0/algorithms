import swap from "src/utils/swap"

/**
  * Selection sort is a simple comparison-based sorting algorithm that operates 
  * by dividing the input list into two parts: the sorted part and the unsorted part. 
  * The algorithm repeatedly selects the smallest element from the unsorted part 
  * and moves it to the sorted part. This process continues until the entire list 
  * is sorted.
 */
export default function selectionSort(array: any[]){
  for (let i = 0; i < array.length; i++) {
    let lowestIdx = i

    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < array[lowestIdx]){
        lowestIdx = j
      }
    }

    if(i !== lowestIdx){
      array = swap(array, i, lowestIdx)
    }
  }

  return array
}