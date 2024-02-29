import { BSTNum, BNodeNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  //start at root for BST
  //base case: null => add there (need to make new node with val)
  /// if val > node.val => go right and call again
  /// if val < node.val => go left and call again

  if (bst.root === null) {
    bst.root = new BNodeNum(val); //root 7
    return;
  }

  //At this point, we know we're in a node
  /// val > node.val && node.right is null => insert right
  /// val < node.val && node.left is null => insert left

  let curr = bst.root;
  if (val > curr.val) {
    const rightTree = new BSTNum(curr.right);
    insertRecur(rightTree, val);
    curr.right = rightTree.root;
  }
  else {
    const leftTree = new BSTNum(curr.left);
    insertRecur(leftTree, val);
    curr.left = leftTree.root;
  }
}

export { insertRecur };

