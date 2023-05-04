export default class DoublyLinkedList {
  push(value: any){
    const node = new DoublyLinkedListNode(value, this.tail, null)

    if(!this.head || !this.tail){
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
    this.length++

    return this
  }

  pop(){
    if (!this.head || !this.tail) return undefined;

    const toBeRemoved = this.tail
    this.tail = toBeRemoved.previous
    toBeRemoved.previous = null

    if(this.tail){
      this.tail.next = null
    } else {
      this.head = null
    }

    this.length--
    if (this.length === 0) this.emptyHeadAndTail();

    return toBeRemoved
  }

  shift(){
    if (!this.head || !this.tail) return undefined;

    let oldHead: DoublyLinkedListNode | null = this.head;
    this.head = oldHead.next;
    oldHead.next = null

    if(this.head){
      this.head.previous = null
    }

    this.length--;
    if (this.length === 0) this.emptyHeadAndTail();

    return oldHead
  }

  unshift(value: any){
    let oldHead: DoublyLinkedListNode | null = this.head;

    const node = new DoublyLinkedListNode(value, null, oldHead);

    if(oldHead){
      oldHead.previous = node
    }

    this.head = node
    if (!this.tail) this.tail = node;
    this.length++;

    return this
  }

  get(idx: number){
    if (idx < 0 || idx >= this.length) return undefined;

    const fromHead = idx <= Math.round(this.length / 2)
    let current: DoublyLinkedListNode | null = fromHead ? this.head : this.tail

    if(fromHead) {
      for (let i = 0; i < idx; i++) {
        if (!current?.next) return undefined;
        current = current?.next;
      }
    } else {
      for (let i = this.length - 1; i > idx; i--) {
        if (!current?.previous) return undefined;
        current = current?.previous;
      }
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

    const node = new DoublyLinkedListNode(value);

    const previous = this.get(idx - 1);
    const next = previous?.next

    if (previous) {
      previous.next = node
      node.previous = previous
    }

    if(next){
      next.previous = node
      node.next = next
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

    const removed = this.get(idx);

    if(removed){
      const previous = removed.previous
      const next = removed.next

      if (previous) {
        previous.next = next
      }

      if(next) {
        next.previous = previous
      }

      removed.previous = null
      removed.next = null
    }

    this.length--;

    if (this.length === 0) this.emptyHeadAndTail();

    return removed;
  }

  print(){
    let arr = [];
    let current = this.head;
    while (current) {
      const {value, next, previous} = current
      arr.push({value, next: next?.value ?? null, previous: previous?.value ?? null});
      current = current.next;
    }
    console.log(JSON.stringify(arr, null, 2));
  }

  private emptyHeadAndTail() {
    this.head = null;
    this.tail = null;
  }

  constructor() {}

  length: number = 0;
  head: DoublyLinkedListNode | null = null;
  tail: DoublyLinkedListNode | null = null;
}

class DoublyLinkedListNode {
  value: any;
  previous: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(value: any, previous: DoublyLinkedListNode | null = null, next: DoublyLinkedListNode | null = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}
