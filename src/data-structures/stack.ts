export default class Stack {
  push(value: any){
    const node = new StackNode(value, this.first)

    this.first = node
    if (!this.last) this.last = node;
    this.size++

    return this.size
  }

  pop(){
    if (!this.first || !this.last) return undefined;

    const toBePopped: StackNode | null = this.first;
    this.first = toBePopped.next;
    this.size--;

    if (this.size === 0) this.emptyFirstAndLast();

    return toBePopped;
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
  first: StackNode | null = null;
  last: StackNode | null = null;
}

class StackNode {
  constructor(value: any, next: StackNode | null = null) {
    this.value = value;
    this.next = next;
  }

  value: any;
  next: StackNode | null;
}