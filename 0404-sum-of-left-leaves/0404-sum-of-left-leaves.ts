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

function sumOfLeftLeaves(root: TreeNode | null, isLeft: boolean = false): number {
    if (root.left === null && root.right === null) {
        return isLeft ? root.val : 0
    }
    let res = 0

    if (root.right) {
        res += sumOfLeftLeaves(root.right)
    }
    if (root.left) {
        res += sumOfLeftLeaves(root.left, true)
    }
    return res
};