import { before, beforeEach, describe, it } from "node:test";
import SinglyLinkedList from "./singly-linked-list";
import { strictEqual } from "node:assert";


describe('push method', () => {
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // Increment the length by one
  // Return the linked list

  let list

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  it('should add a node to an empty list', () => {
    strictEqual(list.head, null)
    strictEqual(list.tail, null)
    strictEqual(list.length,0);

    list.push(1);

    strictEqual(list.head.value,1);
    strictEqual(list.tail.value,1);
    strictEqual(list.head.next, null)
    strictEqual(list.tail.next, null)
    strictEqual(list.length,1);
  });

  it('should add a node to a non-empty list', () => {
    list.push(1);
    list.push(2);

    strictEqual(list.head.value,1);
    strictEqual(list.tail.value,2);
    strictEqual(list.head.next.value,2);
    strictEqual(list.tail.next, null)
    strictEqual(list.length,2);
  });
});

describe('pop method', () => {
  // If there are no nodes in the list, return undefined
  // Loop through the list until you reach the tail
  // Set the next property of the 2nd to last node to be null
  // Set the tail to be the 2nd to last node
  // Decrement the length of the list by 1
  // Return the value of the node removed

  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  it('should return undefined if list is empty', () => {
    const removed = list.pop();
    strictEqual(removed, undefined);
    strictEqual(list.length, 0);
    strictEqual(list.head, null);
    strictEqual(list.tail, null);
  });

  it('should remove the tail node from a list of length 1', () => {
    list.push(1);

    const removed = list.pop();

    strictEqual(removed.value, 1);
    strictEqual(list.length, 0);
    strictEqual(list.head, null);
    strictEqual(list.tail, null);
  });

  it('should remove the tail node from a list of length > 1', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const removed = list.pop();

    strictEqual(removed.value, 3);
    strictEqual(list.length, 2);
    strictEqual(list.head.value, 1);
    strictEqual(list.tail.value, 2);
    strictEqual(list.tail.next, null);
  });
});

describe('shift method', () => {
  // If there are no nodes, return undefined
  // Store the current head property in a variable
  // Set the head property to be the current head's next property
  // Decrement the length by 1
  // Return the value of the node removed

  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  it('should return undefined if list is empty', () => {
    const removed = list.shift();
    strictEqual(removed, undefined);
    strictEqual(list.length, 0);
    strictEqual(list.head, null);
    strictEqual(list.tail, null);
  });

  it('should remove the head node from a list of length 1', () => {
    list.push(1);

    const removed = list.shift();

    strictEqual(removed.value, 1);
    strictEqual(list.length, 0);
    strictEqual(list.head, null);
    strictEqual(list.tail, null);
  });

  it('should remove the head node from a list of length > 1', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const removed = list.shift();

    strictEqual(removed.value, 1);
    strictEqual(list.length, 2);
    strictEqual(list.head.value, 2);
    strictEqual(list.tail.value, 3);
    strictEqual(list.head.next.value, 3);
  });
});

describe('unshift method', () => {
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the newly created node's next property to be the current head property on the list
  // Set the head property on the list to be that newly created node
  // Increment the length of the list by 1
  // Return the linked list

  let list;

  beforeEach(() => {
    // create a new instance of the list before each test
    list = new SinglyLinkedList();
  });

  it('should add a new head node to an empty list', () => {
    list.unshift(1);

    strictEqual(list.length, 1);
    strictEqual(list.head.value, 1);
    strictEqual(list.tail.value, 1);
  });

  it('should add a new head node to a list of length 1', () => {
    list.push(1);

    list.unshift(2);

    strictEqual(list.length, 2);
    strictEqual(list.head.value, 2);
    strictEqual(list.tail.value, 1);
    strictEqual(list.head.next, list.tail);
  });

  it('should add a new head node to a list of length > 1', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    list.unshift(0);

    strictEqual(list.length, 4);
    strictEqual(list.head.value, 0);
    strictEqual(list.tail.value, 3);
    strictEqual(list.head.next.value, 1);
  });
});

describe('get method', () => {
  // This function should accept an index
  // If the index is less than zero or greater than or equal to the length of the list, return null
  // Loop through the list until you reach the index and return the node at that specific index
  
  let list;

  before(() => {
    list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
  });

  it('returns undefined if the index is less than zero', () => {
    strictEqual(list.get(-1), undefined);
  });

  it('returns undefined if the index is greater than or equal to the length of the list', () => {
    strictEqual(list.get(3), undefined);
    strictEqual(list.get(10), undefined);
  });

  it('returns the node at the specified index', () => {
    strictEqual(list.get(0).value, 1);
    strictEqual(list.get(1).value, 2);
    strictEqual(list.get(2).value, 3);
  });
});

describe('set method', () => {
  // This function should accept a value and an index
  // Use your get function to find the specific node.
  // If the node is not found, return false
  // If the node is found, set the value of that node to be the value passed to the function and return true  
  
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
  });

  it('should update the value of the node at the given index', () => {
    strictEqual(list.set(1, 4), true);
    strictEqual(list.get(1).value, 4);
  });

  it('should return false if the index is out of range', () => {
    strictEqual(list.set(3, 4), false);
  });

  it('should return false if the node is not found', () => {
    strictEqual(list.set(4, 5), false);
  });
});

describe('insert method', () => {
  // If the index is less than zero or greater than the length, return false
  // If the index is the same as the length, push a new node to the end of the list
  // If the index is 0, unshift a new node to the start of the list
  // Otherwise, using the get method, access the node at the index - 1
  // Set the next property on that node to be the new node
  // Set the next property on the new node to be the previous next
  // Increment the length
  // Return true

  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
  });

  it('should insert a new node at the beginning of the list', () => {
    strictEqual(list.insert(0, 0), true);
    strictEqual(list.get(0).value, 0);
    strictEqual(list.length, 4);
  });

  it('should insert a new node at the end of the list', () => {
    strictEqual(list.insert(3, 4), true);
    strictEqual(list.get(3).value, 4);
    strictEqual(list.length, 4);
  });

  it('should insert a new node at the given index', () => {
    strictEqual(list.insert(1, 5), true);
    strictEqual(list.get(1).value, 5);
    strictEqual(list.get(2).value, 2);
    strictEqual(list.length, 4);
  });

  it('should return false if the index is less than zero', () => {
    strictEqual(list.insert(-1, 4), false);
    strictEqual(list.length, 3);
  });

  it('should return false if the index is greater than the length', () => {
    strictEqual(list.insert(5, 4), false);
    strictEqual(list.length, 3);
  });
});

describe('remove method', () => {
  // If the index is less than zero or greater than the length, return undefined
  // If the index is the same as the length-1, pop
  // If the index is 0, shift
  // Otherwise, using the get method, access the node at the index - 1
  // Set the next property on that node to be the next of the next node
  // Decrement the length
  // Return the value of the node removed

  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
  });

  it('should remove the node at the beginning of the list', () => {
    strictEqual(list.remove(0).value, 1);
    strictEqual(list.length, 2);
    strictEqual(list.get(0).value, 2);
  });

  it('should remove the node at the end of the list', () => {
    strictEqual(list.remove(2).value, 3);
    strictEqual(list.length, 2);
    strictEqual(list.get(2), undefined);
  });

  it('should remove the node at the given index', () => {
    strictEqual(list.remove(1).value, 2);
    strictEqual(list.length, 2);
    strictEqual(list.get(0).value, 1);
    strictEqual(list.get(1).value, 3);
  });

  it('should return undefined if the index is less than zero', () => {
    strictEqual(list.remove(-1), undefined);
    strictEqual(list.length, 3);
  });

  it('should return undefined if the index is greater than the length', () => {
    strictEqual(list.remove(5), undefined);
    strictEqual(list.length, 3);
  });

  it('should remove the only node in the list', () => {
    const singleNodeList = new SinglyLinkedList();
    singleNodeList.push(1);
    strictEqual(singleNodeList.remove(0).value, 1);
    strictEqual(singleNodeList.length, 0);
    strictEqual(singleNodeList.head, null);
    strictEqual(singleNodeList.tail, null);
  });
});

describe("reverse method", () => {
  // Swap the head and tail
  // Create a variable called next
  // Create a variable called prev
  // Create a variable called node and initialize it to the head property
  // Loop through the list
  // Set next to be the next property on whatever node is
  // Set the next property on the node to be whatever prev is
  // Set prev to be the value of the node variable
  // Set the node variable to be the value of the next variable
  // Once you have finished looping, return the list

  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
  });

  it("reverse method should swap head and tail", () => {
    strictEqual(list.head.value, 1);
    strictEqual(list.tail.value, 4);
    list.reverse();
    strictEqual(list.head.value, 4);
    strictEqual(list.tail.value, 1);
  });

  it("reverse method should reverse the list", () => {
    strictEqual(list.get(0).value, 1);
    strictEqual(list.get(1).value, 2);
    strictEqual(list.get(2).value, 3);
    strictEqual(list.get(3).value, 4);
    list.reverse();
    strictEqual(list.get(0).value, 4);
    strictEqual(list.get(1).value, 3);
    strictEqual(list.get(2).value, 2);
    strictEqual(list.get(3).value, 1);
  });
});