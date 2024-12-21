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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if (root === null) return null
    const stack: (TreeNode | null)[] = [root]
    let resAsArr: number[] = []

    while (stack.length > 0) {
        const n = stack.length
        const level = Math.log2(n)

        for (let i = 0; i < n; i++) {
            const crrNode: TreeNode | null = stack.shift()

            if (level % 2 === 0) {
                resAsArr[n - 1 + i] = crrNode.val
            } else {
                resAsArr[n - 1 + n - 1 - i] = crrNode.val
            }

            if (crrNode.left) {
                stack.push(crrNode.left)
                stack.push(crrNode.right)
            }
        }
    }

    const dfs = (idx: number): TreeNode | null => {
        if (resAsArr[idx] === undefined) return null

        return new TreeNode(resAsArr[idx], dfs(2 * idx + 1), dfs(2 * idx + 2))
    }

    return dfs(0)
};