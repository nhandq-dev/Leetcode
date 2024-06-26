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

function bstToGst(root: TreeNode | null): TreeNode | null {
    let currSum = 0

    const traveling = (node: TreeNode | null) => {
        const right = node.right === null ? null : traveling(node.right)

        const nodeVal = node.val + currSum
        currSum = nodeVal

        const left = node.left === null ? null : traveling(node.left)
        return new TreeNode(nodeVal, left, right)
        
    }
    return traveling(root)
};