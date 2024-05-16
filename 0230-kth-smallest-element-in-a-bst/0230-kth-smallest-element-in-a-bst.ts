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

function kthSmallest(root: TreeNode | null, k: number): number {
    const dfs = (node: TreeNode): number[] => {
        if (node.left === null && node.right === null) {
            return [node.val]
        }

        let val: number[] = [node.val]
        if (node.left !== null)
            val = [...dfs(node.left), ...val]
        if (node.right !== null)
            val = [...val, ...dfs(node.right)]

        return val
    }

    return dfs(root)[k-1]
};