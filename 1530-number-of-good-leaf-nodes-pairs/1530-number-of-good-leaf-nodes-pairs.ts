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
    let count = 0;

    function dfs(node: TreeNode | null): number[] {
        if (!node) return [];
        if (!node.left && !node.right) return [0];

        const left = dfs(node.left);
        const right = dfs(node.right);

        for (const l of left) {
            for (const r of right) {
                if (l + r + 2 <= distance) {
                    count++;
                }
            }
        }

        return [...left, ...right].map(d => d + 1).filter(d => d < distance);
    }

    dfs(root);
    return count;
}