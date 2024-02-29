import { BNodeNum } from "../common/bst";

import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  const visitedNodes: number[] = [];

  if (node === null) return visitedNodes;

  const toVisit = new Queue([node]);

  while (!toVisit.isEmpty()) {
    let curr = toVisit.dequeue(); //TODO: make const
    visitedNodes.push(curr.val);
    if (curr.left) toVisit.enqueue(curr.left);
    if (curr.right) toVisit.enqueue(curr.right);
  }

  return visitedNodes;
}

export { bfs };