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

    const bfs = (): void => {
        const stack: {
            node: TreeNode,
            prefixXor: number
        }[] = [
            {
                node: root,
                prefixXor: 0
            }
        ]

        while (stack.length !== 0) {
            const { node: currNode, prefixXor: currPrefix } = stack.shift()

            if (currNode.left === null && currNode.right === null) {
                const newPrefix = currPrefix ^ (1 << currNode.val)
                res += newPrefix === 0 || Math.log2(newPrefix) % 1 === 0 ? 1 : 0
                continue
            }

            if (currNode.left !== null) {
                stack.push({
                    node: currNode.left,
                    prefixXor: currPrefix ^ (1 << currNode.val)
                })
            }

            if (currNode.right !== null) {
                stack.push({
                    node: currNode.right,
                    prefixXor: currPrefix ^ (1 << currNode.val)
                })
            }
        }
    }
    bfs()

    return res
};

/**

1 << 2


 */