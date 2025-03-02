function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const res: number[][] = []

    while (nums1.length !== 0 && nums2.length !== 0) {
        const [candidate1, candidate2] = [nums1[0], nums2[0]]

        if (candidate1[0] < candidate2[0]) {
            res.push(candidate1)
            nums1.shift()
        } else if (candidate1[0] > candidate2[0]) {
            res.push(candidate2)
            nums2.shift()
        } else {
            res.push([candidate1[0], candidate1[1] + candidate2[1]])
            nums1.shift()
            nums2.shift()
        }
    }
    
    return res.concat(nums1).concat(nums2)
};