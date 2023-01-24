/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let currentNode = head;
  let endNode = head;

  for (let i = 0; i < n; i++) {
    endNode = endNode.next;
  }

  if (!endNode) {
    return head.next;
  }

  while (endNode.next) {
    currentNode = currentNode.next;
    endNode = endNode.next;
  }
  currentNode.next = currentNode.next.next;

  return head;
}
