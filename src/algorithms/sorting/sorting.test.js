import assert from "assert";
import { describe, it, test } from "node:test";

import bubbleSort from './bubble'
import insertionSort from './insertion'
import mergeSort from './merge'
import quickSort from './quick'
import radixSort from './radix'
import selectionSort from './selection'

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

const arrays = {
  numeric: [
    45, 76, 12, 98, 23, 56, 34, 87, 65, 43, 87, 23, 12, 56, 76, 23, 87, 98, 45, 23, 65, 12, 34, 56, 76, 87, 98, 23, 45,
    34, 12, 65, 76, 56, 87, 98, 23, 34, 45, 12, 76, 56, 98, 87, 23, 65, 34, 45, 12, 76, 56, 98, 23, 87, 65, 34, 45, 12,
    76, 98, 56, 23, 87, 65, 34, 45, 12, 76, 98, 56, 23, 87, 65, 34, 45, 12, 76, 98, 56, 23, 87, 65, 34, 45, 12, 76, 98,
    56, 23, 87, 65, 34, 45, 12,
  ],
  string: [
    "orange",
    "kiwi",
    "grape",
    "mango",
    "apple",
    "banana",
    "watermelon",
    "tangerine",
    "cherry",
    "strawberry",
    "blueberry",
    "lemon",
    "papaya",
    "fig",
    "coconut",
    "cucumber",
    "date",
    "blackberry",
    "cantaloupe",
    "boysenberry",
    "elderberry",
    "apricot",
    "quince",
    "currant",
    "raspberry",
    "grapefruit",
    "guava",
    "dragonfruit",
    "durian",
    "pineapple",
    "lychee",
    "kiwifruit",
    "lychee",
    "persimmon",
    "passionfruit",
    "mangosteen",
    "jackfruit",
    "pomegranate",
    "avocado",
    "pawpaw",
    "rhubarb",
    "starfruit",
    "kiwano",
    "blackcurrant",
    "lychee",
    "jabuticaba",
    "ackee",
    "feijoa",
    "kiwifruit",
    "rambutan",
    "soursop",
    "sugar plum",
    "guava",
    "coconut",
    "blackcurrant",
    "rambutan",
    "kiwano",
    "persimmon",
    "avocado",
    "sugar plum",
    "kiwifruit",
    "lychee",
    "pawpaw",
    "pomegranate",
    "jackfruit",
    "rhubarb",
    "soursop",
    "passionfruit",
    "papaya",
    "starfruit",
    "feijoa",
    "mangosteen",
    "pineapple",
    "dragonfruit",
    "durian",
    "grapefruit",
    "quince",
    "currant",
    "raspberry",
    "date",
    "cucumber",
    "lemon",
    "cantaloupe",
    "boysenberry",
    "orange",
    "watermelon",
    "blueberry",
    "coconut",
    "apricot",
    "elderberry",
    "cherry",
    "fig",
    "mango",
    "kiwi",
    "banana",
    "grape",
  ],
}