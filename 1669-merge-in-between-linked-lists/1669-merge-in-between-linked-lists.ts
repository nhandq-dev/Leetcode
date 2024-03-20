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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let res: ListNode | null = null
    if (list1 === null) return list2
    let i = 0

    while (list1 !== null) {
        // start split
        if (i === a) {
            // removing from a to b
            while (i <= b) {
                list1 = list1.next
                i++
            }

            // adding list 2
            while (list2 !== null) {
                res = new ListNode(list2.val, res)
                list2 = list2.next
            }

            continue
        }

        // push list1 item into res
        res = new ListNode(list1.val, res)
        list1 = list1.next
        i++
    }

    return reverst(res)
};

function reverst(list: ListNode): ListNode {
    let res: ListNode | null = null

    while (list !== null) {
        res = new ListNode(list.val, res)
        list = list.next
    }

    return res
}