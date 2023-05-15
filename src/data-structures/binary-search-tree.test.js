import { beforeEach, describe, it } from "node:test";
import BinarySearchTree from "./binary-search-tree";
import { strictEqual } from "node:assert";

describe("BinarySearchTree", () => {
  describe("insert method", () => {
    let bst;

    beforeEach(() => {
      bst = new BinarySearchTree();
    });

    it("inserts the first node correctly", () => {
      bst.insert(10);
      strictEqual(bst.root.value, 10);
      strictEqual(bst.root.left, null);
      strictEqual(bst.root.right, null);
    });

    it("inserts a smaller value to the left", () => {
      bst.insert(10);
      bst.insert(5);
      strictEqual(bst.root.value, 10);
      strictEqual(bst.root.left.value, 5);
      strictEqual(bst.root.right, null);
    });

    it("inserts a larger value to the right", () => {
      bst.insert(10);
      bst.insert(15);
      strictEqual(bst.root.value, 10);
      strictEqual(bst.root.left, null);
      strictEqual(bst.root.right.value, 15);
    });

    it("inserts a node at the correct position", () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(7);
      bst.insert(12);
      strictEqual(bst.root.value, 10);
      strictEqual(bst.root.left.value, 5);
      strictEqual(bst.root.right.value, 15);
      strictEqual(bst.root.left.right.value, 7);
      strictEqual(bst.root.right.left.value, 12);
    });

    it("return undefined for duplicates", () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(7);
      strictEqual(bst.insert(7), undefined);
    });

    it("returns the BST instance for chaining", () => {
      const returnedValue = bst.insert(10);
      strictEqual(returnedValue, bst);
    });
  });

  describe("find method", () => {
    let bst;

    beforeEach(() => {
      bst = new BinarySearchTree();
    });

    it("returns null for an empty tree", () => {
      strictEqual(bst.find(10), false);
    });

    it("returns null if the value is not found", () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      strictEqual(bst.find(7), false);
    });

    it("returns the node if the value is found", () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      const foundNode = bst.find(15);
      strictEqual(foundNode.value, 15);
      strictEqual(foundNode.left, null);
      strictEqual(foundNode.right, null);
    });
  });
});
