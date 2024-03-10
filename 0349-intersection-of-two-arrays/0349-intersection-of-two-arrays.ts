function intersection(nums1: number[], nums2: number[]): number[] {
    const setOfNums1: Set<number> = new Set(nums1)
    const res: number[] = []

    for (const num of nums2) {
        if (setOfNums1.has(num)) {
            res.push(num)
            setOfNums1.delete(num)
        }
    }

    return res
};