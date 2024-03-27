function findDuplicates(nums: number[]): number[] {
    const n = nums.length
    const rightOrder: number[] = Array.from({ length: n })
    const res: number[] = []

    for (let i=0; i<n; i++) {
        if (rightOrder[nums[i]] === undefined) {
            rightOrder[nums[i]] = nums[i]
        } else {
            res.push(nums[i])
        }
    }

    return res
};

/**
0   1   2   3   4   5   6   7
4   3   2   7   8   2   3   1





 */