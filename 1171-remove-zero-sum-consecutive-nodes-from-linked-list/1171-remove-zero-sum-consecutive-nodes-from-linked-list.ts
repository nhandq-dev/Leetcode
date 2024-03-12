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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    if (head === null) return null

    let iRunner: ListNode | null = head
    let res: ListNode | null = null

    while (iRunner !== null) {
        if (iRunner.val === 0) {
            iRunner = iRunner.next
            continue
        }
        let target = 0 - iRunner.val
        let jRunner: ListNode | null = iRunner.next
        let candidate: ListNode | null = null

        while (jRunner !== null) {
            target -= jRunner.val

            if (target === 0) {
                candidate = jRunner.next
            }

            jRunner = jRunner.next
        }
        if (candidate !== null) {
            res = new ListNode(candidate.val, res)
            iRunner = candidate.next
            continue
        }
        if (target === 0) break

        res = new ListNode(iRunner.val, res)
        iRunner = iRunner.next
    }
    res = revertListNode(res)

    return res
};

function revertListNode(node: ListNode | null): ListNode | null {
    let res = null

    while (node !== null) {
        res = new ListNode(node.val, res)
        node = node.next
    }

    return res
}
