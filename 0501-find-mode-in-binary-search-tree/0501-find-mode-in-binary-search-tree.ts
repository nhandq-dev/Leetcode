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

function findMode(root: TreeNode | null): number[] {
    if (root === null) return [];
    const frequencyMap: Map<number, number> = new Map();
    let maxFrequence = 0;
    const res: number[] = [];

    const dfs = (node: TreeNode | null): void => {
        if (node === null) return

        if (!frequencyMap.has(node.val)) {
            frequencyMap.set(node.val, 0)
        }

        frequencyMap.set(node.val, frequencyMap.get(node.val) + 1)
        maxFrequence = Math.max(frequencyMap.get(node.val), maxFrequence)

        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    frequencyMap.forEach((frequence: number, nodeValue: number) => {
        if (frequence >= maxFrequence) {
            res.push(nodeValue)
        }
    })

    return res;
};