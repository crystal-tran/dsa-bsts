import { BNodeNum } from "../common/bst";


/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {
  if(node === null) return null;
  let current = node;

  if(current.val === val) return current;

  const nextNode = (current.val > val) ? current.left : current.right;

  return findRecursively(nextNode, val)
}


/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {
  let current = node;

  while(current){
    if(current.val === val) return current;

    current = (current.val > val) ? current.left : current.right;
  }

  //if the node is not null
  //if the node is the val that we are looking for, return the node
  //val < current.val ? current.left : current right
  return null;
}

export { findRecursively, find };