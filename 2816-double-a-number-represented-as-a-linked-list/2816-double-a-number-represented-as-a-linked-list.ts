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

function doubleIt(head: ListNode | null): ListNode | null {
    if (head === null) return null

    let memo = 0
    const backTrack = (list: ListNode): ListNode => {
        if (list.next === null) {
            const newVal = 2 * list.val + memo
            memo = newVal >= 10 ? 1 : 0
            return new ListNode(newVal%10, null)
        }

        const next = backTrack(list.next)
        const newVal = 2 * list.val + memo
        memo = newVal >= 10 ? 1 : 0
        return new ListNode(newVal%10, next)
    }
    const result = backTrack(head)

    return memo === 1 ? new ListNode(1, result) : result
};