/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function amountOfTime(root: TreeNode | null, start: number): number {
    if (root === null) return 0
    let res = 0

    const travelling = (node: TreeNode | null): number => {
        if (node === null) return 0
        // console.log(node.val, countMid)

        const leftTraveler = travelling(node.left)
        const rightTraveler = travelling(node.right)

        if (node.val === start) {
            res = Math.max(leftTraveler, rightTraveler)
            return -1
        }

        // if non of there children contain start inflect
        if (leftTraveler >= 0 && rightTraveler >= 0) {
            return 1 + Math.max(leftTraveler, rightTraveler)
        }

        // if fount the start from left or right children
        res = Math.max(res, Math.abs(leftTraveler - rightTraveler))
        return Math.min(leftTraveler, rightTraveler) - 1
    }
    travelling(root)

    return res
};