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

function pairSum(head: ListNode | null): number {
    let fasterRun: ListNode | null = head.next.next
    const stack: number[] = []
    let res = 0

    while (head !== null) {
        stack.push(head.val)

        if (fasterRun === null) {
            head = head.next
            while (head !== null) {
                res = Math.max(res, head.val + stack.pop())
                head = head.next
            }
            break
        }


        head = head.next
        fasterRun = fasterRun.next.next
    }

    return res
};