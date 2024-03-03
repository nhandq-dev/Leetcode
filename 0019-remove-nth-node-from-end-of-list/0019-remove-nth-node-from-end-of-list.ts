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
    if(head === null || head.next === null) return null;

    const travelHead = function (head: ListNode): ListNode | null {
        if (head === null) return null;

        const res = new ListNode(head.val);
        res.next = travelHead(head.next);

        if(n===1) {
            n -= 1;
            return res.next;
        }
        n -= 1;
        return res;
    }

    return travelHead(head);
};

