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

function isValidBST(root: TreeNode | null, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY): boolean {
    if (root === null) return true;
    if (root.val >= max || root.val <= min) return false

    if (root.left !== null) {
        if (root.val <= root.left.val || !isValidBST(root.left, min, root.val)) {
            return false
        }
    }

    if (root.right !== null) {
        if (root.val >= root.right.val || !isValidBST(root.right, root.val, max)) {
            return false
        }
    }

    return true
};