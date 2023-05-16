import BinarySearchTree, { BinarySearchTreeNode } from '../binary-search-tree'

export function breadthFirstSearch(bst: BinarySearchTree){
  const result: any[] = []
  const queue: BinarySearchTreeNode[] = []

  if(bst.root){
    queue.push(bst.root)

    while(queue.length > 0){
      const current = queue.shift()
  
      if(current){
        result.push(current.value)
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
      }
    }
  }

  return result
}