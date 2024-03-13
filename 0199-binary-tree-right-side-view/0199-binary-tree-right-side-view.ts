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

function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return []
    let queueOfTree: TreeNode[] = [root]
    const res: number[] = []

    while (queueOfTree.length !== 0) {
        const n = queueOfTree.length - 1

        for (let i = n; i >= 0; i--) {
            const currItem = queueOfTree.pop()
            if (i === n) {
                res.push(currItem.val)
            }
            if (currItem.right) {
                queueOfTree.unshift(currItem.right)
            }
            if (currItem.left) {
                queueOfTree.unshift(currItem.left)
            }
        }
    }

    return res
};