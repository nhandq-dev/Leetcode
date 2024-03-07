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

function middleNode(head: ListNode | null): ListNode | null {
    let midVal: ListNode | null = head;

    while (head!==null) {
        if(head.next === null) break;
        midVal = midVal.next;
        head = head.next.next;
    }
    return midVal;
};