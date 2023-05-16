import BinarySearchTree, { BinarySearchTreeNode } from "../binary-search-tree";

export function depthFirstSearchInOrder(bst: BinarySearchTree) {
  const result: any[] = [];

  function traverse(node: BinarySearchTreeNode) {
    if (node.left) traverse(node.left);
    result.push(node.value);
    if (node.right) traverse(node.right);
  }

  const current = bst.root;
  if (current) traverse(current);

  return result;
}
