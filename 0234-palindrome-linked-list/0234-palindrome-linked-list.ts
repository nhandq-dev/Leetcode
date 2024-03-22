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

function isPalindrome(head: ListNode | null): boolean {
  if (head.next === null) return true;
  const stackFirstHaft: number[] = [];
  const stackLastHaft: number[] = [];

  const backTracking = (node: ListNode, doubleStep: ListNode | null): void => {
    stackFirstHaft.push(node.val);

    if (doubleStep === null || doubleStep.next === null) {
      node = node.next;
      while (node !== null) {
        stackLastHaft.unshift(node.val);
        node = node.next;
      }
      return;
    }
    backTracking(node.next, doubleStep.next.next);
    return;
  }
  backTracking(head, head.next.next)
  if (stackLastHaft.length > stackFirstHaft.length) {
    stackLastHaft.pop();
  }

  return JSON.stringify(stackFirstHaft) === JSON.stringify(stackLastHaft);
};
