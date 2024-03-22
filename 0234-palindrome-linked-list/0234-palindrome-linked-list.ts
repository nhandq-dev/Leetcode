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

function isPalindrome(head: ListNode | null): boolean {
    if (head.next === null) return true;
    const stack: number[] = [];
    let doubleStep = head.next.next

    while (head !== null) {
        stack.push(head.val);

        // event number of node
        if (doubleStep === null) {
            head = head.next;
            while (head !== null) {
                if (head.val !== stack.pop()) {
                    return false
                }
                head = head.next
            }
            return true;
        }
        // odd number of node
        if (doubleStep.next === null) {
            head = head.next.next;
            while (head !== null) {
                if (head.val !== stack.pop()) {
                    return false
                }
                head = head.next
            }
            return true;
        }

        head = head.next
        doubleStep = doubleStep.next.next
    }


    return false;
};
