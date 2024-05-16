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

const LEAF_FALSE = 0
const LEAF_TRUE = 1
const NODE_AND = 3
const NODE_OR = 2

function evaluateTree(root: TreeNode | null): boolean {
    const dfs = (node: TreeNode): boolean => {
        if (node.left === null && node.right === null) {
            return node.val === LEAF_TRUE
        }

        if (node.val === NODE_AND) {
            return node.left !== null ?
                node.right !== null ?
                    dfs(node.left) && dfs(node.right) :
                    dfs(node.left) :
                dfs(node.right)
        }

        return node.left !== null ?
                node.right !== null ?
                    dfs(node.left) || dfs(node.right) :
                    dfs(node.left) :
                dfs(node.right)
    }

    return dfs(root)
};