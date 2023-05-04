export default class SinglyLinkedList {
  length: number = 0;
  head: SinglyLinkedListNode | null = null;
  tail: SinglyLinkedListNode | null = null;

  constructor() {}

  push(value: any) {
    const node = new SinglyLinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head || !this.tail) return undefined;

    let current: SinglyLinkedListNode | null = this.head;
    let pre = current;

    while (current.next) {
      pre = current;
      current = current.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) this.emptyHeadAndTail();

    return current;
  }

  shift() {
    if (!this.head || !this.tail) return undefined;

    let oldHead: SinglyLinkedListNode | null = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) this.emptyHeadAndTail();

    return oldHead;
  }

  unshift(value: any) {
    let oldHead: SinglyLinkedListNode | null = this.head;

    const node = new SinglyLinkedListNode(value, oldHead);

    this.head = node;
    if (!this.tail) this.tail = node;
    this.length++;

    return this;
  }

  get(idx: number) {
    if (idx < 0 || idx >= this.length) return undefined;

    let current: SinglyLinkedListNode | null = this.head;

    for (let i = 0; i < idx; i++) {
      if (!current?.next) return undefined;
      current = current?.next;
    }

    return current;
  }

  set(idx: number, value: any) {
    const current = this.get(idx);

    if (!current) {
      return false;
    }

    current.value = value;
    return true;
  }

  insert(idx: number, value: any) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      return !!this.unshift(value);
    }

    if (idx === this.length) {
      return !!this.push(value);
    }

    const node = new SinglyLinkedListNode(value);
    const previous = this.get(idx - 1);
    if (previous) {
      node.next = previous.next;
      previous.next = node;
    }

    this.length++;

    return true;
  }

  remove(idx: number) {
    if (idx < 0 || idx >= this.length) return undefined;

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    const previous = this.get(idx - 1);
    const removed = previous?.next;
    if (previous && removed) {
      previous.next = removed.next;
    }

    this.length--;

    if (this.length === 0) this.emptyHeadAndTail();

    return removed;
  }

  reverse() {
    let node = this.head as SinglyLinkedListNode;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next as SinglyLinkedListNode;
    }
    return this;
  }

  print(){
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  private emptyHeadAndTail() {
    this.head = null;
    this.tail = null;
  }
}

class SinglyLinkedListNode {
  value: any;
  next: SinglyLinkedListNode | null;

  constructor(value: any, next: SinglyLinkedListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

