import assert from "assert";
import { describe, it, test } from "node:test";

import arrays from "../data/arrays";

import bubbleSort from '../sorting/bubble'
import insertionSort from '../sorting/insertion'
import mergeSort from '../sorting/merge'
import quickSort from '../sorting/quick'
import radixSort from '../sorting/radix'
import selectionSort from '../sorting/selection'

const sortFunctions = [
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort,
  selectionSort
]


for (const sortFunction of sortFunctions) {
  describe(`${sortFunction.name}`, () => {
    it("sorts numeric", () => {
      const unsorted = arrays.numeric
  
      const sorted = unsorted.sort((a, b) => a - b);
      const result = sortFunction(unsorted);
  
      assert.equal(result.length, sorted.length);
      assert.equal(JSON.stringify(result), JSON.stringify(sorted));
    });
  
    if(!['radixSort'].includes(sortFunction.name)){
      it("sorts strings", () => {
        const unsorted = arrays.string.map(s => s.toLowerCase())
    
        const sorted = unsorted.sort();
        const result = sortFunction(unsorted);
    
        assert.equal(result.length, sorted.length);
        assert.equal(JSON.stringify(result), JSON.stringify(sorted));
      });
    }
  });
}

