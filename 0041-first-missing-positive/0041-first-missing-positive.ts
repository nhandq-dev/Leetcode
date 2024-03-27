function firstMissingPositive(nums: number[]): number {
    nums = nums.filter((n) => n>0)
    const n = nums.length
    nums = nums.filter((num) => num<=n)

    const setOfNum = new Set(nums)
    let candidate = 1

    while (setOfNum.has(candidate)) {
        candidate++
    }

    return candidate
};