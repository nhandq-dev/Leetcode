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

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    switch (depth) {
        case 1:
            return new TreeNode(val, root);
        case 2:
            return new TreeNode(root.val, new TreeNode(val, root.left), new TreeNode(val, null, root.right));
        default:
            return traveling(root, val, depth)
    }
};

function traveling(tree: TreeNode, val:number, depth: number, deep: number = 1): TreeNode {
    if (deep === depth-1) {
        tree.left = new TreeNode(val, tree.left, null);
        tree.right = new TreeNode(val, null, tree.right);
        return tree;
    }

    if (tree.left !== null) {
        tree.left = traveling(tree.left, val, depth, deep+1)
    }
    if (tree.right !== null) {
        tree.right = traveling(tree.right, val, depth, deep+1)
    }
    return tree;
}