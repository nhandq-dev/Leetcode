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

function countPairs(root: TreeNode | null, distance: number): number {
    let res = 0
    const leafNode: string[] = []

    const travelling = (node: TreeNode | null, path = '') => {
        if (node.left === null && node.right === null) leafNode.push(path)

        if (node.left !== null) {
            travelling(node.left, `${path}L`)
        }
        if (node.right !== null) {
            travelling(node.right, `${path}R`)
        }
    }
    travelling(root)

    for (let i = 0; i < leafNode.length - 1; i++) {
        for (let j = i + 1; j < leafNode.length; j++) {
            let leaf1 = leafNode[i]
            let leaf2 = leafNode[j]

            while (leaf1.at(0) === leaf2.at(0)) {
                leaf1 = leaf1.slice(1)
                leaf2 = leaf2.slice(1)
            }

            res += leaf1.length + leaf2.length <= distance ? 1 : 0
        }
    }

    return res
};

/**
98 1 1
15 2 2
78 3 2


 */