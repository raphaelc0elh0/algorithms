export default class BinarySearchTree {

  insert(value: any){
    const node = new BinarySearchTreeNode(value)

    if(!this.root) {
      this.root = node
      return this
    }

    let current = this.root

    while (true){
      if(value === current.value) return undefined

      if(value < current.value){
        if(!current.left) {
          current.left = node
          return this
        }
        current = current.left
      }
      
      if(value > current.value) {
        if(!current.right) {
          current.right = node
          return this
        }
        current = current.right
      }

    }
  }

  find(value: any){
    let current = this.root
    
    while (true){
      if(!current) return false

      if(value < current.value){
        current = current.left
      } else if(value > current.value) {
        current = current.right
      } else {
        return current
      }
    }
  }
  
  constructor() {}

  root: BinarySearchTreeNode | null = null
}

class BinarySearchTreeNode {
  constructor(value: any = null) {
    this.value = value ?? null
  }

  value: any
  left:  BinarySearchTreeNode | null = null
  right:  BinarySearchTreeNode | null = null
}