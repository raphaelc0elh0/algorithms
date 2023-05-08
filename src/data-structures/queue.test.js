import { beforeEach, describe, it } from "node:test";
import Queue from "./queue";
import { strictEqual } from "node:assert";

describe("Queue", () => {


  describe("enqueue", () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it("should increase the size of the queue by 1", () => {
      queue.enqueue(1);
      strictEqual(queue.size, 1);

      queue.enqueue(2);
      strictEqual(queue.size, 2);
    });

    it("should set the first and last properties correctly", () => {
      queue.enqueue(1);
      strictEqual(queue.first.value, 1);
      strictEqual(queue.last.value, 1);

      queue.enqueue(2);
      strictEqual(queue.first.value, 1);
      strictEqual(queue.last.value, 2);
    });

    it("should add the new value to the end of the queue", () => {
      queue.enqueue(1);
      strictEqual(queue.first.value, 1);

      queue.enqueue(2);
      strictEqual(queue.last.value, 2);
    });
  });

  describe("dequeue", () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it("should decrease the size of the queue by 1", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue();
      strictEqual(queue.size, 1);

      queue.dequeue();
      strictEqual(queue.size, 0);
    });

    it("should remove and return the value at the front of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      strictEqual(queue.dequeue().value, 1);
      strictEqual(queue.dequeue().value, 2);
    });

    it("should set the first and last properties correctly", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      strictEqual(queue.first.value, 2);
      strictEqual(queue.last.value, 3);

      queue.dequeue();
      strictEqual(queue.first.value, 3);
      strictEqual(queue.last.value, 3);

      queue.dequeue();
      strictEqual(queue.first, null);
      strictEqual(queue.last, null);
    });

    it("should return undefined if the queue is empty", () => {
      strictEqual(queue.dequeue(), undefined);
    });
  });
});

