/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let currentNode = head;
  let midNode = head;
  let i = 1;
  while (currentNode !== null) {
    if (i % 2 !== 0 && currentNode.next !== null) {
      midNode = midNode.next;
    }

    currentNode = currentNode.next;
    i++;
  }

  return midNode;
};
