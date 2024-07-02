function intersect(nums1: number[], nums2: number[]): number[] {
    if (nums1.length > nums2.length) return intersect(nums2, nums1)
    const map1 = new Map()
    for (let i=0; i<nums1.length; i++) {
        map1.set(nums1[i], (map1.get(nums1[i]) || 0) + 1)
    }

    return nums2.filter(n => {
        if (map1.has(n) && map1.get(n) !== 0) {
            map1.set(n, map1.get(n) - 1)
            return true
        }
        return false
    })
};