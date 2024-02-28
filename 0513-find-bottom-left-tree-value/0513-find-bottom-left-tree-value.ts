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

function findBottomLeftValue(root: TreeNode | null): number {
    const bfs = (node: TreeNode | null): number => {
        if (node === null) return 0
        let res = node.val

        const candidate = []
        if (node.left) {
            candidate.push(node.left)
        }
        if (node.right) {
            candidate.push(node.right)
        }

        while (candidate.length !== 0) {
            res = candidate[0].val
            const n = candidate.length

            for (let i =0; i<n; i++) {
                const candidateNode = candidate.shift()
                if (candidateNode.left) {
                    candidate.push(candidateNode.left)
                }
                if (candidateNode.right) {
                    candidate.push(candidateNode.right)
                }
            }
        }

        return res
    }

    return bfs(root)
};