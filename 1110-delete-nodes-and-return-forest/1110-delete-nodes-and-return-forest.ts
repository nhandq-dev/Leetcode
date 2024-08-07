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

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const res: (TreeNode | null)[] = []
    const toDelete: Set<number> = new Set(to_delete)

    const travelling = (node: TreeNode | null): TreeNode | null => {
        if (node === null) return null

        if (toDelete.has(node.val)) {
            toDelete.delete(node.val)
            res.push(travelling(node.left))
            res.push(travelling(node.right))

            return null
        }

        node.left = travelling(node.left)
        node.right = travelling(node.right)
        return node
    }
    res.push(travelling(root))

    return res.filter(Boolean)
};