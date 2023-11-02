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

function averageOfSubtree(root: TreeNode | null): number {
    if (root === null) return 0;

    let res = 0;

    const dfs = (node: TreeNode | null): number[] => {
        let sum = node.val;
        let total = 1;

        if (node.left !== null) {
            const [leftSum, leftTotal] = dfs(node.left)
            sum += leftSum
            total += leftTotal
        }

        if (node.right !== null) {
            const [rightSum, rightTotal] = dfs(node.right)
            sum += rightSum
            total += rightTotal
        }

        if (node.val === Math.floor(sum/total)) res += 1

        return [sum, total]
    }
    dfs(root);

    return res
};