import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {

  if (node === null) return [];

  const visitedNodes: number[] = [];

  if (node.left) {
    visitedNodes.push(...inOrder(node.left));
  }

  visitedNodes.push(node.val);

  if (node.right) {
    visitedNodes.push(...inOrder(node.right));
  }

  return visitedNodes;
}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
    node: BNodeNum | null = null,
    accum: number[] = []): number[] {
  return [42];
}


export { inOrder, inOrderAccum };
