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

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    const res: number[][] = Array.from({ length: m }, _ => Array.from({ length: n }, _ => -1))
    let rowRunner = 0, colRunner = 0
    let higestRow = -1, lowestRow = m
    let leftCol = -1, rightCol = n

    const goRight = () => {
        if (head === null) return
        while (head !== null && colRunner < rightCol) {
            res[rowRunner][colRunner] = head.val
            head = head.next
            colRunner++
        }
        colRunner--
        rowRunner++
        higestRow++

        return goDown()
    }

    const goDown = () => {
        if (head === null) return
        while (head !== null && rowRunner < lowestRow) {
            res[rowRunner][colRunner] = head.val
            head = head.next
            rowRunner++
        }
        rowRunner--
        colRunner--
        rightCol--

        return goLeft()
    }

    const goLeft = () => {
        if (head === null) return
        while (head !== null && colRunner > leftCol) {
            res[rowRunner][colRunner] = head.val
            head = head.next
            colRunner--
        }
        colRunner++
        rowRunner--
        lowestRow--

        return goUp()
    }

    const goUp = () => {
        if (head === null) return
        while (head !== null && rowRunner > higestRow) {
            res[rowRunner][colRunner] = head.val
            head = head.next
            rowRunner--
        }
        rowRunner++
        colRunner++
        leftCol++

        return goRight()
    }
    goRight()

    return res
};