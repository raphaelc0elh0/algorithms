import { beforeEach, describe, it } from "node:test";
import DoublyLinkedList from "./doubly-linked-list";
import { strictEqual } from "node:assert";

describe("Doubly Linked List", () => {
  describe("push method", () => {
    // Create a new node with the value passed to the function
    // If the head property is null set the head and tail to be the newly created node
    // If not, set the next property on the tail to be that node
    // Set the previous property on the newly created node to be the tail
    // Set the tail to be the newly created node
    // Increment the length
    // Return the Doubly Linked List
  
    let list;
  
    beforeEach(() => {
      list = new DoublyLinkedList();
    });
  
    it("should add a new node to an empty list", () => {
      list.push(1);
  
      strictEqual(list.length, 1);
      strictEqual(list.head.value, 1);
      strictEqual(list.tail.value, 1);
      strictEqual(list.head.previous, null);
      strictEqual(list.head.next, null);
      strictEqual(list.tail.previous, null);
      strictEqual(list.tail.next, null);
    });
  
    it("should add a new node to the end of a non-empty list", () => {
      list.push(1);
      list.push(2);
  
      strictEqual(list.length, 2);
      strictEqual(list.head.value, 1);
      strictEqual(list.tail.value, 2);
      strictEqual(list.head.previous, null);
      strictEqual(list.head.next.value, 2);
      strictEqual(list.tail.previous.value, 1);
      strictEqual(list.tail.next, null);
    });
  });
  
  describe("pop method", () => {
    // If there is no head, return undefined
    // Store the current tail in a variable to return later
    // If the length is 1, set the head and tail to be null
    // Update the tail to be the previous Node.
    // Set the newTail's next to null
    // Decrement the length
    // Return the value removed
  
    let list;
  
    beforeEach(() => {
      list = new DoublyLinkedList();
    });
  
    it("should return undefined for an empty list", () => {
      const result = list.pop();
  
      strictEqual(result, undefined);
      strictEqual(list.length, 0);
      strictEqual(list.head, null);
      strictEqual(list.tail, null);
    });
  
    it("should remove the last node from a list with one node", () => {
      list.push(1);
      const result = list.pop();
  
      strictEqual(result.value, 1);
      strictEqual(list.length, 0);
      strictEqual(list.head, null);
      strictEqual(list.tail, null);
    });
  
    it("should remove the last node from a list with multiple nodes", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const result = list.pop();
  
      strictEqual(result.value, 3);
      strictEqual(list.length, 2);
      strictEqual(list.head.value, 1);
      strictEqual(list.head.next.value, 2);
      strictEqual(list.head.previous, null);
      strictEqual(list.tail.value, 2);
      strictEqual(list.tail.previous.value, 1);
      strictEqual(list.tail.next, null);
    });
  
    it("removed node should be unlinked from list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const result = list.pop();
  
      strictEqual(result.value, 3);
      strictEqual(result.previous, null);
      strictEqual(result.next, null);
    });
  });
  
  describe("shift method", () => {
    // If length is 0, return undefined
    // Store the current head property in a variable (we'll call it old head)
    // If the length is one
    // set the head to be null
    // set the tail to be null
    // Update the head to be the next of the old head
    // Set the head's prev property to null
    // Set the old head's next to null
    // Decrement the length
    // Return old head
  
    let list;
  
    beforeEach(() => {
      list = new DoublyLinkedList();
    });
  
    it("shifts the only node and updates head and tail to null", () => {
      list.push("a");
      const shiftedNode = list.shift();
      strictEqual(list.head, null);
      strictEqual(list.tail, null);
      strictEqual(list.length, 0);
      strictEqual(shiftedNode.value, "a");
      strictEqual(shiftedNode.next, null);
      strictEqual(shiftedNode.previous, null);
    });
  
    it("shifts the first node and updates head and prev of the new head", () => {
      list.push("a");
      list.push("b");
      list.push("c");
      const shiftedNode = list.shift();
      strictEqual(list.head.value, "b");
      strictEqual(list.head.previous, null);
      strictEqual(list.head.next.value, "c");
      strictEqual(list.head.next.previous, list.head);
      strictEqual(list.tail.value, "c");
      strictEqual(list.tail.previous, list.head);
      strictEqual(list.length, 2);
      strictEqual(shiftedNode.value, "a");
      strictEqual(shiftedNode.next, null);
      strictEqual(shiftedNode.previous, null);
    });
  
    it("returns undefined when the list is empty", () => {
      const shiftedNode = list.shift();
      strictEqual(shiftedNode, undefined);
    });
  });
  
  describe("unshift method", () => {
    // Create a new node with the value passed to the function
    // If the length is 0
    // Set the head to be the new node
    // Set the tail to be the new node
    // Otherwise
    // Set the prev property on the head of the list to be the new node
    // Set the next property on the new node to be the head property
    // Update the head to be the new node
    // Increment the length
    // Return the list
  
    let list;
  
    beforeEach(() => {
      list = new DoublyLinkedList();
    });
  
    it("adds the first node and updates head and tail", () => {
      const result = list.unshift("a");
      strictEqual(list.head.value, "a");
      strictEqual(list.head.previous, null);
      strictEqual(list.head.next, null);
      strictEqual(list.tail, list.head);
      strictEqual(list.length, 1);
      strictEqual(result, list);
    });
  
    it("adds a node at the beginning of the list and updates head and prev of the new node", () => {
      list.push("b");
      list.push("c");
      const result = list.unshift("a");
      strictEqual(list.head.value, "a");
      strictEqual(list.head.previous, null);
      strictEqual(list.head.next.value, "b");
      strictEqual(list.head.next.previous, list.head);
      strictEqual(list.tail.value, "c");
      strictEqual(list.tail.previous, list.head.next);
      strictEqual(list.length, 3);
      strictEqual(result, list);
    });
  
    it("returns the list after adding a node", () => {
      const result = list.unshift("a");
      strictEqual(result, list);
    });
  });
  
  describe("get method", () => {
    // If the index is less than 0 or greater or equal to the length, return null
    // If the index is less than or equal to half the length of the list
    // Loop through the list starting from the head and loop towards the middle
    // Return the node once it is found
    // If the index is greater than half the length of the list
    // ​Loop through the list starting from the tail and loop towards the middle
    // Return the node once it is found
  
    let list;
  
    beforeEach(() => {
      list = new DoublyLinkedList();
      list.push("a");
      list.push("b");
      list.push("c");
    });
  
    it("returns the node at a valid index in the first half of the list", () => {
      const node = list.get(1);
      strictEqual(node.value, "b");
      strictEqual(node.previous.value, "a");
      strictEqual(node.next.value, "c");
    });
  
    it("returns the node at a valid index in the second half of the list", () => {
      const node = list.get(2);
      strictEqual(node.value, "c");
      strictEqual(node.previous.value, "b");
      strictEqual(node.next, null);
    });
  
    it("returns null for an invalid negative index", () => {
      const node = list.get(-1);
      strictEqual(node, undefined);
    });
  
    it("returns null for an index greater than or equal to the length", () => {
      const node = list.get(3);
      strictEqual(node, undefined);
    });
  
    it("returns null for an empty list", () => {
      const emptyList = new DoublyLinkedList();
      const node = emptyList.get(0);
      strictEqual(node, undefined);
    });
  });
  
  describe("set method", () => {
    // Create a variable which is the result of the get method at the index passed to the function
    // If the get method returns a valid node, set the value of that node to be the value passed to the function
    // Return true
    // Otherwise, return false
  
    let list;
  
    beforeEach(() => {
      list = new DoublyLinkedList();
      list.push("a");
      list.push("b");
      list.push("c");
    });
  
    it("updates the value of a valid node", () => {
      const result = list.set(1, "new value");
      strictEqual(result, true);
      strictEqual(list.get(1).value, "new value");
    });
  
    it("returns false for an invalid index", () => {
      const result = list.set(3, "new value");
      strictEqual(result, false);
      strictEqual(list.get(2).value, "c");
    });
  
    it("returns false for a negative index", () => {
      const result = list.set(-1, "new value");
      strictEqual(result, false);
      strictEqual(list.get(2).value, "c");
    });
  
    it("returns false for an empty list", () => {
      const emptyList = new DoublyLinkedList();
      const result = emptyList.set(0, "new value");
      strictEqual(result, false);
      strictEqual(emptyList.get(0), undefined);
    });
  });
  
  describe("insert method", () => {
    // If the index is less than zero or greater than or equal to the length return false
    // If the index is 0, unshift
    // If the index is the same as the length, push
    // Use the get method to access the index -1
    // Set the next and prev properties on the correct nodes to link everything together
    // Increment the length
    // Return true
  
    let list;
  
    beforeEach(() => {
      list = new DoublyLinkedList();
      list.push("a");
      list.push("b");
      list.push("c");
    });
  
    it("inserts a node at the beginning of the list", () => {
      const result = list.insert(0, "new value");
      strictEqual(result, true);
      strictEqual(list.get(0).value, "new value");
      strictEqual(list.length, 4);
    });
  
    it("inserts a node at the end of the list", () => {
      const result = list.insert(3, "new value");
      strictEqual(result, true);
      strictEqual(list.get(3).value, "new value");
      strictEqual(list.length, 4);
    });
  
    it("inserts a node in the middle of the list", () => {
      const result = list.insert(1, "new value");
      strictEqual(result, true);
      strictEqual(list.get(1).value, "new value");
      strictEqual(list.length, 4);
    });
  
    it("returns false for an invalid index", () => {
      const result = list.insert(4, "new value");
      strictEqual(result, false);
      strictEqual(list.length, 3);
    });
  
    it("returns false for a negative index", () => {
      const result = list.insert(-1, "new value");
      strictEqual(result, false);
      strictEqual(list.length, 3);
    });
  
    it("returns false for an empty list with index > 0", () => {
      const emptyList = new DoublyLinkedList();
      const result = emptyList.insert(1, "new value");
      strictEqual(result, false);
      strictEqual(emptyList.length, 0);
    });
  });
  
  describe("remove method", () => {
    let list;
  
    beforeEach(() => {
      list = new DoublyLinkedList();
    });
  
    it("returns undefined if index is less than zero", () => {
      strictEqual(list.remove(-1), undefined);
      strictEqual(list.remove(-100), undefined);
    });
  
    it("returns undefined if index is greater than or equal to length", () => {
      list.push(1);
      strictEqual(list.remove(1), undefined);
      strictEqual(list.remove(100), undefined);
    });
  
    it("removes node at index 0 and returns removed node", () => {
      list.push(1);
      list.push(2);
      const removed = list.remove(0);
      strictEqual(list.length, 1);
      strictEqual(list.head.value, 2);
      strictEqual(list.tail.value, 2);
      strictEqual(removed.value, 1);
    });
  
    it("removes node at last index and returns removed node", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const removed = list.remove(2);
      strictEqual(list.length, 2);
      strictEqual(list.head.value, 1);
      strictEqual(list.tail.value, 2);
      strictEqual(removed.value, 3);
    });
  
    it("removes node at middle index and returns removed node", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const removed = list.remove(1);
      strictEqual(list.length, 2);
      strictEqual(list.head.value, 1);
      strictEqual(list.tail.value, 3);
      strictEqual(removed.value, 2);
    });
  
    it("sets next and prev to null on removed node", () => {
      list.push(1);
      const removed = list.remove(0);
      strictEqual(removed.next, null);
      strictEqual(removed.previous, null);
    });
  
    it("removed node should be unlinked from list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const result = list.remove(1);
  
      strictEqual(result.value, 2);
      strictEqual(result.previous, null);
      strictEqual(result.next, null);
    });
  });
})


