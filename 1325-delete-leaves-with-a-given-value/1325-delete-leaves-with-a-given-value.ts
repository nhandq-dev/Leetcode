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

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    const dfs = (node: TreeNode | null): TreeNode | null => {
        if (node === null) return null

        node.left = dfs(node.left)
        node.right = dfs(node.right)
        if (node.left === null && node.right === null && node.val === target) return null

        return node
    }

    return dfs(root)
};