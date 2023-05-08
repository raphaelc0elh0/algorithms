import { beforeEach, describe, it } from "node:test";
import Stack from "./stack";
import { strictEqual } from "node:assert";

describe("Stack", () => {
  describe("push", () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it("should increase the size of the stack by 1", () => {
      stack.push(1);
      strictEqual(stack.size, 1);

      stack.push(2);
      strictEqual(stack.size, 2);
    });

    it("should set the first and last properties correctly", () => {
      stack.push(1);
      strictEqual(stack.first.value, 1);
      strictEqual(stack.last.value, 1);

      stack.push(2);
      strictEqual(stack.first.value, 2);
      strictEqual(stack.last.value, 1);
    });

    it("should add the new value to the top of the stack", () => {
      stack.push(1);
      strictEqual(stack.first.value, 1);

      stack.push(2);
      strictEqual(stack.first.value, 2);
    });
  });

  describe("pop", () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it("should decrease the size of the stack by 1", () => {
      stack.push(1);
      stack.push(2);
      stack.pop();
      strictEqual(stack.size, 1);

      stack.pop();
      strictEqual(stack.size, 0);
    });

    it("should remove and return the value at the top of the stack", () => {
      stack.push(1);
      stack.push(2);
      strictEqual(stack.pop().value, 2);
      strictEqual(stack.pop().value, 1);
    });

    it("should set the first and last properties correctly", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      strictEqual(stack.pop().value, 3);
      strictEqual(stack.first.value, 2);
      strictEqual(stack.last.value, 1);

      strictEqual(stack.pop().value, 2);
      strictEqual(stack.first.value, 1);
      strictEqual(stack.last.value, 1);

      strictEqual(stack.pop().value, 1);
      strictEqual(stack.first, null);
      strictEqual(stack.last, null);
    });

    it("should return undefined if the stack is empty", () => {
      strictEqual(stack.pop(), undefined);
    });
  });
});
