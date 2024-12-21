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
    let isOdd = false

    while (stack.length > 0) {
        const currLevelVal = []
        const n = stack.length

        for (let i = 0; i < n; i++) {
            const crrNode: TreeNode | null = stack.shift()
            currLevelVal.push(crrNode.val)

            if (crrNode.left) {
                stack.push(crrNode.left)
                stack.push(crrNode.right)
            }
        }

        if (isOdd) {
            resAsArr = resAsArr.concat(currLevelVal.reverse())
        } else {
            resAsArr = resAsArr.concat(currLevelVal)
        }


        isOdd = !isOdd
    }

    const dfs = (idx: number): TreeNode | null => {
        if (resAsArr[idx] === undefined) return null

        return new TreeNode(resAsArr[idx], dfs(2 * idx + 1), dfs(2 * idx + 2))
    }

    return dfs(0)
};