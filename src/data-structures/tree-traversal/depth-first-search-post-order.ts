import BinarySearchTree, { BinarySearchTreeNode } from "../binary-search-tree";

export function depthFirstSearchPostOrder(bst: BinarySearchTree) {
  const result: any[] = [];

  function traverse(node: BinarySearchTreeNode) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.value);
  }

  const current = bst.root;
  if (current) traverse(current);

  return result;
}
