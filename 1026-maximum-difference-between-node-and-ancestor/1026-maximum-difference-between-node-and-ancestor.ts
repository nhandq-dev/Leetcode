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

function maxAncestorDiff(root: TreeNode | null): number {
    const travelling = (node: TreeNode | null, prefixMinVal: number, prefixMaxVal: number): number => {
        if (node === null) return 0

        return Math.max(
            Math.abs(prefixMinVal - node.val),
            Math.abs(prefixMaxVal - node.val),
            travelling(node.left, Math.min(node.val, prefixMinVal), Math.max(node.val, prefixMaxVal)),
            travelling(node.right, Math.min(node.val, prefixMinVal), Math.max(node.val, prefixMaxVal)),
        )
    }

    return Math.max(travelling(root.left, root.val, root.val), travelling(root.right, root.val, root.val))
};