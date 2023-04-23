import assert from "assert";
import { describe, it } from "node:test";

import arrays from "../data/arrays";
import quickSort from "./quick";

describe("Quick sort", () => {
  it("sorts numeric", () => {
    const unsorted = arrays.numeric

    const sorted = unsorted.sort((a, b) => a - b);
    const result = quickSort(unsorted);

    assert.equal(result.length, sorted.length);
    assert.equal(JSON.stringify(result), JSON.stringify(sorted));
  });

  it("sorts strings", () => {
    const unsorted = arrays.string.map(s => s.toLowerCase())

    const sorted = unsorted.sort();
    const result = quickSort(unsorted);

    assert.equal(result.length, sorted.length);
      assert.equal(JSON.stringify(result), JSON.stringify(sorted));
  });
});
