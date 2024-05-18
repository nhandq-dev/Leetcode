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

function distributeCoins(root: TreeNode | null): number {
    let res = 0

    const dfs = (node: TreeNode): number => {
        if (node.left === null && node.right === null) {
            res += Math.abs(node.val - 1)
            return node.val - 1
        }

        let totalMovement = node.left ? dfs(node.left) : 0 // 2
        totalMovement += node.right ? dfs(node.right) : 0 // -1
        totalMovement += node.val - 1

        res += Math.abs(totalMovement)
        return totalMovement
    }
    dfs(root)

    return res
};