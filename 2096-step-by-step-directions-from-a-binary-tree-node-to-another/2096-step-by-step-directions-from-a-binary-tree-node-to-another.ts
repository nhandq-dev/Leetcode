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

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    let resB = ''
    let parentOfB: number[] = [startValue]
    let resE = ''
    let parentOfE: number[] = [destValue]

    const findBegin = (node: TreeNode | null): boolean => {
        if (node === null) return false
        if (node.val === startValue) {
            return true
        }

        if (findBegin(node.left)) {
            resB = `${resB}U`
            parentOfB.push(node.val)
            return true
        }
        if (findBegin(node.right)) {
            resB = `${resB}U`
            parentOfB.push(node.val)
            return true
        }

        return false
    }

    const findEnd = (node: TreeNode | null): boolean => {
        if (node === null) return false
        if (node.val === destValue) {
            return true
        }

        if (findEnd(node.left)) {
            resE = `L${resE}`
            parentOfE.push(node.val)
            return true
        }
        if (findEnd(node.right)) {
            resE = `R${resE}`
            parentOfE.push(node.val)
            return true
        }

        return false
    }
    findBegin(root)
    findEnd(root)
    parentOfB.pop()
    parentOfE.pop()

    while (parentOfB.length !== 0 && parentOfE.length !== 0 && parentOfB[parentOfB.length - 1] === parentOfE[parentOfE.length - 1]) {
        parentOfB.pop()
        resB = resB.slice(0, resB.length - 1)
        parentOfE.pop()
        resE = resE.slice(1)

    }

    return resB + resE
};