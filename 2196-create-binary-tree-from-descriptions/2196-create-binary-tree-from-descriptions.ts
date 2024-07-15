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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const rootNode: Set<number> = new Set()
    const listChild: Set<number> = new Set()
    const setOfNode: Map<number, TreeNode> = new Map()

    for (const [nodeVal] of descriptions) {
        rootNode.add(nodeVal)
    }

    for (const [nodeVal, childVal, isLeft] of descriptions) {
        rootNode.delete(childVal)

        if (!setOfNode.has(nodeVal)) {
            setOfNode.set(nodeVal, new TreeNode(nodeVal))
        }
        if (!setOfNode.has(childVal)) {
            setOfNode.set(childVal, new TreeNode(childVal))
        }
        const node = setOfNode.get(nodeVal)

        if (isLeft) {
            node.left = setOfNode.get(childVal)
        } else {
            node.right = setOfNode.get(childVal)
        }

        setOfNode.set(nodeVal, node)
    }

    return setOfNode.get(Array.from(rootNode)[0])
};