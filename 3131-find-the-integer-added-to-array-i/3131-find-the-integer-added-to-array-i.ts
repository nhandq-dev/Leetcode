function addedInteger(nums1: number[], nums2: number[]): number {
    const n = nums1.length
    return (nums2.reduce((c, i) => c+i, 0) - nums1.reduce((c, i) => c+i, 0)) / n
};