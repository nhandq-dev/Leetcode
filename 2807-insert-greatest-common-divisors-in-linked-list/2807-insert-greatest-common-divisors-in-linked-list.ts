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

function getGCD(num1: number, num2: number): number {
    while (num1 % num2 !== 0) {
        [num1, num2] = [num2, num1 % num2]
    }

    return num2
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (head === null) return null

    const backTracking = (node: ListNode | null) => {
        if (node.next === null) {
            return node
        }

        const nextNode = backTracking(node.next)
        const gcd = getGCD(nextNode.val, node.val)
        return new ListNode(node.val, new ListNode(gcd, nextNode))
    }

    return backTracking(head)
};