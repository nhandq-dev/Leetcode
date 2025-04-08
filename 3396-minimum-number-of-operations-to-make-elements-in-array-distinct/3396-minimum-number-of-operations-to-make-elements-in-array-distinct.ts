function minimumOperations(nums: number[]): number {
    const setOfNum: Set<number> = new Set()
    const n = nums.length

    for (let i = 0; i < n; i++) {
        if (setOfNum.has(nums[n - 1 - i])) {
            return Math.ceil((n - i) / 3)
        }

        setOfNum.add(nums[n-1-i])
    }

    return 0
};