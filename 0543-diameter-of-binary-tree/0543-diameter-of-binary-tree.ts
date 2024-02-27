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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let res = 0

    const dfs = (node: TreeNode | null): number => {
        if (node === null) return 0
        const [leftDep, rightDeep] = [dfs(node.left), dfs(node.right)]

        res = Math.max(res, leftDep + rightDeep)
        return 1 + Math.max(leftDep, rightDeep)
    }
    dfs(root)

    return res
};