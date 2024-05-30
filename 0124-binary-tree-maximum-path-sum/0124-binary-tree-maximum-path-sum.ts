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

function maxPathSum(root: TreeNode | null): number {
  const total = totalSum(root);
  let res = root.val;

  const traveling = (node: TreeNode): number => {
    let leftVal = -1;
    let rightVal = -1;
    res = Math.max(res, node.val);

    if (!node.left && !node.right) {
      return Math.max(node.val, 0);
    }

    if (node.left) {
      leftVal = traveling(node.left);
    }

    if (node.right) {
      rightVal = traveling(node.right);
    }

    res = Math.max(res, node.val, node.val + leftVal, node.val + rightVal, node.val + leftVal + rightVal);
    return Math.max(node.val, node.val+leftVal, node.val+rightVal, 0);
  }
  traveling(root);

  return res;
};

function totalSum(node: TreeNode | null): number {
  return node === null ? 0 : node.val + totalSum(node.left) + totalSum(node.right);
}
