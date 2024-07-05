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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let minPoint = -1, maxPoint = -1
    let res = [-1, -1]
    let counter = 0
    let prev = head.val

    while (head.next !== null) {
        counter++
        if ((prev > head.val && head.val < head.next.val) || (prev < head.val && head.val > head.next.val)) {
            if (minPoint === -1) {
                minPoint = counter
            } else {
                res[0] = res[0] === -1 ? counter - minPoint : Math.min(res[0], counter - maxPoint)
                res[1] = counter - minPoint
            }
            maxPoint = counter
        }

        prev = head.val
        head = head.next
    }

    return res
};