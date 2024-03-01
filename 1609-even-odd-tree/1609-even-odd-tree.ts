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

function isEvenOddTree(root: TreeNode | null): boolean {
    const bfs = (nodes: TreeNode[], isOdd: boolean): boolean => {
        if (nodes.length === 0) return true
        let prev = isOdd ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY
        const nextLevel: TreeNode[] = []

        for (const node of nodes) {
            if (isOdd) {
                if (node.val % 2 === 0 || node.val <= prev) {
                    return false
                }
            } else {
                if (node.val % 2 === 1 || node.val >= prev) {
                    return false
                }
            }

            prev = node.val
            if (node.left) {
                nextLevel.push(node.left)
            }
            if (node.right) {
                nextLevel.push(node.right)
            }
        }

        return bfs(nextLevel, !isOdd)
    }

    return root === null ? true : bfs([root], true)
};