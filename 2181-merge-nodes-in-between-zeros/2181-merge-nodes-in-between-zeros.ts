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

function mergeNodes(head: ListNode | null): ListNode | null {
    const travelling = (list: ListNode | null): ListNode | null => {
        if (list === null) return list

        let total = 0
        while (list.val !== 0) {
            total += list.val
            list = list.next
        }

        return new ListNode(total, travelling(list.next))
    }

    return travelling(head.next)
};