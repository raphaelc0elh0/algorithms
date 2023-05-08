export default class Queue {
  enqueue(value: any){
    const node = new QueueNode(value);

    if (!this.first || !this.last) {
      this.first = node;
    } else {
      this.last.next = node;
    }

    this.last = node;
    this.size++;

    return this.size;
  }

  dequeue(){
    if (!this.first || !this.last) return undefined;

    let toBeRemoved: QueueNode | null = this.first;
    this.first = toBeRemoved.next;
    this.size--;

    if (this.size === 0) this.emptyFirstAndLast();

    return toBeRemoved;
  }

  print(){
    let arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  private emptyFirstAndLast() {
    this.first = null;
    this.last = null;
  }

  constructor() {}

  size: number = 0;
  first: QueueNode | null = null;
  last: QueueNode | null = null;
}

class QueueNode {
  constructor(value: any, next: QueueNode | null = null) {
    this.value = value;
    this.next = next;
  }

  value: any;
  next: QueueNode | null;
}