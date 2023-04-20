import assert from "assert";
import { describe, it } from "node:test";

import arrays from "../data/arrays";
import bubbleSort from "./bubble";

describe("Bubble sort", () => {
  it("sorts numeric", () => {
    const unsorted = arrays.numeric

    const sorted = unsorted.sort((a, b) => a - b);
    const result = bubbleSort(unsorted);

    assert.equal(result.length, sorted.length);
    assert.equal(JSON.stringify(result), JSON.stringify(sorted));
  });

  it("sorts strings", () => {
    const unsorted = arrays.string.map(s => s.toLowerCase())

    const sorted = unsorted.sort();
    const result = bubbleSort(unsorted);

    assert.equal(result.length, sorted.length);
    assert.equal(JSON.stringify(result), JSON.stringify(sorted));
  });
});
