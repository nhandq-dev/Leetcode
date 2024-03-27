function firstMissingPositive(nums: number[]): number {
    nums = nums.filter((n) => n>0)
    const setOfNum = new Set(nums)
    let candidate = 1
    while (setOfNum.has(candidate)) {
        candidate++
    }
    return candidate
};