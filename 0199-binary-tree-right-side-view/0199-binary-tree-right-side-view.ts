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
    let stackOfTree: TreeNode[] = [root]
    const res: number[] = []

    while (stackOfTree.length !== 0) {
        const nextStack: TreeNode[] = []
        const lastItem = stackOfTree.pop()
        res.push(lastItem.val)

        if (lastItem.right) {
            nextStack.unshift(lastItem.right)
        }
        if (lastItem.left) {
            nextStack.unshift(lastItem.left)
        }

        for (let i = stackOfTree.length - 1; i >= 0; i--) {
            const currItem = stackOfTree[i]
            if (currItem.right) {
                nextStack.unshift(currItem.right)
            }
            if (currItem.left) {
                nextStack.unshift(currItem.left)
            }
        }

        stackOfTree = nextStack
    }

    return res
};