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

function hasCycle(head: ListNode | null): boolean {
    let runner = head;
    let fasterRunner = head;

    while (runner && runner.next && fasterRunner.next && fasterRunner.next.next) {
        runner = runner.next
        fasterRunner = fasterRunner.next.next

        if (runner === fasterRunner) {
            return true
        }
    }

    return false
};