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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let res: TreeNode | null = null
	const dfs = (node: TreeNode): number => {
        if (node === null) return 0

        const leftPath = dfs(node.left)
        const rightPath = dfs(node.right)

        if (leftPath + rightPath === 1) {
            if (node === p || node === q) {
                res = node
                return 2
            }
            return 1
        } else if (leftPath + rightPath === 2) {
            if (res === null) {
                res = node
            }
        } if (node === p || node === q) {
            return 1
        }

        return leftPath + rightPath
    }
    dfs(root)

    return res
};