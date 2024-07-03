function minDifference(nums: number[]): number {
    if (nums.length <= 4) return 0
    nums.sort((a, b) => a-b)
    const n = nums.length

    return Array.from({ length: 4 }).reduce((minDiff: number, _, idx: number) => {
        return Math.min(
            minDiff,
            nums[n - 4 + idx] - nums[idx]
        )
    }, Number.POSITIVE_INFINITY)
};