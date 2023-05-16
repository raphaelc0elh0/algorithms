import BinarySearchTree, { BinarySearchTreeNode } from "../binary-search-tree";

export function depthFirstSearchPreOrder(bst: BinarySearchTree) {
  const result: any[] = [];

  function traverse(node: BinarySearchTreeNode) {
    result.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  const current = bst.root;
  if (current) traverse(current);

  return result;
}
