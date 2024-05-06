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

function removeNodes(head: ListNode | null): ListNode | null {
    const traveling = (node: ListNode | null): ListNode | null => {
        if (node.next === null) {
            return node;
        }

        const next: ListNode | null = traveling(node.next);
        return node.val >= next.val ? new ListNode(node.val, next) : next;
    }

    return traveling(head);
};