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

function pseudoPalindromicPaths (root: TreeNode | null): number {
    let res = 0

    const dfs = (node: TreeNode | null, prefix: number = 0): void => {
        prefix ^= (1 << node.val)
        if (node.left === null && node.right === null) {
            if (prefix === 0 || Math.log2(prefix) % 1 === 0) {
                res += 1
            }
            return
        }

        if (node.left) {
            dfs(node.left, prefix)
        }

        if (node.right) {
            dfs(node.right, prefix)
        }
    }
    dfs(root)

    return res
};

/**

1 << 2


 */